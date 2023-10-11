import classes from './Card.module.css'

interface IModalProps {
  children: React.ReactNode
}

const Modal = (props: IModalProps) => {
  return (
    <div className={classes.card}>{props.children}</div>
  )
}

export default Modal