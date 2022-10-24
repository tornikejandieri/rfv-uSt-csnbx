import { useState } from "react"

const Input = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello')
  }

  return (
    <div>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name</label>
            <input 
              type='text'
              id='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} 
            />

              
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'>Add Person</button>
        </form>
      </article>
    </div>
  )
}

export default Input;