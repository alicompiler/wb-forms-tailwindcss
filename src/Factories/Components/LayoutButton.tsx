import React, {useCallback} from 'react';
import {ClassName, ClassNameBuilder} from '../../Utils/ClassNameBuilder';
import {useTheme} from '../../Theme/ThemeContext';
import {useDefaults} from '../../Defaults/DefaultsContext';
import {useServiceFactory} from 'wb-core-provider';
import {ServiceFactory} from 'wb-forms';

export type  ButtonPosition = 'fullwidth' | 'start' | 'end' | 'center';

interface Props {
    text: string;
    position?: ButtonPosition;
    classNameBuilder?: ClassNameBuilder;
    className?: ClassName;
}

export const DATA_TEST_ID_LAYOUT_BUTTON_WRAPPER = 'wbox-layout-button-wrapper';
export const DATA_TEST_ID_LAYOUT_BUTTON = 'wbox-layout-button';

export function LayoutButton(props: Props) {
    const defaults = useDefaults();
    const classNameBuilder = props.classNameBuilder ?? defaults.classNameBuilder();
    const position = props.position ?? defaults.layout.shared.buttonPosition;
    const justify = position !== 'fullwidth' ? `justify-${position}` : '';
    const theme = useTheme();
    const buttonClassName = classNameBuilder.build(props.className, theme.button);
    const additionalClassName = position === 'fullwidth' ? 'w-full' : '';
    const className = `${buttonClassName} ${additionalClassName}`;
    return <div data-testid={DATA_TEST_ID_LAYOUT_BUTTON_WRAPPER}
                className={`flex py-2 ${justify} __wbox-tailwind-button-wrapper`}>
        <InnerButton className={className} text={props.text}/>
    </div>;
}

function InnerButton({className, text}: { className: string, text: string }) {
    const serviceFactory = useServiceFactory<ServiceFactory>();
    const onClick = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const submit = serviceFactory.createSubmitService();
        await submit.submit();
    }, [serviceFactory]);
    return <button data-testid={DATA_TEST_ID_LAYOUT_BUTTON} onClick={onClick} className={className}>
        {text}
    </button>;
}