import { useState } from "react";

const UseStateObject = () => {
    const [name, setName] = useState("Peter");
    const [age, setAge] = useState(24);
    const [hobby, setHobby] = useState("coding");

    const toggle = () => {
        setName("nidhi");
        setAge(25);
        setHobby("reading");
    };
    return (
        <div>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{hobby}</h3>
            <button onClick={toggle}>SHow</button>
        </div>
    );
};

export default UseStateObject;
