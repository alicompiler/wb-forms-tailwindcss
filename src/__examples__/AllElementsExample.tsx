import React from 'react';
import {FieldValidator, FieldValue, Form} from 'wb-forms';
import SelectField from '../Components/SelectField';
import Checkbox from '../Components/Checkbox';
import RadioButton from '../Components/RadioButton';
import TextArea from '../Components/TextArea';
import {DateField, DateTimeField, PasswordField, TextField, TimeField} from '../Components/TextField';

class CheckValidator implements FieldValidator {
    validate(value: FieldValue): boolean {
        return value === true;
    }
}

const checkValidator = () => {
    return new CheckValidator();
};

export function AllElementsExample() {
    const colors = [
        {text: 'Red', value: 'red'},
        {text: 'Blue', value: 'blue'},
        {text: 'Green', value: 'green'}
    ];
    return <Form fieldConfiguration={{
        name: {validationRules: '^ali$'},
        password: {validationRules: 'pass'},
        color: {validationRules: '^blue$'},
        checkbox: {validationRules: true, fieldValidator: checkValidator},
        radio: {validationRules: '^green$'}
    }}>
        <TextField name={'name'}/>
        <PasswordField name={'password'}/>
        <DateField name={'date'}/>
        <TimeField name={'time'}/>
        <DateTimeField name={'datetime'}/>
        <SelectField name={'color'} options={colors}/>
        <Checkbox name={'checkbox'} text={'Dummy Checkbox'}/>
        <RadioButton name={'radio'} options={colors}/>
        <TextArea rows={5} placeholder={'Message...'} name={'message'}/>
    </Form>;
}