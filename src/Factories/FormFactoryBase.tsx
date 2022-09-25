import {FormFactory} from 'wb-forms';
import {FieldProps, Form, FormOptions} from 'wb-forms';
import {ClassName, ClassNameBuilder} from '../Utils/ClassNameBuilder';
import {fieldsMap} from './FieldsMap';
import React, {Fragment, ReactElement} from 'react';
import {ButtonPosition, LayoutButton} from './Components/LayoutButton';

export type FieldConfig = FieldProps & { label: string, labelClassName?: ClassName };

export interface ExtraOptionsBase {
    button: ButtonOptions;
    classNameBuilder?: ClassNameBuilder;
}

export interface ButtonOptions {
    text: string;
    position?: ButtonPosition;
    className?: ClassName;
}

export abstract class FormFactoryBase<TExtraOptions extends ExtraOptionsBase> implements FormFactory<FormOptions<TExtraOptions>> {

    protected readonly fieldTypeMap: Record<string, React.ComponentType>;

    public constructor() {
        this.fieldTypeMap = fieldsMap;
    }


    create(configuration: FormOptions<TExtraOptions>): React.ReactElement {
        const formProps = configuration.formOptions;
        return <Form {...formProps}>
            {
                this.renderFields(configuration)
            }
            {
                this.renderButton(configuration)
            }
        </Form>;
    }


    protected renderFields(configuration: FormOptions<TExtraOptions>): React.ReactElement | React.ReactElement[] {
        const fields = configuration.fields;
        const keys = Object.keys(fields);
        return keys.map((key, index) => {
            const fieldConfig = fields[key].options as unknown as FieldConfig;
            const type = fields[key].type;
            const field = this.getFieldElement(type, fieldConfig);
            return <Fragment key={index}>
                {
                    this.renderField(key, field, fieldConfig, configuration, index, keys.length)
                }
            </Fragment>;
        });
    }

    protected abstract renderField(name: string, field: ReactElement, fieldConfig: FieldConfig, configuration: FormOptions<TExtraOptions>, index: number, fieldsCount: number): ReactElement;

    protected getFieldElement(type: string, fieldProps: FieldConfig) {
        const FieldComponent = this.fieldTypeMap[type];
        return <FieldComponent key={fieldProps.name} {...fieldProps} />;
    }

    protected renderButton(configuration: FormOptions<TExtraOptions>): ReactElement {
        return <LayoutButton position={configuration.extraOptions.button.position}
                             text={configuration.extraOptions.button.text}
                             className={configuration.extraOptions.button.className}
                             classNameBuilder={configuration.extraOptions.classNameBuilder}/>;
    }

}