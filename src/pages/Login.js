import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginForm = ({ loginUser, getIngredientData }) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    loginUser(username, email, password)
    navigate("/ingredients")
    getIngredientData()
  }
  return (
    <div>
      <h1 className="p-5 font-medium fontsize text-3xl text-center">Log in to What's for Dinner</h1>
      <div className="flex flex-row">
        <div className=" w-full md:w-1/2 flex flex-col w-1/2 p-5">
          <p className="p-5">Enter your email and password below to login into your account.</p>

          <form className="p-5" onSubmit={handleSubmit}>
            <label>
              <p className="text-orange font-medium">Username: </p>
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              <p className="text-orange font-medium">Email: </p>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <p className="text-orange font-medium">Password: </p>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div>
              <button className="bg-green hover:bg-white border-lightGreen rounded-lg px-5 m-3 text-white hover:text-green focus:bg-orange focus:text-white" type="submit">Log In</button>
            </div>
          </form>
        </div>
        <div className="w-1/2 max-h-200 p-5 flex justify-content">
          <img className="max-h-100 object-contain loginImage" src={process.env.PUBLIC_URL + '/Aprontie.jpg'} alt="apron-tie" />
        </div>
      </div>
    </div>

  );
}

export default LoginForm