import React, { useState, useEffect, useRef } from "react";
import { Send, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom"; 

const predefinedQA = {
  "What are your working hours?": [
    "We are available 24/7!",
    "Our support team is online from 9 AM to 6 PM.",
  ],
  "How can I contact support?": [
    "You can call us at 1800-123-4567.",
    "Email us at support@telecomprovider.com.",
  ],
  "What services do you offer?": [
    "We offer mobile, broadband, and TV services.",
    "Our services include prepaid, postpaid, and high-speed internet plans.",
  ],
  "Why is my internet slow?": [
    "There might be network congestion in your area.",
    "Try restarting your router and check if the issue persists.",
    "You may have exceeded your data limit for the month.",
  ],
  "How do I check my balance?": [
    "Dial *123# from your mobile to check your balance.",
    "Use our mobile app to view your balance and usage details.",
  ],
  "How can I recharge my number?": [
    "You can recharge via our website, mobile app, or visit a nearby store.",
    "Dial *111# and follow the instructions to recharge your account.",
  ],
  "How do I activate international roaming?": [
    "You can activate international roaming from our mobile app.",
    "Send an SMS 'IR ACTIVATE' to 56789 to enable roaming services.",
  ],
  "Why is my bill higher than expected?": [
    "Extra charges might be due to international calls, roaming, or additional services.",
    "Check your detailed bill breakdown in our app or website.",
  ],
  "Can I upgrade my plan?": [
    "Yes! You can upgrade your plan through our website or mobile app.",
    "Call our support at 1800-123-4567 for plan upgrade assistance.",
  ],
  "How do I report a network issue?": [
    "You can report network issues via our app under 'Report a Problem'.",
    "Call our helpline and select option 3 for network-related concerns.",
  ],
  "Can I change my mobile number?": [
    "Yes, you can request a new number at our nearest store.",
    "You may also port your number to a new provider via MNP.",
  ],
  "How do I block my lost SIM card?": [
    "Call customer support at 1800-123-4567 immediately to block your SIM.",
    "Visit our store with ID proof to get a replacement SIM.",
  ],
};

const suggestedQuestions = Object.keys(predefinedQA);

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (question) => {
    const userMessage = { text: question, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      let botResponse;
      if (predefinedQA[question]) {
        botResponse = {
          text: predefinedQA[question][
            Math.floor(Math.random() * predefinedQA[question].length)
          ],
          sender: "bot",
        };
      } else {
        botResponse = {
          text: "Hmm... I'm not sure about that. We're looking into it!",
          sender: "bot",
        };
      }
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="flex flex-col w-full h-screen bg-[#F0F2F5]">
      {/* Header */}
      <div className="bg-[#0078FF] text-white px-4 py-3 flex items-center">
        <span className="text-lg font-semibold">Telecom Support Bot</span>
      </div>

      {/* Chat Body */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-2`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs ${
                msg.sender === "user"
                  ? "bg-[#0078FF] text-white"
                  : "bg-white text-black shadow"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
        <div ref={chatRef} />
      </div>

      {/* Suggested Questions */}
      <div className="p-3 bg-white border-t">
        <div className="text-sm font-semibold mb-2 text-gray-600">Quick Questions:</div>
        <div className="flex gap-2 flex-wrap">
          {suggestedQuestions.slice(0, 4).map((question, index) => (
            <button
              key={index}
              onClick={() => handleSendMessage(question)}
              className="px-3 py-2 text-sm bg-gray-200 rounded-lg hover:bg-gray-300 flex items-center"
            >
              {question} <ChevronRight size={14} className="ml-1" />
            </button>
          ))}
        </div>
      </div>

      {/* Input Box */}
      <div className="p-3 bg-white flex items-center border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-none"
          onKeyDown={(e) => e.key === "Enter" && input.trim() && handleSendMessage(input)}
        />
        <button
          onClick={() => input.trim() && handleSendMessage(input)}
          className="ml-2 bg-[#0078FF] text-white p-2 rounded-lg hover:bg-[#005FCC] transition"
        >
          <Send size={18} />
        </button>
      </div>
        {/* Next Button */}
        <div className="p-3 bg-white border-t flex justify-end">
        <button
          onClick={() => navigate("/success")}
          className="bg-[#0078FF] text-white px-4 py-2 rounded-lg hover:bg-[#005FCC] transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
