import {React, useState} from 'react'

export default function Square({value, onSquareClick}) {

  // const [value, setValue] = useState(null)

  // function handleClick() {
  //   setValue('X');
  // }

  return (
    <button onClick={onSquareClick} className="square w-10 h-10 p-2 border-black border">{value}</button>
  )
}

