import React from 'react';
import styles from './button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode,
  disabled?: boolean,
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({children, disabled, onClick}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={classNames(styles.myBtn, 'btn', {[styles.disabled]: disabled})}>{children}</button>
  )
}

export default Button;