import '../App.css'
// import { GoogleLogin } from '@react-oauth/google';
// import google from '/google.png'

const LogIn = () => {
  // const responseMessage = (response) => {
  //   console.log(response);
  // };
  
  // const errorMessage = (error) => {
  //     console.log(error);
  // };

  return (
    <div className='flex flex-col'>
      <header className='w-full h-24 flex justify-between items-center px6 bg-gray-100 shadow-md'>
        <h1 className='text-xl font-semibold'>QUIZQUIZ</h1>
        <button className='px-4 py-2 bg-blue-400 text-white rounded-lg'>Sign Up</button>
      </header>
    </div>
  )
}

export default LogIn;