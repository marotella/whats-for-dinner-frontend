
import React, { useState } from "react"
import {useNavigate} from "react-router-dom"

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
      if (response.status === 201 ) {
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
        <h1>Register for your What's for Dinner Account</h1>
        <p>Enter your information below to create and account! Then you can get started creating your kitchen and finding new recipes to prepare.</p>
        {errorMessage && <p>{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
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
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }

  export default RegisterForm