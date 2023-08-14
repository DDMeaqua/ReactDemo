import React,{useContext} from 'react'
import TestContext from '../store/createContext'

export default function Counter(props) {

  const ctx = useContext(TestContext);

  // console.log(props.meal);
  // console.log(props.onAdd);
  const addButton = ()=>{
    ctx.addItem(props.meal)
    // console.log(ctx);
    
  }

  const subButton = ()=>{
    // props.onSub(props.meal)
    ctx.removeItem(props.meal)
  }

  return (
    <div className='flex items-center'>
      {
        (props.meal.amount && props.meal.amount !== 0) ?  <><button onClick={subButton} className='rounded-full border-2 border-black w-5 h-5'>
        <span>-</span>
      </button>
      <span>{props.meal.amount}</span></> : null
      }
      
      <button onClick={addButton} className='rounded-full bg-[#e5c55b] w-5 h-5'>
        <span>+</span>
      </button>
    </div>
  )
}
