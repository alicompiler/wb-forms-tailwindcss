import React from 'react';
import {useDefaults} from '../../Defaults/DefaultsContext';
import {useTheme} from '../../Theme/ThemeContext';
import {ClassName, ClassNameBuilder} from '../../Utils/ClassNameBuilder';
import {ReactElement} from 'react';

interface Props {
    field: ReactElement;
    label: string;
    labelClassName: ClassName;
    classNameBuilder?: ClassNameBuilder;
}

export const DATA_TEST_ID_SIMPLE_FIELD_LABEL = 'wbox-simple-field-label';

export function SimpleFieldWrapper(props: Props) {
    const defaults = useDefaults();
    const theme = useTheme();
    const classNameBuilder: ClassNameBuilder = props.classNameBuilder ?? defaults.classNameBuilder();
    const labelClassName = classNameBuilder.build(props.labelClassName, theme.label);
    return <div className={'__wbox-tailwind-simple-layout-field-wrapper py-2'}>
        <label data-testid={DATA_TEST_ID_SIMPLE_FIELD_LABEL} className={labelClassName}>
            {props.label}
            {props.field}
        </label>
    </div>;
}