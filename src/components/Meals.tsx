import React from 'react'
import Meal from './Meal'

export default function Meals(props) {

  return (
    <div>
      {props.mealsData.map(item => <Meal key={item.id} meal={item} />)}
    </div>
  )
}
