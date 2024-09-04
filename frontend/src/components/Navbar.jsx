import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const user = true;
    const isAdmin = true;
    const cartLength = 1;


  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40">
      <div className="container flex justify-between mx-auto px-8 py-3">
        <Link
          to="/"
          className="text-2xl text-emerald-400 font-bold items-center space-x-2 flex"
        >
          E Commerce
        </Link>

        <nav className="flex flex-wrap items-center gap-4">
            <Link to='/' className="text-white hover:text-emerald-400 transition duration-300 ease-in-out">Home</Link>
            {user && (
                <Link to='/cart' className="relative group flex items-center gap-2">
                    <ShoppingCart className="group-hover:text-emerald-400" size={20} />
                    <span className="hidden sm:inline">Cart</span>
                    {
                        (cartLength > 0) && (
                            <span className="absolute font-bold text-xs -top-2 -right-5 bg-emerald-500 text-white rounded-full px-1.5 py-0.5
                    group-hover:bg-emerald-400 transition duration-300 ease-in-out">9</span>
                        )
                    }
                </Link>
            )}
            {
                isAdmin && (
                    <Link
                    to="/"
                    className="ms-4 text-white bg-emerald-700 hover:bg-emerald-600 rounded-md p-2 transition duration-300 ease-out font-medium items-center space-x-2 flex"
                  >
                    <Lock size={20} />
                    <span className="hidden sm:inline">Dashboard</span>
                  </Link>
                )
            }

            {
                user ? (
                    <Link
                    title="Log out"
                    to="/logout"
                    className=" text-white bg-gray-700 hover:bg-gray-600 rounded-md p-2 transition duration-300 ease-out font-medium items-center space-x-2 flex"
                  >
                    <LogOut size={20} />
                    {/* <span className="hidden sm:inline">Log out</span> */}
                  </Link>
                ): (
                    <>
                        <Link
                    title="Sign up"
                    to="/login"
                    className=" text-white bg-emerald-700 hover:bg-emerald-600 rounded-md p-2 transition duration-300 ease-out items-center space-x-2 flex"
                  >
                    <UserPlus size={20} />
                    <span className="hidden sm:inline">Sign Up</span>
                  </Link><Link
                    title="Log in"
                    to="/login"
                    className=" text-white bg-gray-700 hover:bg-gray-600 rounded-md p-2 transition duration-300 ease-out items-center space-x-2 flex"
                  >
                    <LogIn size={20} />
                    <span className="hidden sm:inline">Log In</span>
                  </Link>
                    </>
                )
            }
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
