import '../App.css';
import { useGoogleLogin } from '@react-oauth/google'; //googleLogout
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux"; //useSelector
import { setUser } from "../store/Slices/UserSlice"; //clearUser

const LogIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const user = useSelector((state) => state.user); // Get user from Redux

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${codeResponse.access_token}`,
                        Accept: 'application/json',
                    },
                })
                .then((res) => {
                    dispatch(setUser({
                        userName: res.data.name,
                        email: res.data.email,
                        picture: res.data.picture, // Save profile picture
                    }));
                    navigate('/main');
                })
                .catch((err) => console.log(err));
        },
        onError: (error) => console.log('Login Failed:', error),
    });

    // const logOut = () => {
    //     googleLogout();
    //     dispatch(clearUser());
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
                        className="cursor-pointer flex flex-col mt-6 w-full bg-black text-white p-3 rounded-lg hover:bg-gray-900"
                    >
                        Sign In
                    </button>
                </form>

                {/* Google Sign-In */}
                <div className="mt-4 flex flex-col items-center space-y-3">
                        <button 
                            onClick={login} 
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Sign in with Google 🚀
                        </button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
