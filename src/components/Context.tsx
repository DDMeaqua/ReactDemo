import React, { useContext } from 'react'
import TestContext from '../store/createContext'

export default function Context() {

  const ctx = useContext(TestContext);

  return (
    <div>
      {"我叫" + ctx.name + "，今年" + ctx.age + "岁了"}
    </div>
  )
}
