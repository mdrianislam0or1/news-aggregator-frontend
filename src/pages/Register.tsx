import { Button } from "antd";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useRegisterMutation } from "../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/auth/authSlice";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<RegisterFormData>({
    defaultValues: {
      name: "test",
      email: "test1@gmail.com",
      password: "123456",
      password_confirmation: "123456",
    },
  });

  const [registerUser] = useRegisterMutation();

  const onSubmit = async (data: RegisterFormData) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,
    };

    const toastId = toast.loading("Registering...");

    try {
      const response = await registerUser(userInfo).unwrap();
      dispatch(setUser({ user: response.user })); // No token handling
      toast.success("Registered successfully", { id: toastId, duration: 2000 });
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed", { id: toastId });
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md bg-white rounded-lg p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
          />
        </div>
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
        <div className="mb-6">
          <label
            htmlFor="password_confirmation"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Confirm Password:
          </label>
          <input
            type="password"
            id="password_confirmation"
            {...register("password_confirmation", { required: true })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
          />
        </div>
        <Button
          htmlType="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-blue"
        >
          Register
        </Button>
        <div className="mt-4 text-center text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-green-500">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
