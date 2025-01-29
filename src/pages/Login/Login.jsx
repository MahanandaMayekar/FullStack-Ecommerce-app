import React from 'react'

const Login = ({ currentState, setCurrentState, handleFormSubmit }) => {
  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col justify-center items-center w-full sm:max-w-96  m-auto gap-2 "
    >
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl">{currentState}</p>
        <hr className="bg-black w-8 h-[1.5px]" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          placeholder="Name.."
          className="border-2 w-full p-2"
          required
        />
      )}

      <input
        type="Email"
        placeholder="email"
        className="border-2 w-full p-2"
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="border-2 w-full p-2"
        required
      />
      <div className="flex flex-row items-center w-full justify-between">
        <p className="text-blue-700 text-sm hover:underline">
          Forgot your password?
        </p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="text-sm hover:text-gray-600"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="text-sm hover:text-gray-600"
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white p-3 rounded-sm active:bg-slate-700 mt-6 ">
        {currentState === "Login" ? "Login" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login
