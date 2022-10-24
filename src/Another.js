import { useState } from "react"

const Another = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [placeOfRes, setPlaceOfRes] = useState('')
  const [age, setAge] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstName, lastName, email, placeOfRes, age)
  }

  return ( 
    <div>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name</label>
            <input type="text" id="name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className="form-control">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="form-control">
            <label htmlFor="placeOfResidence">Place of residence</label>
            <input type="text" id="residence" value={placeOfRes} onChange={(e) => setPlaceOfRes(e.target.value)}/>
          </div>
          <div className="form-control">
            <label htmlFor="age">Age</label>
            <input type="text" id="age" value={age} onChange={(e) => setAge(e.target.value)}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </article>
    </div>
   );
}
 
export default Another;