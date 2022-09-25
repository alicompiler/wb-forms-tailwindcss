import {FieldValue} from 'wb-forms';

export interface Option {
    text: string;
    value: FieldValue;
}

export interface WithOptions {
    options: Option[];
}