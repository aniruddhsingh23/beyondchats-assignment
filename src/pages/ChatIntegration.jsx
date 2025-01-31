import { useState } from 'react'
import { motion } from 'framer-motion'
import TestChatbot from '../components/ChatIntegration/TestChatbot'
import IntegrationOptions from '../components/ChatIntegration/IntegrationOptions'

export default function ChatIntegration() {
  const [integrationStatus, setIntegrationStatus] = useState('pending')

  const handleTestIntegration = () => {
    setIntegrationStatus('loading')
    setTimeout(() => {
      Math.random() > 0.2 ? 
        setIntegrationStatus('success') : 
        setIntegrationStatus('failed')
    }, 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-8"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <TestChatbot />
        <IntegrationOptions />
      </div>

      <div className="space-y-4">
        <button
          onClick={handleTestIntegration}
          className="primary-btn w-full bg-green-600 hover:bg-green-700"
          disabled={integrationStatus === 'loading'}
        >
          {integrationStatus === 'loading' ? 'Testing...' : 'Test Integration'}
        </button>

        {integrationStatus === 'success' && (
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-green-600">Integration successful!</p>
            <a
              href="/success"
              className="inline-block primary-btn mt-4"
            >
              Continue to Dashboard
            </a>
          </div>
        )}

        {integrationStatus === 'failed' && (
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <p className="text-red-600">Integration not detected. Please try again.</p>
            <button
              onClick={() => setIntegrationStatus('pending')}
              className="primary-btn mt-4 bg-gray-600 hover:bg-gray-700"
            >
              Retry
            </button>
          </div>
        )}
      </div>
    </motion.div>
  )
}