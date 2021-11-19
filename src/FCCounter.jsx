import * as React from 'react';
import { useSelector } from "react-redux";


export const FCCounter = props => {
    const {label, count, onIncrement} = props;
    const user = useSelector((state) => state.user);

    return (
        <div>
            <span>
            {label}:{count}
            </span>
            <button type="button" onClick={onIncrement} > {`Increment`}
                </button>
            Hola JSX {user.age}
        </div>
    )
}

export{}