import { useForm } from "react-hook-form";
import { ref } from "../ui/InputForm.jsx";
import { Layout } from "../Layout/index.jsx";
import { BtnForm, InputForm, LabelForm } from "../ui/index.js";
import { refBtn } from "../ui/BtnForm.jsx";

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Layout>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 border-2 rounded-lg gap-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <LabelForm htmlFor="email">email</LabelForm>
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

            <div className="flex items-center justify-between">
              <LabelForm htmlFor="password">password</LabelForm>
            </div>
            <div className="mt-2">
              <InputForm
                type="password"
                id="password"
                ref={ref}
                {...register("password", { required: "password is required" })}
                autoComplete="on"
                placeholder="insert to password"
              />
              {errors?.password?.message}
            </div>
            <div className="text-sm flex justify-end">
              <a className="font-semibold text-black hover:text-slate-400">
                Forgot password?
              </a>
            </div>

            <div className="flex justify-center">
              <BtnForm ref={refBtn} type="submit">
                Login
              </BtnForm>
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
