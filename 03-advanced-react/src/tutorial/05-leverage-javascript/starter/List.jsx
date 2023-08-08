import { people } from "../../../data";
import React from "react";
import { Person } from "./Person";

function List() {
    return (
        <div>
            {people.map((person) => {
                return <Person key={person.id} {...person}></Person>;
            })}
        </div>
    );
}

export default List;
