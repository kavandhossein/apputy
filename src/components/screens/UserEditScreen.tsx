import { useUpdateUser } from "@/services";
import { UpdateUserInput, User } from "@/types";
import { FormikHelpers, useFormik } from "formik";
import React from "react";
import { TextField } from "../inputs";
import Link from "next/link";
import { useRouter } from "next/router";

interface UserEditScreenProps {
  data: User;
  isLoading: boolean;
}

export const UserEditScreen = ({ data }: UserEditScreenProps) => {
  const { mutateAsync, isLoading } = useUpdateUser();

  const router = useRouter();

  const handleSubmit = async (
    values: UpdateUserInput,
    formiks: FormikHelpers<UpdateUserInput>
  ) => {
    await mutateAsync(
      {
        data: values,
        id: data?.id,
      },
      {
        onSuccess: () => {
          // console.log("SUBMITD: ", data);
          formiks.resetForm();
          router.push("/");
        },
      }
    );
  };

  const formik = useFormik<UpdateUserInput>({
    initialValues: {
      avatar: data.avatar || "",
      email: data.email || "",
      first_name: data.first_name || "",
      last_name: data.last_name || "",
    },
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  return (
    <div className="flex flex-col items-center w-96 pt-10 mt-10 p-20 border rounded-lg h-full">
      <div className="w-28 h-28 overflow-hidden rounded-full">
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img src={data.avatar} alt={data.first_name} />
      </div>
      <form
        className="flex w-full flex-col gap-2 mt-5"
        onSubmit={formik.handleSubmit}
      >
        <div className="">
          <TextField
            name="first_name"
            onChange={formik.handleChange}
            value={formik.values.first_name}
            onBlur={formik.handleBlur}
            label="First Name"
          />
        </div>
        <div className="">
          <TextField
            name="last_name"
            onChange={formik.handleChange}
            value={formik.values.last_name}
            onBlur={formik.handleBlur}
            label="Last Name"
          />
        </div>
        <div className="">
          <TextField
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            label="Email"
          />
        </div>
        <div className="flex justify-between mt-10">
          <Link
            href="/"
            className=" px-4 py-1  flex items-center bg-gray-500 text-white rounded-lg"
            passHref
          >
            Back
          </Link>
          <button
            className=" px-6 py-1 bg-blue-500 text-white rounded-lg disabled:bg-blue-300 transition-all duration-300"
            type="submit"
            disabled={isLoading}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
