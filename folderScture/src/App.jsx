import React from 'react'

const App = () => {

  const [name, setname] = React.useState("");
  const [number, setnumber] = React.useState("");
  const [image, setimage] = React.useState("");

  const submitbtn = (e) => {
    e.preventDefault();
    console.log(name, number, image);
    // alert("Form Submitted Successfully")
    setname("")
    setnumber("")
    setimage("")
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
        <input
          type="file"
          accept='image/*'
          placeholder='Profile Image'
          value={image}
          onChange={(e) =>
            setimage(e.target.value)
          } 
        />
        <button>Submit</button>
      </form>
      <div className='details'>
        <h2>Your Details</h2>
        <p>Name: {name}</p>
        <p>Number: {number}</p>
        <p>Image: {image}</p>
      </div>
    </div>
  )
}

export default App