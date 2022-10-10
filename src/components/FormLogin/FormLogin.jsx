import React from "react";
import useLogin from "../../hooks/useLogin";
import FormAlert from "./FormAlert";

const FormLogin = () => {
  const formik = useLogin();

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col justify-center">
      <form
        className="mx-5 flex flex-col h-auto md:w-2/4 lg:w-1/3 md:mx-auto md:bg-gray-800 md:p-6 rounded-md"
        onSubmit={formik.handleSubmit}
      >
        <h2 className="text-2xl font-bold text-gray-300">Login</h2>
        <label className="mt-3 text-lg text-gray-300" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md p-1 bg-gray-700 border-none text-gray-400 valid:bg-gray-700"
          type="text"
          name="email"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Email here"
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{<FormAlert>{formik.errors.email}</FormAlert>}</div>
        ) : null}
        <label className="mt-2 text-lg text-gray-300" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md p-1 bg-gray-700 border-none text-gray-400"
          type="password"
          name="password"
          id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Password here"
          autoComplete="true"
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{<FormAlert>{formik.errors.password}</FormAlert>}</div>
        ) : null}
        <button
          className="bg-indigo-700 mt-3 rounded-md py-1 text-white text-lg font-bold"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
