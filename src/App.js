import React, {useState} from "react"

import Child from "./Child"

const App = () => {

    const [count, setCount] = useState(0)

    const countUp = () => {
        setCount(count + 1)
    }

    const labels = [
        "apple",
        "banana",
        "orange"
    ]

    return (
        <>
            <div>
                count: {count}
            </div>
            <button onClick={countUp}>
                hit me!!!
            </button>
            <ul>
                {
                    labels.map( label => {
                        return (
                            <Child
                                label={label}
                                key={label}
                            />
                        )
                    })
                }
            </ul>
        </>
    )
}

export default App;
