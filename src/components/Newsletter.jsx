import { useState } from 'react'

function Newsletter({ onSubscribe }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email.trim()) {
      setError('Email is required')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setError('')
    onSubscribe(email)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setError('')
  }

  return (
    <div className="signup-container">
      <section className="signup-form">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>
            <img
              src="./assets/images/icon-list.svg"
              alt="Check"
              className="icon-list"
            />
            Product discovery and building what matters
          </li>
          <li>
            <img
              src="./assets/images/icon-list.svg"
              alt="Check"
              className="icon-list"
            />
            Measuring to ensure updates are a success
          </li>
          <li>
            <img
              src="./assets/images/icon-list.svg"
              alt="Check"
              className="icon-list"
            />
            And much more!
          </li>
        </ul>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">
              <strong>Email address</strong>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@company.com"
              value={email}
              onChange={handleEmailChange}
              className={error ? 'error' : ''}
            />
            {error && <span className="error-message">{error}</span>}
          </div>
          <button type="submit">Subscribe to monthly newsletter</button>
        </form>
      </section>
      <section className="signup-illustration">
        <img
          src="./assets/images/illustration-sign-up-desktop.svg"
          alt="Newsletter Illustration"
        />
      </section>
    </div>
  )
}

export default Newsletter
