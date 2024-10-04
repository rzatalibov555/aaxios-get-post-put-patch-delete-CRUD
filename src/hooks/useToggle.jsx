
import { useState } from 'react'

export default function useToggle() {

    const [open, setOpen] = useState(false)

    const change = () => {
        setOpen(!open)
    }

  return {
    open, change
  }
}
