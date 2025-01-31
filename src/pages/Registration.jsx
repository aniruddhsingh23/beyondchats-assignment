import { useState } from 'react';
import { motion } from 'framer-motion';
import RegistrationForm from '../components/Auth/RegistrationForm';
import EmailVerification from '../components/Auth/EmailVerification';

export default function Registration() {
  const [step, setStep] = useState('register');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState(''); // Track user's email for verification
  const [authMethod, setAuthMethod] = useState(null); // Track auth method (email or Google)

  // Handle email/password registration
  const handleFormSubmit = async (formData) => {
    try {
      setLoading(true);
      setError('');

      // Simulate API call to register user
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Save email for verification
      setEmail(formData.email);
      setAuthMethod('email');
      setStep('verify');
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle Google authentication
  const handleGoogleAuth = async () => {
    try {
      setLoading(true);
      setError('');

      // Simulate Google auth API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate getting email from Google auth
      const googleEmail = 'user@gmail.com'; // Replace with actual Google email
      setEmail(googleEmail);
      setAuthMethod('google');
      setStep('verify');
    } catch (err) {
      setError('Google authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle email verification
  const handleVerifyEmail = async (code) => {
    try {
      setLoading(true);
      setError('');

      // Simulate API call to verify email
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to setup page after verification
      window.location.href = '/setup';
    } catch (err) {
      setError('Verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-500 text-sm rounded-lg">
          {error}
        </div>
      )}

      {step === 'register' ? (
        <RegistrationForm
          onSubmit={handleFormSubmit}
          onGoogleAuth={handleGoogleAuth}
          loading={loading}
        />
      ) : (
        <EmailVerification
          email={email}
          authMethod={authMethod}
          onVerify={handleVerifyEmail}
          loading={loading}
        />
      )}
    </motion.div>
  );
}