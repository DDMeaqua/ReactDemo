import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(p => p+1);
    await delay(3000);
    setPending(p => p-1);
    setCompleted(c => c+1);
  }

  return (
    <div className='border-2 border-pink-400 p-5 m-5 rounded-2xl'>

      <h3 className='border-b-4 border-blue-500 m-3'>
        等待：{pending}
      </h3>
      <h3 className='border-b-4 border-blue-500 m-3'>
        完成：{completed}
      </h3>
      <button className='border-2 border-red-600 p-3 m-3 rounded-lg' onClick={handleClick}>
        购买
      </button>
    </div>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
