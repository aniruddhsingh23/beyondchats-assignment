import Confetti from 'react-confetti'
import { Navigate, useNavigate } from "react-router-dom"; 

export default function SuccessScreen() {
  const navigate = useNavigate(); 
  return (
    <div className="text-center space-y-8">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={800}
      />
      <div className="text-6xl">🎉</div>
      <h1 className="text-4xl font-bold">Setup Complete!</h1>
      <div className="space-y-4 max-w-md mx-auto">
        <button 
        onClick={() => navigate("/contact")}
        className="primary-btn w-full">
          Contact Us
        </button>
        <button 
        onClick={() => navigate("/integration")}
        className="primary-btn w-full bg-green-600 hover:bg-green-700">
          Go back to Chatting
        </button>
        <button onClick={() => navigate("/")}
        className="primary-btn w-full bg-red-600 hover:bg-red-500">
          Log Out.
        </button>
      </div>
    </div>
  )
}