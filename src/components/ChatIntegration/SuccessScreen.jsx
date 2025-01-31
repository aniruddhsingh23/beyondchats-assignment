import Confetti from 'react-confetti'

export default function SuccessScreen() {
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
        <button className="primary-btn w-full">
          Explore Admin Panel
        </button>
        <button className="primary-btn w-full bg-green-600 hover:bg-green-700">
          Start Chatting
        </button>
      </div>
    </div>
  )
}