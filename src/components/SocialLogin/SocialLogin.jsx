import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
    });
  };

  return (
    <div className="p-8">
      <div className="divider"></div>
      <div>
        <button
          onClick={handleGoogleSignIn}
          className="btn w-full bg-white text-black"
        >
          <FaGoogle className="mr-1" />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
