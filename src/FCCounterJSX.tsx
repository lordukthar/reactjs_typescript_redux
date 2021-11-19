import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {incrementAge } from "./AppStore";

type Props = {
  label: string;
  count: number;
  onIncrement: () => void;
};

type IUser = {
    name: string,
    age: number
}

interface RootState {
   user: IUser,
}


export const FCCounterJSX: React.FC<Props> = props => {
    const {label, count, onIncrement} = props;
    const user = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch();

    return (
        <div>
            <span>
            {label}:{count}
            </span>
            <button type="button" onClick={onIncrement} > {`Increment`}
                </button>
            TSX: {user.age}

             <button onClick={() => dispatch(incrementAge(user))}>
                <span role="img" aria-label="add">
                Clicking
                </span>
            </button>
        </div>
    )
}

export{}