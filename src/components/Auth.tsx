import React, { FC } from "react";
import { auth, provider } from '../firebase-config.js';
import { UserCredential, signInWithPopup } from 'firebase/auth';
import googleLogo from '../img/logo-google.png';
import '../main.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

interface Props {
  isAuth: string | boolean | undefined;
  setIsAuth: React.Dispatch<React.SetStateAction<string | boolean | undefined>>;
}

const Auth: FC<Props> = ({ isAuth, setIsAuth }) => {
  async function signInWithGoogle() {
    try {
      const result: UserCredential = await signInWithPopup(auth, provider);
      console.log(result)
      cookies.set("auth-token", result.user.refreshToken);
      cookies.set("current-user", result.user.displayName);
      setIsAuth(cookies.get("auth-token"));
    }
    catch (err) {
      console.error(err);
      alert('There was an error while trying to sign in with Google. Please try again.')
    };
  };

  return (
    <div id="auth" className="flex flex-col my-auto container self-center h-full  ">
      <p className="m-6">
        Sign In with Google to continue
      </p>
      <button onClick={signInWithGoogle}
        className="flex flex-row p-2 mx-auto content-center justify-between border-[2px] border-gray-500 hover:text-blue-700 hover:border-blue-700">
        <img src={googleLogo}
          alt="'Google Logo'"
          className="h-8 mx-2" />
        <p className="text-bold self-center ">
          Sign In with Google
        </p>
      </button>
    </div>
  );
};
export default Auth;