import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="w-[600px]">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost  absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Signup</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter fullname"
                className="w-80 px-3 border rounded-md outline-none py-2"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                name=""
                id=""
                placeholder="example@gamil.com"
                className="w-80 px-3 border rounded-md outline-none py-2"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="text"
                name=""
                id=""
                placeholder="enter your password"
                className="w-80 px-3 border rounded-md outline-none py-2"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p className="text-xl">
                have account?{" "}
                <button
                  to="/"
                  className="underline text-blue-500  cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>{" "}
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
