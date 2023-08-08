import avatar from "../../../assets/default-avatar.svg";
import React from "react";

export function Person({ name, nickName = "Motu", images }) {
    const img = images?.[0]?.small?.url || avatar;
    return (
        <div>
            <img src={img} alt={name} style={{ width: "50px" }} />
            <h4>{name}</h4>
            <h4>Nickname: {nickName}</h4>
        </div>
    );
}
