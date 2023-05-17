import { useState, useEffect } from 'react'
import Dots from './dots'

export function IncomingMessage({prompt}) {
    const [answerText, setAnswerText] = useState('')
  
    useEffect(() => {
      fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          prompt: prompt,
        })
      })
      .then(res => res.json())
      .then(t => setAnswerText(t))
    }, [])
  
  
    return (
      <div className="w-1/3">
        <h1>{!answerText && <Dots/>}{answerText}</h1>
      </div>
    )
}

export function OutgoingMessage() {

}