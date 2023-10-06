import React from 'react'
import styles from './Button.module.css'
type IButton = React.ComponentProps<'button'> &{
  label: string;
}
const Button = ({label, ...props}: IButton) => {
  return (
    <div className={styles.btn}>
      <button {...props}>{label}</button>
    </div>
  )
}

export default Button
