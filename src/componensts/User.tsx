import React from 'react'
// build in types string, number, boolean, null, void
// user defined types object, array, enum, union, any, custom tpes
type UserProps ={
    name:string,
    age:number,
    isActive:boolean,
    lang:string[],
    user: {
      name: string;
      email: string;
      password: number;
      isRegistered: boolean;
      speak: string[];
  },
  users: {
    name: string;
    password: number;
    isActive: boolean;
    address: {
        country: string;
        zipcode: number;
    };
}[]
}
const User = ({name,age,isActive,lang,user,users}:UserProps) => {
    
    
  return (
    <div>
        <h4>user</h4>
        <h1>name: {name}</h1>
        <h1>age: {age}</h1>
        <h1>status: {isActive?'active':'inactive'}</h1>
        <h4>users: {lang&& lang.map(item=>{
          return <h4>{item}</h4>
        })}</h4> 
        <div>
          user data 
          <h4>{user.name}</h4> 
          <h4>{user.email}</h4>
          <h4>{user.password}</h4>
          <h4>{user.isRegistered?'registered':'not registered'}</h4>
          <h4>speak: {user.speak&& user.speak.map(item=>{
          return <h4>{item}</h4>
        })}</h4>
          

        </div>
        <div>
          all user data 
          {users&&users.map(item=>{
            return <div>
              <h4>name: {item.name}</h4>
              <h4> password: {item.password}</h4>
              <h4>status: {isActive?'active':'inactive'}</h4>
              <h4>country: {item.address.country}</h4>
              <h4>zipcode: {item.address.zipcode}</h4>
            </div>
          })}
        </div>
        
        
    </div>
  )
}

export default User
