import { ref } from "../../components/ui/InputForm.jsx";
import { useForm } from "react-hook-form";
import { Layout } from "../../components/Layout/index.jsx";
import { InputForm, LabelForm } from "../../components/ui/index.js";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../context/index.jsx";
import { Navigate } from "react-router-dom";
import { Button } from "../../components/ui/Button.jsx";

export const SignIn = () => {
  const context = useContext(ShoppingCartContext);
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [view, setView] = useState("user-info");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const account = localStorage.getItem("account");

  const parsedAccount = JSON.parse(account);

  const isAccountLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const isAccountLocalState = context.account
    ? Object.keys(account).length === 0
    : true;
  const isUserAccount = !isAccountLocalStorage || isAccountLocalState;
  console.log(isUserAccount);

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false);
    localStorage.setItem("sign-out", stringifiedSignOut);
    context.setSignOut(false);
    setRedirectToHome(true);
  };

  if (redirectToHome) {
    return <Navigate replace to={"/"} />;
  }

  const renderCreateUserInfo = () => {
    const onSubmit = (data) => {
      localStorage.setItem("account", JSON.stringify(data));
      context.setAccount(data);
      handleSignIn();
    };

    return (
      <div className="flex sm:mx-auto sm:w-80 sm:max-w-sm min-h-full flex-col justify-center px-10 py-12 lg:px-8 border-2 rounded-lg gap-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome
          </h2>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <LabelForm htmlFor="name">Your name</LabelForm>
          <div className="mt-2">
            <InputForm
              type="name"
              id="name"
              ref={ref}
              {...register("name", { required: "name is required" })}
              autoComplete="on"
              placeholder="insert to name"
              required
            />
            {errors?.name?.message}
          </div>

          <LabelForm htmlFor="email">Your email</LabelForm>
          <div className="mt-2">
            <InputForm
              type="email"
              id="email"
              ref={ref}
              {...register("email", { required: "email is required" })}
              autoComplete="on"
              placeholder="insert to email"
            />
            {errors?.email?.message}
          </div>

          <LabelForm htmlFor="password">Password</LabelForm>

          <div className="mt-2">
            <InputForm
              type="password"
              id="password"
              ref={ref}
              {...register("password", {
                required: "password is required",
              })}
              autoComplete="on"
              placeholder="insert to password"
            />
            {errors?.password?.message}
          </div>

          <div>
            <Button type="submit" className="justify-center">
              Create
            </Button>
          </div>
        </form>
      </div>
    );
  };

  const renderLogin = () => {
    return (
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 border-2 rounded-lg gap-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3">
            <LabelForm htmlFor="email">email</LabelForm>
            <div className="mt-2">
              <InputForm
                type="email"
                id="email"
                ref={ref}
                defaultValue={parsedAccount.email}
                // {...register("email", { required: "email is required" })}
                autoComplete="on"
                placeholder="insert to email"
              />
              {/* {errors?.email?.message} */}
            </div>

            <div className="flex items-center justify-between">
              <LabelForm htmlFor="password">password</LabelForm>
            </div>
            <div className="mt-2">
              <InputForm
                type="password"
                id="password"
                ref={ref}
                defaultValue={parsedAccount.password}
                // {...register("password", { required: "password is required" })}
                autoComplete="on"
                placeholder="insert to password"
              />
              {/* {errors?.password?.message} */}
            </div>
            <div className="text-sm flex justify-end">
              <a className="font-semibold text-black hover:text-slate-400">
                Forgot password?
              </a>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={() => handleSignIn()}
                type="submit"
                disabled={!isUserAccount}
                className="justify-center"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            onClick={() => setView("create-user-info")}
            disabled={isUserAccount}
            className="justify-center"
          >
            Sign up
          </Button>
        </div>
      </div>
    );
  };
  const renderView = () =>
    view === "create-user-info" ? renderCreateUserInfo() : renderLogin();
  return <Layout>{renderView()}</Layout>;
};
