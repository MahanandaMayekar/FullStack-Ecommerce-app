import { Loader } from 'lucide-react';
import React, { useEffect } from "react";
import { toast } from 'react-toastify';


const Login = ({
  setLogin,
  login,
  handleLoginSubmit,
  isLoading,
  isSuccess,
  error
}) => {

  useEffect(() => {
    if (isSuccess) {
      toast("successfully logged in")
    }
  },[isSuccess])
      
  useEffect(() => {
    if (error) {
      toast.error(error.message ||"Login failed please try again.")
    }
  },[error])
  

  return (
    <div className="w-3/4 sm:w-1/2 m-auto   ">
      <div className=" bg-slate-300/55 flex flex-col items-center justify-start shadow-lg rounded-md border ">
        <h1 className="text-3xl flex  p-4">Admin Panel</h1>
        <div className=" w-full pl-2 pr-2 sm:w-1/2">
          <form className="flex flex-col  gap-4" onSubmit={handleLoginSubmit}>
            <div>
              <label htmlFor="email" className="text-sm font-semibold">
                Email:
              </label>
              <input
                type="email"
                placeholder="Your@email.com"
                className="border-2 w-full p-2 outline-none rounded-sm"
                required
                value={login.email}
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
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
                value={login.password}
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="bg-black w-full text-white p-2 rounded-sm active:bg-slate-700 mt-6 mb-6 "
            >
              {isLoading ? (
                <div className="flex justify-center items-center ">
                  <Loader className=" animate-spin rotate-180" />;
               
                </div>
              ) : (
                "LOGIN"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
