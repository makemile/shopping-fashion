import "../../App.css";
import { Layout } from "../../components/Layout";
import { BtnForm, InputForm, LabelForm } from "../../components/ui";

export const MyAccount = () => {
  return (
    <Layout>
      <form>
        <div class="border-b border-gray-900/10 pb-6">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <LabelForm htmlFor="First name">First name</LabelForm>
              <div class="mt-2">
                <InputForm placeholder="First name" />
              </div>
            </div>

            <div class="sm:col-span-3">
              <LabelForm htmlFor="Last name">Last name</LabelForm>
              <div class="mt-2">
                <InputForm placeholder="Last name" />
              </div>
            </div>

            <div class="sm:col-span-4">
              <LabelForm htmlFor="Email">Email</LabelForm>
              <div class="mt-2">
                <InputForm placeholder="Email" />
              </div>
            </div>

            <div class="col-span-full">
              <LabelForm htmlFor="Street address">Street address</LabelForm>
              <div class="mt-2">
                <InputForm placeholder="Street address" />
              </div>
            </div>

            <div class="sm:col-span-2 sm:col-start-1">
              <LabelForm htmlFor="city">City</LabelForm>
              <div class="mt-2">
                <InputForm placeholder="city" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <LabelForm htmlFor="State">State / Province</LabelForm>
              <div class="mt-2">
                <InputForm placeholder="State / Province" />
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-center gap-x-6">
          <BtnForm type="button">Cancel</BtnForm>
          <BtnForm type="submit">Submit</BtnForm>
        </div>
      </form>
    </Layout>
  );
};
