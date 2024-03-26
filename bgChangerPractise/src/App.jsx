import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  let [color, setColor] = useState('white')

  return (
 
  <div className='w-full h-1/2'
  style={{background : color}}
  >
    {/* && e.target.removeEventListener() */}
<div>
<button
   onClick={(e)=>setColor('blue') }
   className='bg-blue-800 rounded-full p-10 text-white font-serif' >Blue</button>
  <button 
  onClick={()=>setColor('yellow')}
  className='bg-yellow-800 rounded-full p-10 text-white font-serif' >Yellow</button>
  <button 
  onClick={()=>setColor('red')}
  className='bg-red-800 rounded-full p-10 text-white font-serif' >Red</button>
  <button 
  onClick={()=>setColor('green')}
  className='bg-green-800 rounded-full p-10 text-white font-serif' >Green</button>
  <button 
  onClick={()=>setColor('pink')}
  className='bg-pink-800 rounded-full p-10 text-white font-serif' >Pink</button>
  <button
  onClick={()=>setColor('black')}
  className='bg-black rounded-full p-10 text-white font-serif' >Black</button>
</div>
 </div>
  
  )
}

export default App
