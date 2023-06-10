
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
      setErrorMessage("An error occured. Please try again.")
      console.error(error)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="p-5 font-medium fontsize text-3xl text-center">Register for What's for Dinner</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-5">
          <p className="p-5">
          Ready to embark on a culinary adventure? Join Whats for Dinner today and unleash your inner chef! 
          Enter your information below to create and account! Then you can get started creating your kitchen and finding new recipes to prepare.</p>
        {errorMessage && <p className="text-orange p-5">{errorMessage}</p>}
        <form className="p-5 flex flex-col" onSubmit={handleSubmit}>
          <label className="text-orange font-medium">
            Username:
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="text-orange font-medium">
            Email:
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="text-orange font-medium">
            Password:
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label className="text-orange font-medium">
            Confirm Password:
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <div className="">
            <button className="bg-green hover:bg-white border-green rounded-lg px-10 m-3 text-white hover:text-green focus:bg-orange focus:text-white" type="submit">Register</button>
          </div>
        </form>
      </div>
      <div className="md:w-1/3 md:max-h-200 p-5 flex">
        <img src={process.env.PUBLIC_URL + '/apron.jpg'} alt="apron" className="registerImage" />
      </div >
    </div >
    </div >
  );
}

export default RegisterForm