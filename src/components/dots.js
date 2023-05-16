import { useState, useEffect } from 'react'

function Dots() {
    const dots = ['.', '..', '...']
    const timeDelay = 333
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const intervalID = setInterval(() => {
            setIndex(x => (x+1) % dots.length)
        }, timeDelay)

        return () => clearInterval(intervalID)
    }, [])

    return (
        <div>
            {dots[index]}
        </div>
    )
}

export default Dots