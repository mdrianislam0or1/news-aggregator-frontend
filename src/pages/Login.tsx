/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "test1@gmail.com",
      password: "123456",
    },
  });

  const [login] = useLoginMutation();

  const onSubmit = async (data: { email: string; password: string }) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    const toastId = toast.loading("Logging in");

    try {
      const res = await login(userInfo).unwrap();

      // Log the response to inspect the structure
      console.log("API Response:", res);

      // Ensure the token or user data exists in the response
      if (res && res.user) { // Adjust based on actual response structure
        toast.success("Logged in", { id: toastId, duration: 2000 });
        navigate(`/news`);
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error: any) {
      // Handle different types of errors depending on the API response
      const errorMessage = error.data?.message || "Failed to log in. Please check your credentials.";
      toast.error(errorMessage, {
        id: toastId,
      });
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md bg-white rounded-lg p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
          />
        </div>
        <Button
          htmlType="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-blue"
        >
          Login
        </Button>
        <p className="text-center text-sm text-gray-600 mt-4">
          If you are not registered yet, please{" "}
          <Link to="/register" className="text-green-500">
            register
          </Link>
          .
        </p>
      </form>
    </div>
  );
};

export default Login;
