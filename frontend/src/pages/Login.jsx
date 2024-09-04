import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl text-center font-bold text-emerald-400">
          Create your account
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
      >
        <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label htmlFor="email" className="text-gray-300">
                Email
              </label>
              <div className="mt-2 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-400" size={20} />
                </div>
                <input
                  className="w-full h-full
                p-2 pl-10 bg-gray-700 border-gray-600 rounded-md shadow-sm
                placeholder-gray-400 focus:outline-none focus:ring-1 ring-emerald-500 focus:border-emerald-500"
                  placeholder="email@example.com"
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({...formData, email:e.target.value})
                  }}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="text-gray-300">
                Password
              </label>
              <div className="mt-2 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-400" size={20} />
                </div>
                <input
                  className="w-full h-full
                p-2 pl-10 bg-gray-700 border-gray-600 rounded-md shadow-sm
                placeholder-gray-400 focus:outline-none focus:ring-1 ring-emerald-500 focus:border-emerald-500"
                  placeholder="********"
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({...formData, password:e.target.value})
                  }}
                />
              </div>
            </div>
            <button type="submit" className="w-full flex justify-center bg-emerald-600 p-2 border border-transparent
            rounded-md shadow-sm text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-emerald-500 transition duration-150 ease-in-out disabled:opacity-50" disabled={loading}>
              {
                loading ? (
                  <>
                    <Loader className="mr-2 h-5 w-5 animate-spin" aria-hidden='true' />
                    Loading...
                  </>
                ):(
                  <>
                    Log In
                  </>               
                )
              }
            </button>
          </form>
          <div className="flex justify-center mt-6 text-sm text-gray-300">
          <p>Don&#39;t have an account? 
            <Link to={"/signup"} className="text-emerald-500 font-bold ml-2 hover:text-emerald-400 transition duration-150 ease-in-out">Sign Up</Link>
          </p>
        </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LogIn;
