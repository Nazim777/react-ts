import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './componensts/User';
import DataFetch from './componensts/DataFetch';
import Card from './componensts/Card';
import ButtonStyle from './componensts/ButtonStyle';
import UseStateHook from './componensts/UseStateHook';
import TypingEvent from './componensts/TypingEvent';
import FormEvent from './componensts/FormEvent';
import UseReducerHook from './componensts/UseReducerHook';
function App() {

  const users = [
    {
      name:'rahim',
      password:123456,
      isActive:true,
      address:{country:'Bangladesh',zipcode:1200}
    },
    {
      name:'karim',
      password:123456,
      isActive:false,
      address:{country:'America',zipcode:2000}
    }
  ]
  const user = {
    name:'John Doe2',
    email:'johndoe@gmail.com',
    password:123456,
    isRegistered:true,
    speak:['Bangla','English']
  }
  return (
    <div className="App">
      {/* <User name='John Doe' age={23} isActive={false} lang={['rahim','karim','habib','alamin']} user= {user} users={users}/> */}
      {/* <DataFetch status='success'/> */}
      {/* <Card>
        <h1>hello this is a card</h1>
      </Card> */}
      {/* <ButtonStyle btnStyle={{color:'red'}}/> */}
      {/* <UseStateHook/> */}
      {/* <TypingEvent/> */}
      {/* <FormEvent/> */}
      {/* <UseReducerHook/> */}
      
    </div>
  );
}

export default App;
