import React,{useState} from 'react'

const TypingEvent = () => {
    const [user,setUser] = useState('')
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setUser(event?.target.value)

    }
    const hanldeAddUser = (event:React.MouseEvent<HTMLButtonElement>)=>{
        console.log(user)
       
    }
  return (
    <div>
        <input type="text"  value={user} placeholder='enter your name' onChange={handleChange}/>
       <h4> {user} </h4>
       <button onClick={hanldeAddUser}>Add User</button>
      
    </div>
  )
}

export default TypingEvent
