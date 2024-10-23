import { useState } from "react"
import { Button } from "./ui/button"

const Counter = () => {
    const [count, setcount] = useState(0)
    const handleIncrement = () =>{
        setcount(count + 1)
    }
    const handleDecrement = () =>{
        setcount(count - 1)
    }
  return (
    <div className="font-bold">
      
      <Button className="me-6" onClick={handleIncrement}>Increment</Button>
       {count}
      <Button className="ms-6" onClick={handleDecrement}>Decrement</Button>
    </div>
  )
}

export default Counter
