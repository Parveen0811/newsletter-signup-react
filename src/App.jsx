import { useState } from 'react'
import Newsletter from './components/Newsletter'
import SuccessMessage from './components/SuccessMessage'

function App() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  const handleSubscribe = (email) => {
    setUserEmail(email)
    setShowSuccess(true)
  }

  const handleDismiss = () => {
    setShowSuccess(false)
    setUserEmail('')
  }

  return (
    <div>
      {!showSuccess ? (
        <Newsletter onSubscribe={handleSubscribe} />
      ) : (
        <SuccessMessage email={userEmail} onDismiss={handleDismiss} />
      )}
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
        Coded by <a href="#">Praveen Agrawal</a>.
      </div>
    </div>
  )
}

export default App
