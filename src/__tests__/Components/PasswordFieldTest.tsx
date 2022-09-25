import React from 'react';
import {render, screen} from '@testing-library/react';
import {Form} from 'wb-forms';
import {PasswordField} from '../../Components/TextField';
import {getFieldTestId} from '../../HOCs/WithTailwindField';

describe('PasswordField', () => {
    it('should render field with password type', function () {
        const fieldName = 'password';
        render(<Form>
            <PasswordField name={fieldName}/>
        </Form>);
        const input = screen.getByTestId(getFieldTestId(fieldName)) as HTMLInputElement;
        expect(input.type).toEqual(fieldName);
    });
});