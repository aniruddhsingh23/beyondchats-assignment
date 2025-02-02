import { useState } from "react";
import RegistrationForm from "../components/Auth/RegistrationForm";
import EmailVerification from "../components/Auth/EmailVerification";

const Registration = () => {
  const [emailVerificationSent, setEmailVerificationSent] = useState(false);

  const handleEmailVerificationSent = () => {
    setEmailVerificationSent(true);
  };

  return (
    <div className="registration-page">
      
      {emailVerificationSent ? (
        <EmailVerification />
      ) : (
        <RegistrationForm onEmailVerificationSent={handleEmailVerificationSent} />
      )}
    </div>
  );
};

export default Registration;
