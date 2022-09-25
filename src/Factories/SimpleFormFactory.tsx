import {FieldProps, FormOptions} from 'wb-forms';
import React from 'react';
import {SimpleFieldWrapper} from './Components/SimpleFieldWrapper';
import {ClassName} from '../Utils/ClassNameBuilder';
import {ExtraOptionsBase, FormFactoryBase} from './FormFactoryBase';

type FieldConfig = FieldProps & { label: string, labelClassName?: ClassName };

export class SimpleFormFactory extends FormFactoryBase<ExtraOptionsBase> {

    protected renderField(name: string, field: React.ReactElement, fieldConfig: FieldConfig, configuration: FormOptions<ExtraOptionsBase>): React.ReactElement {
        return <SimpleFieldWrapper field={field}
                                   classNameBuilder={configuration.extraOptions.classNameBuilder}
                                   labelClassName={fieldConfig.labelClassName}
                                   label={fieldConfig.label}/>;
    }

}