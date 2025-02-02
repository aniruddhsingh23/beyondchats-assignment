import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/outline";

const EmailVerification = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkVerification = async () => {
      const user = auth.currentUser;
      if (user) {
        await user.reload(); // Refresh user data
        setIsVerified(user.emailVerified);
      }
      setChecking(false);
    };

    const interval = setInterval(checkVerification, 5000); // Check every 5 seconds
    checkVerification(); // Initial check

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 text-center">
        {checking ? (
          <p className="text-gray-600">Checking verification status...</p>
        ) : isVerified ? (
          <>
            <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto" />
            <h2 className="text-xl font-semibold text-gray-900 mt-3">Email Verified!</h2>
            <p className="text-gray-600 mt-2">You can now access all features.</p>
            <a href="/dashboard" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              Go to Dashboard
            </a>
          </>
        ) : (
          <>
            <ClockIcon className="w-16 h-16 text-yellow-500 mx-auto" />
            <h2 className="text-xl font-semibold text-gray-900 mt-3">Verify Your Email</h2>
            <p className="text-gray-600 mt-2">Please check your inbox for the verification link.</p>
            <button
              onClick={() => auth.currentUser?.sendEmailVerification()}
              className="mt-4 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition"
            >
              Resend Verification Email
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailVerification;
