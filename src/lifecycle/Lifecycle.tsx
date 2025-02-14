import React, { useEffect, useState } from 'react'

const UsingState = () => {
    const [count, setCount] = useState(0);
    const [anotherCount, setAnotherCount] = useState(0);
    useEffect(() => {
        console.log(count)
    }, [count, anotherCount])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click: {count}</button><br></br>
            <button onClick={() => setAnotherCount(anotherCount + 1)}>Another Click: {anotherCount}</button>
        </div>
    )
}

export default UsingState