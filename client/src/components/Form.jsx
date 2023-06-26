import React from "react";
import { Link } from "react-router-dom";

const Form = ({ text, handleSubmit, path, onChangeEmail, onChangePassword, linkText }) => {

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 border w-2/4 h-2/4 justify-evenly items-center rounded-3xl bg-orange-200 shadow-2xl shadow-orange-600"
    >
      <h1 className="font-bold text-4xl">{text}</h1>
      <div className="w-3/4 flex flex-col gap-4">
        <label className="font-bold" htmlFor="email">
          Email
        </label>
        <input
          className="border rounded-2xl h-10 pl-4 outline-none focus:border-emerald-700 shadow-lg"
          type="email"
          name="email"
          onChange={onChangeEmail}
          required
        />
      </div>
      <div className="w-3/4 flex flex-col gap-4">
        <label className="font-bold" htmlFor="password">
          Password
        </label>
        <input
          className="border rounded-2xl h-10 pl-4 outline-none focus:border-emerald-700 shadow-lg"
          type="password"
          name="password"
          onChange={onChangePassword}
          required
        />
      </div>
      <input
        className="w-3/4 rounded-3xl p-3 bg-orange-500 font-bold text-2xl cursor-pointer hover:bg-orange-950 hover:text-white"
        type="submit"
        value={text}
      />
      <Link to={path}>{linkText}</Link>
    </form>
  );
};

export default Form;
