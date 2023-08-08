import { data } from "../../../data";
import React from "react";
const UseStateArray = () => {
    const [people, setPeople] = React.useState(data);
    const removeItem = (id) =>
        setPeople(people.filter((person) => person.id !== id));

    const removeAll = () => {
        setPeople([]);
    };
    return (
        <div>
            {people.map((person) => {
                const { id, name } = person;
                return (
                    <div key={id}>
                        <h4>{name}</h4>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => removeItem(id)}
                        >
                            remove
                        </button>
                    </div>
                );
            })}
            <button className="btn" onClick={removeAll}>
                {" "}
                Remove All{" "}
            </button>
        </div>
    );
};

export default UseStateArray;
