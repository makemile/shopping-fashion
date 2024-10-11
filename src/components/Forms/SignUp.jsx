import { Layout } from "../Layout/index.jsx";
import { useForm } from "react-hook-form";
import { BtnForm, InputForm, LabelForm } from "../ui/index.js";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <Layout>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 border-2 rounded-lg gap-7">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
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
            </div>

            <div>
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
            </div>

            <div>
              <div className="flex items-center justify-between">
                <LabelForm htmlFor="password">Password</LabelForm>
              </div>
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
            </div>

            <div className="flex justify-center">
              <BtnForm type="submit">Create</BtnForm>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
