import { Layout } from "../../components/Layout";
import { BtnForm, InputForm, LabelForm } from "../../components/ui/index.js";

export const SignIn = () => {
  return (
    <Layout>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 border-2 rounded-lg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <LabelForm htmlFor="email">Email address</LabelForm>
              <div className="mt-2">
                <InputForm
                  type="email"
                  placeholder="insert to email"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <LabelForm htmlFor="password">Password</LabelForm>
              </div>
              <div className="mt-2">
                <InputForm
                  type="password"
                  placeholder="insert to password"
                  required
                />
              </div>
              <div className="text-sm flex justify-end pt-2">
                <a
                  href="#"
                  className="font-semibold text-black hover:text-slate-400"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <BtnForm type="submit">Sign in</BtnForm>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
