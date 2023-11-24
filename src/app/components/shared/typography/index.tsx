import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';

import './style.scss';

interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  children: ReactNode | string;
  className?: string;
}

interface TextComponentProps extends TextProps {
  ownClassName: string;
}

const TextComponent = ({ children, className, ownClassName, ...props }: TextComponentProps) => {
  return (
    <span className={classnames('default-text', className, ownClassName)} {...props}>
      {children}
    </span>
  );
};

export const Text1 = (props: TextProps) => {
  return <TextComponent ownClassName={'text1'} {...props} />;
};

export const Text2 = (props: TextProps) => {
  return <TextComponent ownClassName={'text2'} {...props} />;
};

export const Text3 = (props: TextProps) => {
  return <TextComponent ownClassName={'text3'} {...props} />;
};

export const Text4 = (props: TextProps) => {
  return <TextComponent ownClassName={'text4'} {...props} />;
};

export const Text4B = (props: TextProps) => {
  return <TextComponent ownClassName={'text4-b'} {...props} />;
};

export const Text5 = (props: TextProps) => {
  return <TextComponent ownClassName={'text5'} {...props} />;
};

export const Text6 = (props: TextProps) => {
  return <TextComponent ownClassName={'text6'} {...props} />;
};

export const Text6M = (props: TextProps) => {
  return <TextComponent ownClassName={'text6-m'} {...props} />;
};

export const Text7 = (props: TextProps) => {
  return <TextComponent ownClassName={'text7'} {...props} />;
};

export const Text7B = (props: TextProps) => {
  return <TextComponent ownClassName={'text7-b'} {...props} />;
};

export const Text8 = (props: TextProps) => {
  return <TextComponent ownClassName={'text8'} {...props} />;
};

export const Text8S = (props: TextProps) => {
  return <TextComponent ownClassName={'text8-s'} {...props} />;
};

export const Text9 = (props: TextProps) => {
  return <TextComponent ownClassName={'text9'} {...props} />;
};

export const Text10 = (props: TextProps) => {
  return <TextComponent ownClassName={'text10'} {...props} />;
};

export const Text11 = (props: TextProps) => {
  return <TextComponent ownClassName={'text11'} {...props} />;
};
