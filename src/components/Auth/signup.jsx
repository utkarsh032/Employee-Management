import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useContext, useState } from 'react'
import { auth } from './firebase'
import { ThemeContext } from '../../context/ThemeContext'
import { Link } from 'react-router-dom'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { theme } = useContext(ThemeContext)

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredential.user)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={`${theme ? 'dark' : 'light'} min-h-screen flex items-center justify-center shadow-2xl`}>
      <div className={`${theme ? 'dark' : 'light'} shadow-md rounded-lg p-8 border w-full max-w-sm`}>
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-300">Sign Up</h1>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="abc@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${theme ? 'dark' : 'light'} mt-1 px-4 py-2 w-full border rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none`}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="abx93#s08d"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`${theme ? 'dark' : 'light'} mt-1 px-4 py-2 w-full border rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none`}
            />
          </div>
          <input
            type="submit"
            value="Sign Up"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
          />
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}