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
    <div className='contactform'>
      <div className="adduser">
        <h1>Add Contact</h1>
        <form onSubmit={(e) =>
           submitbtn(e)
          }>
          <p>Name</p>
          <input 
            type="text" 
            placeholder='Enter Your Name'
            value={name}
            onChange={(e) =>
              setname(e.target.value)
            } 
            required 
          />
          <p>Number</p>
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
      </div>
      <div className="userlist">
        <h1>Your Contacts</h1>
        {newuser.map((item, index) => (
          <div className="userbox">
            <div className='letter'>{item.name[0].toUpperCase()}</div>
            <div key={index} className="userdetails">
              <h2>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h2>
              <h2>{item.number}</h2>
            </div>
            <i onClick={()=>{
                const olduser = [...newuser];  //create a copy of the current user list
                olduser.splice(index,1);    //remove the user at the specified index
                setnewuser(olduser);      //update the state with the new user list
              }} class="ri-delete-bin-2-line">
            </i>
            <div className="info">
              <i class="ri-phone-fill"></i>
              <i class="ri-mail-fill"></i>
              <i class="ri-video-on-line"></i>
              <i class="ri-list-check"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App