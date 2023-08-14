import React,{useState} from 'react'
import Meals from './Meals'
import Routertest from './Routertest'
import TestContext from '../store/createContext'
import FilterMeals from './FilterMeals'

const MEAL_DATA = [
  {
    id:'1',
    title:"汉堡",
    desc:'百分百纯牛肉搭配酸爽黄瓜与美味番茄酱',
    price:12,
    img:'/img/1.png'
  },
  {
    id:'2',
    title:"双层吉士堡",
    desc:'百分百纯牛肉搭配双层美味芝士',
    price:15,
    img:'/img/2.png'
  },
  {
    id:'3',
    title:"巨无霸",
    desc:'双层厚牛肉，搭配爽口生菜',
    price:22,
    img:'/img/3.png'
  },
  {
    id:'4',
    title:"板烧鸡腿堡",
    desc:'去骨鸡排嫩滑多汁，搭配香浓烧鸡酱',
    price:20,
    img:'/img/4.png'
  },
  {
    id:'5',
    title:"汉堡",
    desc:'百分百纯牛肉搭配酸爽黄瓜与美味番茄酱',
    price:12,
    img:'/img/1.png'
  },
  {
    id:'6',
    title:"双层吉士堡",
    desc:'百分百纯牛肉搭配双层美味芝士',
    price:15,
    img:'/img/2.png'
  },
  {
    id:'7',
    title:"巨无霸",
    desc:'双层厚牛肉，搭配爽口生菜',
    price:22,
    img:'/img/3.png'
  },
  {
    id:'8',
    title:"板烧鸡腿堡",
    desc:'去骨鸡排嫩滑多汁，搭配香浓烧鸡酱',
    price:20,
    img:'/img/4.png'
  },
]

export default function Shop() {

  const [mealsData,setMealsData] = useState(MEAL_DATA)

  const [car,setCar] = useState({
    items:[],
    totalAmount:0,
    totalPrice:0
  })

  // 添加方法
  const addItem = (meal)=>{
    // meal 要添加进购物车的商品
    const newCar = {...car}
    console.log(newCar);
    // 判断购物车中是否已经有了该商品
    if(newCar.items.indexOf(meal) === -1){
      // 将meal添加进购物车
      newCar.items.push(meal)
      // 设置meal的数量为1
      meal.amount = 1
    }else{
      // meal已经在购物车中，只需要将meal的数量+1
      meal.amount += 1
    }

    //增加总数
    newCar.totalAmount += 1

    //增加总金额
    newCar.totalPrice += meal.price

    // 更新购物车
    setCar(newCar)
  } 

  // 减少方法
  const removeItem = (meal)=>{
    const newCar = {...car}
    meal.amount -= 1
    if(meal.amount === 0){
      // 删除该商品
      newCar.items.splice(newCar.items.indexOf(meal),1)
    }
    //增加总数
    newCar.totalAmount -= 1

    //增加总金额
    newCar.totalPrice -= meal.price

    // 更新购物车
    setCar(newCar)
  }

  // 创建一个过滤meals的函数
  const filterMeal = (keyword)=>{
      const newMealData = MEAL_DATA.filter(meal => meal.title.indexOf(keyword) !== -1)
      setMealsData(newMealData)
    }



  return (
    <>
    <TestContext.Provider value={{...car,addItem,removeItem,filterMeal}}>
      <FilterMeals onFilter={filterMeal} />
      <Meals mealsData={mealsData} />
    </TestContext.Provider>
       <Routertest />
    </>
  )
}
