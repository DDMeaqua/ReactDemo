import { createContext } from 'react';

const TestContext = createContext({
  items:[],
  totalAmount:0,
  totalPrice:0,
  addItem:()=>{},
  removeItem:()=>{}
});
export default TestContext;