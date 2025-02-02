import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import {
  auth,
  provider,
  signInWithPopup,
  sendEmailVerification,
  createUserWithEmailAndPassword,
} from "../../firebase";

const RegistrationForm = ({ onEmailVerificationSent }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState("");
  
  const navigate = useNavigate(); 

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      navigate("/setup"); 
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      setIsEmailSent(true);
      onEmailVerificationSent();
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-4">Create a new account</h2>
        <p className="text-center text-gray-500 mb-6">It’s quick and easy.</p>

        {error && <p className="text-red-500 text-sm text-center mb-3">{error}</p>}
        {isEmailSent && <p className="text-green-500 text-sm text-center mb-3">Verification email sent!</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <span className="text-gray-500">or</span>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-2 rounded-lg border hover:bg-gray-200 transition duration-300 mt-3"
        >
          <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" />
          <span>Continue with Google</span>
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?  
          <button 
            onClick={() => navigate("/login")} 
            className="text-blue-600 font-medium hover:underline ml-1"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
