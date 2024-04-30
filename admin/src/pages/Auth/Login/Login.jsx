import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useForm } from 'react-hook-form';
// import { generateLoginOTP } from '../../features/actions/auth/authenticationActions';
// import { emailRegex, passwordRegex } from '../../utils/regex';
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import griffinLogo from "../../../assets/images/griffinLogo.png";
import loginImage from "../../../assets/images/login2.jpg";
import { login } from "../../../features/slices/authSlice/authSlice";
// ----------------------------------------------------------------------------------
const Login = () => {
  const [toggle, setToggle] = useState(false); // This usestate is used to toggle the password show and hide icons and input type.
  const [loginData, setLoginData] = useState({});
  // ---------------------------------------Hooks-------------------------------------
  const dispatch = useDispatch();
  // ----------------------------------------------------------------------------------

  // This method is used to call Generate Login OTP Api once user click on Login Button.
  const loginHandler = (data) => {
    try {
      let userData = {};
      dispatch(login({ ...userData, loginStatus: true }));
      // dispatch(login)
    } catch (error) {
      console.log(error?.message);
    }
  };

  // This block of code is used to redirect user to verify otp screen but generate otp api return success.
  // useEffect(() => {
  //   if (isLoginOtpGenerated && Object.keys(loginData).length > 0) {
  //     navigate('/auth/login/verifyOtp', { state: loginData });
  //   }
  // }, [isLoginOtpGenerated]);

  return (
    <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12  flex justify-center items-center flex-col">
          <div className="flex justify-center">
            <img src={griffinLogo} class="w-mx-auto" />
          </div>
          <div class=" flex flex-col items-center">
            <div class="w-full flex-1 mt-8">
              <div class="mx-auto max-w-xs">
                <input
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                />
                <input
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                />
                <button
                  onClick={loginHandler}
                  class="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg text-white hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  style={{
                    background:
                      "linear-gradient(to right, rgb(238, 119, 36), rgb(178 11 11), rgb(182 21 21), rgb(198 72 72))",
                  }}
                >
                  <svg
                    class="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span class="text-white ml-2"> Sign In</span>
                </button>
                {/* <p class="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by Cartesian Kinetics
                  <a href="#" class="border-b border-gray-500 border-dotted">
                    Terms of Service
                  </a>
                  and its
                  <a href="#" class="border-b border-gray-500 border-dotted">
                    Privacy Policy
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex-1 bg-green-100 text-center hidden lg:flex"
          style={{
            background:
              "linear-gradient(to right, rgb(238, 119, 36), rgb(178 11 11), rgb(182 21 21), rgb(198 72 72))",
          }}
        >
          <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-white">
              Welcome to Griffin digital
            </h1>
            <p className="text-md text-white">
              We started with a dream to redefine creativity and have since
              embarked on a journey marked by unwavering passion and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
