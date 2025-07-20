// import {Link, useNavigate} from "react-router-dom"
// import { useAuth } from "../context/AuthContext"
// import { useState } from "react"
// function SignUp() {
//   const {signup} = useAuth()
//   const [form,setForm] = useState({name:"",email:"",password:""})
//   const navigate = useNavigate()
//   const [err,setErr] = useState("")

//   const handleChange=(e)=>{
//     setForm({...form,[e.target.name]:e.target.value})
//   }

//   const handleSubmit=async(e)=>{
//     e.preventDefault()
//     setErr("")
//     try {
//       await signup({email:form.email,password:form.password,name:form.name})
//       navigate("/login")
//     } catch (error) {
//       setErr(error.message || "Sign Up Failed")
//     }
//   }
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 flex items-center justify-center px-4 py-10">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 sm:p-10">
//         {/* Header */}
//         <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
//           Create an Account
//         </h2>
//         <p className="text-center text-gray-600 mb-8 text-sm sm:text-base">
//           Join MyBlog to start exploring and creating content.
//         </p>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               onChange={handleChange}
//               value={form.name}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               onChange={handleChange}
//               value={form.email}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               onChange={handleChange}
//               value={form.password}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
//           >
//             Sign Up
//           </button>

//           {/* Login Link */}
//           <p className="text-center text-gray-600 text-sm mt-4">
//             Already have an account?{" "}
//             <Link
//               to="/login"
//               className="text-cyan-600 font-medium hover:underline"
//             >
//               Login Now
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default SignUp

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function SignUp() {
  const { signup } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await signup({
        email: form.email,
        password: form.password,
        name: form.name,
      });
      navigate("/login");
    } catch (error) {
      setErr(error.message || "Sign Up Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 sm:p-10">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        <p className="text-center text-gray-600 mb-8 text-sm sm:text-base">
          Join MyBlog to start exploring and creating content.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              value={form.name}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={form.email}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={form.password}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
            />
          </div>

          {/* Error Message */}
          {err && (
            <p className="text-red-500 text-sm text-center">{err}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-cyan-600 font-medium hover:underline"
            >
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
