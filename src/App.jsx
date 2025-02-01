import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ResponsiveLayout from './components/Shared/ResponsiveLayout'
import ProgressStepper from './components/Shared/ProgressStepper'
import Registration from './pages/Registration'
import SetupOrganization from './pages/SetupOrganization'
import Success from './pages/Success'
import Chatbot from './components/ChatIntegration/Chatbot'
import ContactUs from './pages/ContactUs'

const steps = ['Registration', 'Organization Setup', 'Integration']

export default function App() {
  return (
    <BrowserRouter>
      <ResponsiveLayout>
        <ProgressStepper steps={steps} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/setup" element={<SetupOrganization />} />
            <Route path="/integration" element={<Chatbot />} /> 
            <Route path="/success" element={<Success />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </AnimatePresence>
      </ResponsiveLayout>
    </BrowserRouter>
  )
}