import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ResponsiveLayout from './components/Layout/ResponsiveLayout'
import Registration from './pages/Registration'
import LoginForm from "./components/Auth/LoginForm"
import SetupOrganization from './pages/SetupOrganization'
import Success from './pages/Success'
import Chatbot from './components/ChatIntegration/Chatbot'
import ContactUs from './pages/ContactUs'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'


export default function App() {
  return (
    <BrowserRouter>
      <ResponsiveLayout>
      <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/setup" element={<SetupOrganization />} />
            <Route path="/integration" element={<Chatbot />} /> 
            <Route path="/success" element={<Success />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </AnimatePresence>
      <Footer />
      </ResponsiveLayout>
    </BrowserRouter>
  )
}