import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "./Reusable component/Input/Input";
import Button from "./Reusable component/Button/Button";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  let name, value;
  const saveUserToFirebase = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (!name && !value) return null;
    setUserDetails({ ...userDetails, [name]: value });
    console.log(userDetails);
    toast.success("user Registered ");
    navigate("/explore");
  };
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign up
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign In
              </Link>
            </p>
            <form
              action="#"
              method="POST"
              className="mt-8"
              onSubmit={(e) => saveUserToFirebase(e)}
            >
              <div className="space-y-5">
                <Input
                  name="Full name "
                  label="Full Name"
                  type="text"
                  placeholder="Full Name"
                  value={userDetails.fullname}
                />
                <Input type="email" placeholder="Email" label="E-mail" />
                <Input
                  type="password"
                  placeholder="Password"
                  label="Password"
                />
                <div>
                  <Button bg="black" onHover="black">
                    Create Account
                    <ArrowRight className="ml-2 inline-flex" size={16} />
                  </Button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <Button bg="black" onHover="black">
                <span className="mr-2 inline-block align-middle  ">
                  <svg
                    className="h-6 w-6 text-white "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign Up with google
              </Button>

              <Button bg="black" onHover="black">
                <span className="mr-2 inline-block align-middle  ">
                  <svg
                    className="h-6 w-6 text-white content-center"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </span>
                Sign Up with Facebook
              </Button>
            </div>

            {/* [#2563EB] */}
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
