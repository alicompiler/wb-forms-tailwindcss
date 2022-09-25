import React from 'react';
import {TableLayoutExtraOptions, TableLayoutFormFactory} from '../Factories/TableLayoutFormFactory';
import {SimpleFormFactory} from '../Factories/SimpleFormFactory';
import {FormOptions} from 'wb-forms';
import {ExtraOptionsBase} from '../Factories/FormFactoryBase';

export function LayoutExample() {
    const tableLayoutFormFactory = new TableLayoutFormFactory();
    const simpleFormFactory = new SimpleFormFactory();
    const configuration: FormOptions<ExtraOptionsBase> = {
        formOptions: {},
        fields: {
            username: {
                type: 'text',
                options: {
                    name: 'username',
                    label: 'Username',
                },
            },
            password: {
                type: 'password',
                options: {
                    name: 'password',
                    label: 'Password',
                }
            },
            email: {
                type: 'text',
                options: {
                    name: 'email',
                    label: 'Email',
                }
            },
            phone: {
                type: 'text',
                options: {
                    name: 'phone',
                    label: 'Phone',
                }
            },
            date: {
                type: 'date',
                options: {
                    name: 'date',
                    label: 'Birthdate',
                }
            }
        },
        extraOptions: {
            button: {
                text: 'Create Account'
            }
        }
    };

    const tableLayoutConfiguration: FormOptions<TableLayoutExtraOptions> = {
        ...configuration,
        extraOptions: {
            ...configuration.extraOptions,
            labelWidth: 120,
            labelAlignment: 'center',
            showDivider: true
        }
    };

    const simpleConfiguration = {
        ...configuration
    };

    return <div>
        <div className={'p-4'}>
            <h1>Table Layout Form Example</h1>
            {tableLayoutFormFactory.create(tableLayoutConfiguration)}
        </div>
        <br/><br/>
        <hr/>
        <br/><br/>
        <div className={'p-4'}>
            <h1>Simple Form Example</h1>
            {simpleFormFactory.create(simpleConfiguration)}
        </div>
    </div>;
}