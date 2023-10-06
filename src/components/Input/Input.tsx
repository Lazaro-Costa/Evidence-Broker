import React from 'react'
import styles from './Input.module.css'
type IInput = React.ComponentProps<'input'> & {
  label: string;
  id: string;
}
const Input = ({label, id, ...props}:IInput) => {
  return (
    <div className={styles.inputContainer}>  
      <input type="text" name={id} placeholder={label} {...props} />
    </div>
  )
}

export default Input
