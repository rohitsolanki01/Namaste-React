import { useState } from "react";

const User = ({name,age,current}) => {
    const [count,setCount] = useState(0)
    return(
        <>
        <h1>This is the Functional Component</h1>
        <p>{name}</p>
        <p>{age}</p>
        <p>{current}</p>
        <button onClick={() => setCount(count +1)}>Increment</button>
        <button onClick={() => setCount(count -1)}>Decrement</button>
        <h1>{count}</h1>
        </>
    );
}

export default User;