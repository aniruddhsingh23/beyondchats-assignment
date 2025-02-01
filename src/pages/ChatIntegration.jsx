import { useState } from "react";
import IntegrationOptions from "../components/ChatIntegration/IntegrationOptions";
import TestChatbot from "../components/ChatIntegration/TestChatbot";

const ChatIntegration = () => {
  const [showTestChatbot, setShowTestChatbot] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Chatbot Integration
        </h2>
        <IntegrationOptions />
        <button
          onClick={() => setShowTestChatbot(!showTestChatbot)}
          className="mt-6 w-full bg-blue-500 text-white p-2 rounded"
        >
          {showTestChatbot ? "Hide Test Chatbot" : "Test Chatbot"}
        </button>
        {showTestChatbot && <TestChatbot />}
      </div>
    </div>
  );
};

export default ChatIntegration;
