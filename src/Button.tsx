import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: ()=>void
    buttonStatus?: boolean
    className: string
}
export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button
            disabled={props.buttonStatus}
            onClick={onClickHandler}
            className={props.className}
        >
            {props.name}
        </button>
    );
};

