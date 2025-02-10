import '../App.css';
import Header from "./Header";
import { UserRound } from "lucide-react";
import StarRating from "./Star";
import { useState } from "react";
import MainGameCards from "./MainGameCards";

const GameInfo = () => {
    const [rating, setRating] = useState(3);

    return (
        <div className="flex justify-center items-center bg-gray-100 min-h-screen">
            <Header flag="1" />

            <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
                <div className="mt-8 flex gap-4">
                    <div className="w-1/3 flex flex-col">
                        <div className="flex items-center gap-2">
                            <div className="flex flex-col">
                                <UserRound className="h-20 w-20 rounded-full" />
                                <p className="text-xs text-gray-500">Irina R15</p>
                            </div>
                            <div>
                                <h1 className="text-left text-xl font-semibold">Game Name</h1>
                                <p className="text-left text-gray-500">5 questions</p>
                                <button className="mt-1 bg-black text-white px-13 py-0.5 rounded">Play</button>
                            </div>
                        </div>
                            <h2 className="text-left font-semibold">Description:</h2>
                        <div className="p-2 bg-gray-100 rounded-lg h-55 overflow-y-auto scrollbar-hide">
                            <p className="text-gray-700 text-left">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                        </div>
                    </div>
                    <div className="w-2/3">
                        <div className="w-full h-80 bg-gray-300 flex items-center justify-center">
                            <span className="text-gray-500">Image Placeholder</span>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex items-center">
                    <div className="flex justify-between space-x-133 text-gray-700">
                        <h2 className="text-xl font-semibold">Recommended</h2>
                        <StarRating rating={rating} setRating={setRating} />                         
                    </div>
                    <p className="ml-2 text-gray-600 text-xl">{rating}/5</p>
                </div>
                {/* Блок "Recommended" */}
                {/* <div className="mt-6">
                    <div className="flex space-x-20 mt-2">
                    {[1, 2, 3, 4, 5].map((game) => (
                        <div className="w-24 h-24 bg-gray-300 rounded-lg" key={game}></div>
                    ))}
                    </div>
                </div> */}
                <div className="grid grid-cols-3 gap-20 justify-center mt-2">
                    {[1, 2, 3].map((game) => (
                    <div key={game} className="list-none">
                        <MainGameCards />
                    </div>
                    ))}
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