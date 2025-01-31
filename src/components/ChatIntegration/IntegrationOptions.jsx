import { useState } from 'react'
import { DocumentDuplicateIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function IntegrationOptions() {
  const [showCode, setShowCode] = useState(false)
  const integrationCode = `<script src="https://cdn.beyondchats.com/chatbot-v1.2.min.js"></script>`

  return (
    <div className="p-6 border rounded-lg bg-gray-50">
      <h3 className="text-lg font-semibold mb-4">Integration Options</h3>
      
      {!showCode ? (
        <div className="space-y-4">
          <button
            onClick={() => setShowCode(true)}
            className="integration-option-btn"
          >
            <DocumentDuplicateIcon className="w-5 h-5" />
            Show Integration Code
          </button>
          <button className="integration-option-btn">
            <EnvelopeIcon className="w-5 h-5" />
            Email Instructions to Developer
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <pre className="p-4 bg-gray-800 text-gray-100 rounded-lg overflow-x-auto">
            {integrationCode}
          </pre>
          <button
            onClick={() => navigator.clipboard.writeText(integrationCode)}
            className="secondary-btn w-full"
          >
            Copy to Clipboard
          </button>
          <button
            onClick={() => setShowCode(false)}
            className="secondary-btn w-full"
          >
            Back to Options
          </button>
        </div>
      )}
    </div>
  )
}