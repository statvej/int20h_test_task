import '../App.css';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setUser } from "../store/Slices/UserSlice";
import Header from "./Header";
import { useEffect } from 'react';

const LogIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
            if (user) {
                dispatch(setUser({
                    userName: user.data.name,
                    email: user.data.email,
                    picture: user.data.picture,
                    authMethod: user.way,
                }));
                navigate('/');
            }
        } catch (error) {
            console.error("Error parsing user data from localStorage:", error);
            localStorage.removeItem('user');
        }
    }, [dispatch, navigate]);

    const login = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            try {
                const res = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${codeResponse.access_token}`,
                        Accept: 'application/json',
                    },
                });

                const userData = {
                    data: res.data,
                    way: 'google',
                };

                localStorage.setItem('user', JSON.stringify(userData));
                dispatch(setUser({
                    userName: res.data.name,
                    email: res.data.email,
                    picture: res.data.picture,
                    authMethod: res.data.way,
                }));

                navigate('/');
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        },
        onError: (error) => console.error('Login Failed:', error),
    });

    return (
        <div className="flex flex-col min-h-screen items-center justify-center">
            <Header flag='0' />
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
                        className="cursor-pointer mt-6 w-full bg-black text-white p-3 rounded-lg hover:bg-gray-900"
                    >
                        Sign In
                    </button>
                </form>

                {/* Google Sign-In */}
                <div className="mt-4 flex flex-col items-center space-y-3">
                    <button 
                        onClick={login} 
                        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        Sign in with Google 🚀
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
