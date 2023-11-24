import React, {ReactNode} from "react";
import classnames from 'classnames';

import './style.scss'

export type ButtonStyleType = 'filled' | 'outlined' | 'translucent' | 'transparent' | 'gradient';
export type ButtonColor = 'blue' | 'red' | 'orange' | 'green';

export interface ButtonProps {
    title: string;
    children?: ReactNode;
    onClick: (event: React.MouseEvent<HTMLElement> | undefined) => void;
    disabled?: boolean;
    loading?: boolean;
    styleType?: ButtonStyleType;
    color?: ButtonColor;
    className?: string;
    type?: 'button' | 'submit';
    onlyIcon?: boolean;
}

export function Button({ 
    title,
    children,
    onClick,
    disabled,
    loading,
    styleType = 'filled',
    color = 'blue',
    className,
    type = 'button',
    onlyIcon}: ButtonProps) {
        const childrenCount = React.Children.count(children);
        return (
            <button
            type={type}
            title={title}
            className={classnames('button', styleType, color, className, { 'only-icon': onlyIcon })}
            disabled={disabled || loading}
            onClick={onClick}
            >
            <div className={classnames('button-content', childrenCount > 1 ? 'children' : '', { loading })}>{children}</div>
            </button>
        )
    }