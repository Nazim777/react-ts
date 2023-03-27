import React,{useState} from 'react'

const UseStateHook = () => {
    type user={
        id:number,
        name:string
    }
    const [users,setusers] = useState<null | user>(null)
    const handleAddUser =()=>{
        setusers({
            id:1,
            name:'rahim'
        })
        console.log(users)
    }
  return (
    <div>
        <button onClick={handleAddUser}>add user</button>
        <h4>{users?.id}</h4>
        <h4>{users?.name}</h4>
      
    </div>
  )
}

export default UseStateHook
