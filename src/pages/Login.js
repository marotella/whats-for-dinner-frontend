import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginForm = ({ loginUser }) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    loginUser(username, email, password)
  }
  return (
    <div>
      <h1 class="p-5 font-medium fontsize text-3xl text-center">Log in to What's for Dinner</h1>
      <div class="flex flex-row">
        <div class=" w-full md:w-1/2 flex flex-col w-1/2 p-5">
          <p class="p-5">Enter your email and password below to login into your account.</p>

          <form class="p-5" onSubmit={handleSubmit}>
            <label>
              <p class="text-orange font-medium">Username: </p>
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              <p class="text-orange font-medium">Email: </p>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <p class="text-orange font-medium">Password: </p>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div>
              <button class="bg-green hover:bg-white border-lightGreen rounded-lg px-5 m-3 text-white hover:text-green focus:bg-orange focus:text-white" type="submit">Log In</button>
            </div>
          </form>
        </div>
        <div class="w-1/2 max-h-200 p-5 flex justify-content">
          <img class="max-h-100 object-contain" src={process.env.PUBLIC_URL + '/Aprontie.jpg'} alt="apron-tie" className="loginImage" />
        </div>
      </div>
    </div>

  );
}

export default LoginForm