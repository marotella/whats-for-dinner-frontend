
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const RegisterForm = ({ registerUser }) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match, please try again!")
      return
    }
    try {
      const response = await registerUser(username, email, password)
      if (response.status === 201) {
        navigate("/ingredients")
      } else {
        const errorMessageResponse = await response.json()
        if (errorMessageResponse.message === "A user with that email already exists. Please login.") {
          setErrorMessage("A user with that email already exists. Please login.")
        } else {
          setErrorMessage("An account already exists under that email. Please login.")
        }
      }
    } catch (error) {
      setErrorMessage(error.message)
      console.error(error)
    }
  }
  return (
    <div>
      <h1 class="p-5 font-medium fontsize text-3xl text-center">Register for What's for Dinner</h1>
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 p-5 flex flex-col">
          <p class="p-5">Enter your information below to create and account! Then you can get started creating your kitchen and finding new recipes to prepare.</p>
          {errorMessage && <p class="text-orange-medium p-5">{errorMessage}</p>}
          <div>
            <form  class= "p-5" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div class="flex justify-center">
                <button class="bg-green-700 hover:bg-white border-green-500 rounded-lg px-5 m-3 text-white hover:text-green-700 focus:bg-orange-500 focus:text-white" type="submit">Register</button>
              </div>
            </form>
          </div>
          </div>
          <div class="w-1/2 p-5">
            <img src={process.env.PUBLIC_URL + '/Apron.jpg'} alt="apron" className="registerImage" />
        </div>
      </div>
    </div>
  );
}

export default RegisterForm