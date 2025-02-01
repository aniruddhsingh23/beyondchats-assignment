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
      <h1 className="title">Welcome to BeyondChats</h1>
      {emailVerificationSent ? (
        <EmailVerification />
      ) : (
        <RegistrationForm onEmailVerificationSent={handleEmailVerificationSent} />
      )}
    </div>
  );
};

export default Registration;
