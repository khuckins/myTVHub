import Poster from "../../UI/Poster";
import classes from "./ContentItem.module.css";
import plexIcon from "../../../assets/icons/plex.png"
export interface IContentItemProps {
  guid?: string;
  title?: string;
  art?: string;
  studio?: string | null;
  type?: string;
  summary?: string | null;
  year?: string | null;
  rating?: string;
  audienceRating?: string;
  thumb?: string;
  source?: string;
}

// TODO: Map Source and Icon

const ContentItem = (props: IContentItemProps) => {

  return (
    <li className={classes.content}>
      
      <Poster poster={props.art} altText={`Poster for ${props.title}`} className={classes.posterSection} />

      <div className={classes.mainInfo}>
        <h3>{props.title}</h3>
        {props.summary && <div className={classes.summary}>{props.summary}</div>}
        <div className={classes.watchableOn}>
          <div className={classes.source}>Watchable on {props.source}</div>
        </div>
      </div>
    </li>
  );
};

export default ContentItem;
