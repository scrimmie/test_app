import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from './axios'

function App() {
  const [user, setUser] = useState();
  const [count, setCount] = useState(1);

  useEffect(() => {
    const getUser = async() => {
      const info = await axios.get(count.toString())
      setUser(info.data)
    }
    getUser() 
  }, [count])

  return (
    <div className="flex flex-col w-screen h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <div className="flex flex-col mx-auto my-auto bg-local bg-gray-500 rounded-lg px-5 py-5 w-1/2">
      {user ? 
      <>
      <img src={logo} className="mx-auto max-w-sm self-center justify-self-center" alt="logo" />
      <p className="text-center font-sans text-8xl"> User Checker </p>
      <p className="text-center font-sans text-3xl"> User: {count} </p>
      <p className="text-center font-sans text-3xl"> Title: {user.title} </p>
      {user.completed ?
        <p className="text-center font-sans text-3xl text-green-400	"> Completed: {user.completed.toString()} </p>
        :
        <p className="text-center font-sans text-3xl text-red-500	"> Completed: {user.completed.toString()} </p>
      }
      <button onClick={() => {setCount(count + 1)}} className="mx-auto mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next User</button>
      </>
      :
      <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
      }
      </div>
    </div>
  );
}

export default App;
