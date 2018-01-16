import React from 'react';

import classes from './Input.css';

const input = ( props ) => {

    let inputClasses = [classes.InputElement]

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    let inputElement = null;
    switch (props.elementType) {
        case 'input':
            inputElement = <input {...props.elementConfig}
                            value={props.value}
                            className={inputClasses.join(' ')} onChange={props.changed}/>
            break;
        case 'textarea':
            inputElement = <textarea {...props.elementConfig}
                            value={props.value}
                            className={inputClasses.join(' ')} onChange={props.changed}/>
            break;
        case 'select':
            inputElement = (
                <select
                    value={props.value}
                    className={inputClasses.join(' ')} onChange={props.changed}>
                    {props.elementConfig.options.map(option => {
                        return <option value={option.value} key={option.value}>{option.displayValue}</option>
                    })}
                </select>
            )

            break;
        default:
            inputElement = <input {...props.elementConfig}
                            value={props.value}
                            className={inputClasses.join(' ')} onChange={props.changed}/>
            break;
    }



    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;
