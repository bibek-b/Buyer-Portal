import { Link, Navigate, useParams } from "react-router";
import authPageImg from "../assets/authPageImg.jpg";
import { authFields } from "../constants/authConstant";
import { useState } from "react";
import type { fieldsType, formDataType } from "../types/authType";

const Auth = () => {
  const [formData, setFormData] = useState<formDataType>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { mode } = useParams();

  const validModes = ["login", "register"];

  if (!mode || !validModes.includes(mode)) {
    return <Navigate to={"/404"} replace />;
  }

  const isLogin = mode === "login";
  const fields: fieldsType[] = authFields[mode as "login" | "register"] || [];

  const handleSubmit = () => {};


  return (
    <div className="bg-background  min-h-screen  flex items-center justify-center">
      <div className="w-[50%] flex items-center justify-center">
        <img
          src={authPageImg}
          alt=""
          className="w-175 h-175 object-cover rounded-2xl"
        />
      </div>

      <form className="w-[50%] flex flex-col items-center justify-center gap-10">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">
            {isLogin ? "Welcome back" : "Create an account"}
          </h2>
          <span className="text-black/50">Buy the coolest things here</span>
        </div>
        <div className="space-y-4">
          {fields.map((field) => (
            <div key={field.id} className="flex flex-col gap-2 ">
              <label className="text-black/80">{field.label}</label>
              {field.inputType === "password" ? (
                <input
                  type={field.inputType}
                  className="border border-black/20 w-100 outline-0 py-2 px-4 rounded-full focus:border-black/50 transition-colors duration-300"
                  placeholder={field.placeholder}
                  required
                  minLength={6}
                  value={formData[field.accessor as keyof formDataType]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [field.accessor]: e.target.value,
                    })
                  }
                />
              ) : (
                <input
                  type={field.inputType || "text"}
                  className="border border-black/20 w-100 outline-0 py-2 px-4 rounded-full focus:border-black/50 transition-colors duration-300"
                  placeholder={field.placeholder}
                  required
                  value={formData[field.accessor as keyof formDataType]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [field.accessor]: e.target.value,
                    })
                  }
                />
              )}
            </div>
          ))}
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-600 w-100 text-white p-2 rounded-full hover:bg-blue-700 cursor-pointer transition-colors duration-300"
        >
          {isLogin ? "Login" : "Register"}
        </button>

        <span>
          {isLogin ? "Don't" : "Already"} have an account?{" "}
          <Link
            to={`/auth/${isLogin ? "/register" : "/login"}`}
            className="text-blue-700 hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Auth;
