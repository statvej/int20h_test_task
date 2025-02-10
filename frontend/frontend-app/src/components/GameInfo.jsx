import '../App.css';
import Header from "./Header";
// import { useSelector } from "react-redux";
import { UserRound } from "lucide-react";


const GameInfo = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Header flag="1" />

            <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
                <div className="mt-10 flex">
                    <div>
                        <UserRound className="h-18 w-18 rounded-full" />
                        <p className="text-gray-500">Irina R15</p>
                    </div>
                    <div className="pr-15">
                        <h1 className="text-2xl font-semibold mt-2">Game Name</h1>
                        <p className="text-gray-600">5 questions</p>
                        <button className="mt-3 px-4 py-2 bg-black text-white rounded-lg">Play</button>
                    </div>
                  <div className="flex justify-self-start gap-4">
                     {/* <img src={user.profilePic} alt="Profile" className="w-16 h-16 rounded-full" /> */}
                     {/* <UserRound className="h-20 w-20 rounded-full" /> */}
                     {/* <div className="flex text-left flex-col gap-1 justify-self-start"> */}
                         {/* <h2 className="text-xl font-semibold">Game Name</h2> */}
                         {/* <a className=" text-gray-600">5 questions</a> */}
                         {/* <button className="ml-auto bg-black text-white px-11 py-0 rounded">Play</button> */}
                     {/* </div> */}
                 </div>
                    {/* Правая часть (изображение) */}
                    <div className="w-2/3">
                        <div className="w-full h-40 bg-gray-300 flex items-center justify-center">
                            <span className="text-gray-500">Image Placeholder</span>
                        </div>
                    </div>
                </div>

                {/* Описание */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Description</h2>
                    <p className="text-gray-700 text-sm mt-2">
                        This is a description of the game. Players will answer multiple questions and try to get the highest score possible.
                    </p>
                </div>

                {/* Рейтинг */}
                <div className="mt-4 flex items-center">
                    <div className="flex space-x-1 text-gray-700">
                        <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>☆</span>
                    </div>
                    <p className="ml-2 text-gray-600 text-sm">4.1/5</p>
                </div>

                {/* Блок "Recommended" */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Recommended</h2>
                    <div className="flex space-x-4 mt-2">
                        <div className="w-24 h-24 bg-gray-300 rounded-lg"></div>
                        <div className="w-24 h-24 bg-gray-300 rounded-lg"></div>
                        <div className="w-24 h-24 bg-gray-300 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameInfo;


// import '../App.css';
// import Header from "./Header";
// import { useSelector } from "react-redux";
// import { UserRound } from "lucide-react";

// const GameInfo = () => {
//     const user = useSelector((state) => state.user);

//     return (
//         <div>
//             <Header flag='1' />
//             <div className="mt-25 px-10 pt-6">
//             <div className="flex justify-self-start gap-4">
//                 {/* <img src={user.profilePic} alt="Profile" className="w-16 h-16 rounded-full" /> */}
//                 <UserRound className="h-20 w-20 rounded-full" />
//                 <div className="flex text-left flex-col gap-1 justify-self-start">
//                     <h2 className="text-xl font-semibold">Game Name</h2>
//                     <a className=" text-gray-600">5 questions</a>
//                     <button className="ml-auto bg-black text-white px-11 py-0 rounded">Play</button>
//                 </div>
//             </div>
//             {/* <div className="px-20 flex justify-self-start"> */}
//             {/* </div> */}
//         </div>
//         </div>
//     )
// };

// export default GameInfo;