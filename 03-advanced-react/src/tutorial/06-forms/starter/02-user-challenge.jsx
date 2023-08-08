import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
    const [user, setUser] = useState(data);
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        let new_id = user.length + 1;
        const newUser = { id: new_id, name: name };
        const updatedUser = [...user, newUser];
        setUser(updatedUser);
        setName("");
    };
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h4>Add User</h4>
                <div className="form-row">
                    <label htmlFor="name" className="form-label">
                        name
                    </label>
                    <input
                        type="text"
                        className="form-input"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-block">
                    submit
                </button>
            </form>
            <div>
                {console.log(user)}
                {user.map((person) => {
                    const { id, name } = person;
                    return (
                        <div key={id} className="item">
                            <h4>{name}</h4>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default UserChallenge;
