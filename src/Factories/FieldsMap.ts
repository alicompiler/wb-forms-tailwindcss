import React from 'react';
import {DateField, DateTimeField, PasswordField, TextField, TimeField} from '../Components/TextField';
import TextArea from '../Components/TextArea';
import SelectField from '../Components/SelectField';
import RadioButton from '../Components/RadioButton';
import Checkbox from '../Components/Checkbox';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fieldsMap: Record<string, React.ComponentType<any>> = {
    text: TextField,
    password: PasswordField,
    date: DateField,
    datetime: DateTimeField,
    time: TimeField,
    textarea: TextArea,
    select: SelectField,
    radio: RadioButton,
    checkbox: Checkbox
};