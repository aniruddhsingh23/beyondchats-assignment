import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChatBubbleOvalLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function TestChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', isBot: true }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const handleSend = () => {
    if (!inputMessage.trim()) return
    
    // Add user message
    setMessages(prev => [...prev, { text: inputMessage, isBot: false }])
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: 'Thank you for your message. This is a simulated response.', 
        isBot: true 
      }])
    }, 1000)
    
    setInputMessage('')
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="primary-btn w-full"
      >
        Test Chatbot
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-xl border z-50"
        >
          <div className="p-4 border-b flex justify-between items-center bg-blue-600 text-white rounded-t-lg">
            <h3 className="font-semibold">Test Chatbot</h3>
            <button onClick={() => setIsOpen(false)}>
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 h-96 flex flex-col">
            <div className="flex-1 space-y-4 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.isBot ? 'bg-gray-100' : 'bg-blue-100'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="input-field flex-1"
              />
              <button 
                onClick={handleSend}
                className="primary-btn p-2.5"
              >
                <ChatBubbleOvalLeftIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}