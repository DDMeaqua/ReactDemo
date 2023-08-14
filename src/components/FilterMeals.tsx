import React,{useContext} from 'react'
// import TestContext from '../store/createContext'

export default function FilterMeals(props) {
  
  // const ctx = useContext(TestContext);

  const inputChange = (e)=>{
    // console.log(e.target.value);
    const keyword = e.target.value.trim()
    props.onFilter(keyword)
    
  }

  return (
    <div className='p-2 sticky top-0 bg-blue-300 text-center'>
      <input onChange={inputChange} type="text" className='border-2 p-1' />
    </div>
  )
}
