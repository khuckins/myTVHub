import classes from './Poster.module.css'
import posterPlaceholder from '../../assets/poster_placeholder.png'
interface IPosterProps {
  className: string,
  poster?: string | undefined,
  altText: string | undefined,
}
const Poster = (props: IPosterProps) => {

  return (
    <div className={props.className}>
      {props.poster && <img src={props.poster} alt={props.altText} className={classes.posterImage} />}
    </div>
  )
}

export default Poster