import { useEffect, useState } from 'react'

export default function ResponsiveLayout({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={`mx-auto ${isMobile ? 'px-4' : 'px-8'} max-w-7xl`}>
      {children}
    </div>
  )
}