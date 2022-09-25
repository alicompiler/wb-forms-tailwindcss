import React from 'react';
import {checkboxValueSelector, FieldProps} from 'wb-forms';
import {WithFieldProps} from 'wb-forms';
import {ChoiceBoxBase, Orientation} from './ChoiceBoxBase';
import {withTailwindField, WithTailwindFieldProps} from '../HOCs/WithTailwindField';
import {useDefaults} from '../Defaults/DefaultsContext';


export interface CheckboxProps extends FieldProps, WithTailwindFieldProps {
    text?: string;
    orientation?: Orientation;
}

interface Props extends CheckboxProps, WithFieldProps {

}

function Checkbox(props: Props) {
    const {tailwindOptions} = props;
    const defaults = useDefaults();
    const orientation = props.orientation ?? defaults.checkboxOrientation;
    return <ChoiceBoxBase name={props.name}
                          dataTestId={tailwindOptions.dataTestId}
                          type={tailwindOptions.type as 'checkbox' | 'radio'}
                          classNames={tailwindOptions.theme.checkboxClassName}
                          classNameBuilder={tailwindOptions.classNameBuilder}
                          orientation={orientation}
                          field={props.field}
                          checked={props.field.value}
                          value={props.field.value}
                          handleChange={props.handleChange}
                          text={props.text ?? ''}/>;
}

export default withTailwindField(Checkbox, 'checkbox', checkboxValueSelector);