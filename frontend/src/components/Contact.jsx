import React from "react";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        {" "}
        {/* Flexbox to center the form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center p-8 rounded-md shadow-lg"
        >
          <div className="mt-4 space-y-2 w-80">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 border rounded-md outline-none py-2"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          <div className="mt-4 space-y-2 w-80">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 border rounded-md outline-none py-2"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          <div className="mt-4 space-y-2 w-80">
            <span>Message</span>
            <br />
            <textarea
              placeholder="Type your message"
              className="w-full px-3 border rounded-md outline-none py-2"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 mt-6 hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
