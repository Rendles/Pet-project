import { ChangeEvent, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classnames from 'classnames'

import './style.scss';
import { Text10 } from '../typography';

interface InputProps {
    placeholder: string;
    disabled?: boolean;
    title?: string | null;
    required?: boolean;
    error?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    className?: string;
  }

  export function Input({
    placeholder,
    disabled,
    title,
    required = false,
    error,
    onChange,
    value,
    className,
  }: InputProps) {
    const id = useMemo(() => uuidv4(), []);
  
    return (
      <div className={classnames('input-container', className, { 'input-error': error })}>
        {title && (
          <label htmlFor={id}>
            <Text10 className="input-title">
              {title}
              {required && <Text10 className="input-title-required">*</Text10>}
            </Text10>
          </label>
        )}
  
        <div className={'inner-input-container'}>
          <input
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
            id={id}
            value={value}
            autoComplete={'new-password'}
          />
        </div>
      </div>
    );
  }