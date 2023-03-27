import React,{useState} from 'react'

const FormEvent = () => {
    const [users,setUsers] = useState({
        name:'',
        email:''

    })
        const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
            event.preventDefault()
            console.log(users)
            
        }

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setUsers({
            ...users,
            [event.target.name]:event.target.value
        })

    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div>
            <input type="text" name='name' value={users.name} onChange={handleChange} />
            </div>
            <div>
            <input type="email" name='email' value={users.email} onChange={handleChange} />
            </div>
            <button type='submit'>Add User</button>
        </form>
      
    </div>
  )
}

export default FormEvent
