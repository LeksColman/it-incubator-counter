import React from 'react';

type CounterPropsType = {
    number: number
    className: string
}
export const Counter = (props: CounterPropsType) => {
    return (
        <div className={props.className}>
            {props.number}
        </div>
    );
};

