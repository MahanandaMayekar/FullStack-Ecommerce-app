import React from "react";

const Login = () => {
  return (
    <div className="w-3/4 sm:w-1/2 m-auto ">
      <div className=" bg-slate-300/55 flex flex-col items-center justify-start shadow-lg rounded-md border">
        <h1 className="text-3xl flex  p-4">Admin Panel</h1>
        <div className=" w-full pl-2 pr-2 sm:w-1/2">
          <form className="flex flex-col  gap-4">
            <div>
              <label htmlFor="email" className="text-sm font-semibold">
                Email:
              </label>
              <input
                type="email"
                placeholder="Your@email.com"
                className="border-2 w-full p-2 outline-none rounded-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-semibold ">
                Password:
              </label>
              <input
                type="password"
                placeholder="Password"
                className="border-2 w-full p-2 outline-none rounded-sm"
                required
              />
            </div>
          </form>
          <button
            type="submit"
            className="bg-black w-full text-white p-2 rounded-sm active:bg-slate-700 mt-6 mb-6 "
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
