function SuccessMessage({ email, onDismiss }) {
  return (
    <section className="success-message">
      <img
        src="./assets/images/icon-success.svg"
        alt="Success"
      />
      <h2>Thanks for subscribing!</h2>
      <p>
        A confirmation email has been sent to <strong>{email}</strong>.
        Please open it and click the button inside to confirm your subscription.
      </p>
      <button className="dismiss-btn" onClick={onDismiss}>
        Dismiss message
      </button>
    </section>
  )
}

export default SuccessMessage
