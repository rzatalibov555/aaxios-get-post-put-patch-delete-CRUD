

import { useState } from 'react'
export default function useCounter() {

    const [count, setCount] = useState(0)

    const artir = () => {
        setCount(count+1)
    }

    const azalt = () => {
        setCount(count-1)
    }

  
  return {
        count, artir,azalt
  }
}
