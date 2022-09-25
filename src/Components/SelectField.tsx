import React from 'react';
import {FieldProps} from 'wb-forms';
import {WithOptions} from './WithOption';
import {WithFieldProps} from 'wb-forms';
import {withTailwindField, WithTailwindFieldProps, WrappedFieldProps} from '../HOCs/WithTailwindField';
import {stateBasedClassNameSelector} from '../Utils/ClassNameBuilder';

export interface TailwindSelectProps extends FieldProps, WrappedFieldProps, WithOptions {
    placeholder?: string;
}

interface Props extends TailwindSelectProps, WithFieldProps, WithTailwindFieldProps {

}

function SelectField(props: Props) {
    const {tailwindOptions} = props;
    const {classNameBuilder, theme} = tailwindOptions;
    const selectClassName = classNameBuilder.build(props.className, stateBasedClassNameSelector(theme.selectClassName, props.field));
    const optionClassName = classNameBuilder.build(props.className, stateBasedClassNameSelector(theme.selectOptionClassName, props.field));
    return <select name={props.name}
                   data-testid={tailwindOptions.dataTestId}
                   className={selectClassName}
                   placeholder={props.placeholder}
                   {...tailwindOptions.inputProps}
                   value={props.field.value}
                   onChange={props.handleChange}>
        {
            props.options.map((option, index) =>
                <option key={index} className={optionClassName} value={option.value}>
                    {option.text}
                </option>)
        }
    </select>;
}

export default withTailwindField(SelectField, 'select');