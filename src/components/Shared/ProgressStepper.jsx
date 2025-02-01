export default function ProgressStepper({ steps, currentStep }) {
    return (
      <div className="px-4 py-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          {steps.map((step) => (
            <div key={step} className="flex flex-col items-center relative flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors`}>
              </div>
              <span className={`mt-2 text-sm text-center`}>
                {step}
              </span>
              
            </div>
          ))}
        </div>
      </div>
    )
  }