import '../App.css'
// import { GoogleLogin } from '@react-oauth/google';
import google from '/google.png'

const LogIn = () => {
  // const responseMessage = (response) => {
  //   console.log(response);
  // };
  
  // const errorMessage = (error) => {
  //     console.log(error);
  // };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="w-full max-w-sm bg-gray-100 p-6 rounded-lg shadow-md">
        <form className="space-y-4">
          <div className="flex flex-col gap-3.5 text-left">
            <label className="block text-gray-700 font-medium">Email</label>
            <input 
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
            />
          </div>
          <div className="flex flex-col gap-3.5 text-left">
            <label className="block text-gray-700 font-medium">Password</label>
            <input 
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
            />
          </div>
          <button 
            type="submit"
            className=" flex flex-col mt-6 w-full bg-black text-white p-3 rounded-lg hover:bg-gray-900"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 flex items-center text-left  space-x-3">
          <a href="#" className="text-gray-700 underline">
            Or login with Google
          </a>
          <img 
            src={google} 
            alt="Google Logo" 
            className="h-6 w-6 rounded-full"  
          />
        </div>
      </div>
    </div>
  );
}

export default LogIn;
