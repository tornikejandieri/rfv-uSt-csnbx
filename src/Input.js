import { useState } from "react"

const Input = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(firstName && email){
      const person = { id: new Date().getTime().toString(), firstName, email } 
      setPeople((people) => {
        return [...people, person]
      })
      setFirstName('')
      setEmail('')
    } 
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
        {
          people.map((person) => {
            const {id, firstName, email} = person
            return (
                  <div key={id}>
                    <h4>{firstName}</h4>
                    <p>{email}</p>
                  </div>
                  )})
        }
      </article>
    </div>
  )
}

export default Input;