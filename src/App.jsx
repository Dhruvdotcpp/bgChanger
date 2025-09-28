import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Btn from './components/Btn'

function App() {
  const [color, setColor] = useState('black')

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <Btn color="Red" setColor={setColor} />
            <Btn color="Green" setColor={setColor}/>
            <Btn color="Blue" setColor={setColor}/>
            <Btn color="Yellow" setColor={setColor}/>
            <Btn color="Olive" setColor={setColor}/>
            <Btn color="Gray" setColor={setColor}/>
            <Btn color="Purple" setColor={setColor}/>
            <Btn color="Pink" setColor={setColor}/>
            <Btn color="Lavender" setColor={setColor}/>
            <Btn color="Black" setColor={setColor} txtColor="white"/>
            <Btn color="White" setColor={setColor}/>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
