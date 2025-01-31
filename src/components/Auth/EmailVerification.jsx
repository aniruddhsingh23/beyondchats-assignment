import { useState } from 'react';
import { motion } from 'framer-motion';

export default function EmailVerification({ email, authMethod, onVerify, loading }) {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    const verificationCode = code.join('');
    if (verificationCode.length !== 6) {
      setError('Please enter a 6-digit code.');
      return;
    }

    // Clear error and call verification handler
    setError('');
    await onVerify(verificationCode);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h2 className="text-xl font-semibold">Verify Your Email</h2>
        <p className="text-sm text-gray-500 mt-2">
          {authMethod === 'google'
            ? `A verification code has been sent to ${email}.`
            : `Enter the 6-digit code sent to ${email}.`}
        </p>
      </div>

      <div className="flex justify-center gap-3">
        {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => {
              const newCode = [...code];
              newCode[index] = e.target.value.replace(/\D/g, '');
              setCode(newCode);

              // Auto-focus next input
              if (e.target.value && index < 5) {
                document.getElementById(`digit-${index + 1}`).focus();
              }
            }}
            id={`digit-${index}`}
            className="w-12 h-12 text-center border-2 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        ))}
      </div>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="primary-btn w-full"
      >
        {loading ? 'Verifying...' : 'Verify Email'}
      </button>
    </motion.div>
  );
}