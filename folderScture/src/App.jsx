import React from 'react'

const App = () => {

  const [name, setname] = React.useState("");
  const [number, setnumber] = React.useState("");

  const [newuser, setnewuser] = React.useState([])
  const submitbtn = (e) => {
    e.preventDefault();
    const olduser = [...newuser]
    olduser.push({name, number})
    setnewuser(olduser)
    setname("")
    setnumber("")
  }
  return (
    <div>
      <h1>Add your details in the form</h1>
      <form onSubmit={(e) =>
         submitbtn(e)
        }>
        <input 
          type="text" 
          placeholder='Enter Your Name'
          value={name}
          onChange={(e) =>
            setname(e.target.value)
          } 
          required 
        />
        <input
          type="number" 
          required 
          placeholder='Enter Your Number'
          value={number}
          onChange={(e) =>
          setnumber(e.target.value)
         } 
         />
        <button>Submit</button>
      </form>
      {newuser.map((item, index) => (
        <div key={index}>
          <h2>Your Name is: {item.name}</h2>
          <h2>Your Number is: {item.number}</h2>
        </div>
      ))
      }
    </div>
  )
}

export default App