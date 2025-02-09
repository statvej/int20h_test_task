import Header from "./Header";

const Verify = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Header flag='2' />
      <div className="w-full max-w-sm bg-gray-100 p-6 rounded-lg shadow-md">
        <form className="space-y-4">
          <div className="flex flex-col gap-2.5 text-left">
            <label className="block text-gray-700 font-medium">Enter your code from Email:</label>
            <input 
              type="text"
              placeholder="xx-yy-zz"
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
            />
          </div>
          <button 
            type="submit"
            className=" flex flex-col mt-6 w-full bg-black text-white p-3 rounded-lg hover:bg-gray-900"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}

export default Verify
