import { useState } from "react";

const New = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
   if(firstName && lastName){
    const listItem = {id: new Date().toString(), firstName, lastName}
    setList((list) => {
      return [...list, listItem]
    })
   }
  }
  return ( 
    <div>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="form-control">
            <label htmlFor="lastName"></label>
            <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <button type="submit">GO</button>
        </form>
      {
        list.map((listItem) => {
          const {id, firstName, lastName} = listItem
          return (
            <div key={id}>
              <h2>{firstName}</h2>
              <h5>{lastName}</h5>
            </div>
          )
        })
      }

      </article>
    </div>
   );
}
 
export default New;