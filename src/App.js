const App = () => {
  const handleSubmit = () => {
    console.log('Submitted!')
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit} action=''>
        <div className='input-container'>
          <label htmlFor=''>
            Name on card
            <input placeholder='Name' required />
          </label>
        </div>
        <div className='input-container'>
          <label htmlFor=''>
            Card number
            <input
              placeholder='0000 0000 0000 0000'
              required
              minLength={16}
              maxLength={16}
            />
          </label>
        </div>

        <div className='supporting-inputs-container'>
          <label htmlFor=''>
            Expiry date
            <input type='month' required />
          </label>
          <label htmlFor=''>
            CVV
            <input
              id='cvv'
              type='text'
              placeholder='123'
              required
              minLength={3}
              maxLength={3}
            />
          </label>
        </div>

        <div className='input-container'>
          <input type='submit' />
        </div>
        <p className='info-message'></p>
      </form>
    </div>
  )
}

export default App
