import { useState } from "react";
import { Layout } from "../Layout/index.jsx";
import { BtnForm, InputForm, LabelForm } from "../ui/index.js";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", email);
    console.log("pass:", password);
  };

  return (
    <Layout>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 border-2 rounded-lg gap-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <LabelForm htmlFor="email">Email address</LabelForm>
            <div className="mt-2">
              <InputForm
                type="email"
                value={email}
                placeholder="insert to email"
                onChange={handlEmailChange}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <LabelForm htmlFor="password">Password</LabelForm>
            </div>
            <div className="mt-2">
              <InputForm
                type="password"
                value={password}
                placeholder="insert to password"
                onChange={handlePassword}
                required
              />
            </div>
            <div className="text-sm flex justify-end">
              <a className="font-semibold text-black hover:text-slate-400">
                Forgot password?
              </a>
            </div>

            <div className="flex justify-center">
              <BtnForm type="submit">Login</BtnForm>
            </div>
          </form>
        </div>
        <div className="flex justify-center">
          <BtnForm type="submit">Sign up</BtnForm>
        </div>
      </div>
    </Layout>
  );
};
