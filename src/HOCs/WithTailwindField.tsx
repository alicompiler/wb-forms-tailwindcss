import React from 'react';
import {ClassName, ClassNameBuilder, DefaultClassNameBuilder} from '../Utils/ClassNameBuilder';
import {Theme} from '../Theme/Theme';
import {useTheme} from '../Theme/ThemeContext';
import {textValueSelector, ValueSelector, WithFieldProps} from 'wb-forms';
import {FieldProps, withField} from 'wb-forms';

export interface WithTailwindFieldProps {
    tailwindOptions: TailwindFieldOptions;
}

export interface WrappedFieldProps {
    className?: ClassName;
    inputProps?: Record<string, unknown>;
}

interface TailwindFieldOptions {
    classNameBuilder: ClassNameBuilder;
    theme: Theme;
    inputProps: Record<string, unknown>;
    placeholder?: string;
    dataTestId: string;
    type: string;
}

export function getFieldTestId(name: string) {
    return `wbox-field-${name}`;
}

export function withTailwindField<TProps extends FieldProps & WithFieldProps>(
    Component: React.ComponentType<TProps & WithTailwindFieldProps>,
    type = 'text',
    valueSelector: ValueSelector = textValueSelector,
    defaultProps: Partial<FieldProps> = {},
    classNameBuilder: ClassNameBuilder = new DefaultClassNameBuilder(),
) {
    type ReceivedProps = Omit<TProps, keyof WithTailwindFieldProps> & WrappedFieldProps;
    const FieldComponent = (props: ReceivedProps) => {
        const theme = useTheme();
        const options: TailwindFieldOptions = {
            dataTestId: getFieldTestId(props.name),
            inputProps: props.inputProps ?? {},
            theme: theme,
            classNameBuilder: classNameBuilder,
            type: type
        };
        return <Component {...(props as TProps)} tailwindOptions={options}/>;
    };
    return withField(FieldComponent, valueSelector, defaultProps);
}