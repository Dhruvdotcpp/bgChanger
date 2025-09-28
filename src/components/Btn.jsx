import React from 'react'

const Btn = ({ color, setColor ,txtColor='black' }) => {
    
  return (
    <div>
      <button className={`outline-none px-4 py-1 rounded-full text-${txtColor} shadow-lg`}
      style={{backgroundColor: color}} onClick={() => setColor(color)}>{color}</button>
    </div>
  )
}

export default Btn
