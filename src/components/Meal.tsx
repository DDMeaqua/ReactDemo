import React from 'react'
import Counter from './Counter'

export default function Meal(props) {
  // console.log(props.meal);
  return (
    <div className='p-4 m-2 flex border-b-2'>
      <div className='w-1/4'>
        <img src={props.meal.img} alt="" />
      </div>
      <div className='w-3/4 p-2'>
        <h1>{props.meal.title}</h1>
        <p>{props.meal.desc}</p>
        <div className='flex justify-between'>
          <span>${props.meal.price}</span>
          <Counter meal={props.meal} />
        </div>
      </div>

    </div>
  )
}
