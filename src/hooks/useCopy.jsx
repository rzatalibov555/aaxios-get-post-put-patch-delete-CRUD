import React from 'react'
import { useState } from 'react'

function useCopy(text) {

    const [copied, setCopied] = useState(false)

    const copy = () => {
        navigator.clipboard.writeText(text)
            .then(() => setCopied(true))
            .catch(() => setCopied(false))
    }
    console.log(copied)
    return [copied, copy]
}

export default useCopy
