import classes from "./ContentItem.module.css";

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


const ContentItem = (props: IContentItemProps) => {
  const releaseInformation = [props.studio,  props.year].filter(Boolean).join(" | ")

  return (
    <li className={classes.content}>
      
      <div className={classes.posterSection}>
        <img
          src={props.thumb}
          className={classes.poster}
          alt={`Poster for ${props.title}`}
        />
      </div>

      <div>
        <h3>{props.title}</h3>
        {props.summary && <div className={classes.summary}>{props.summary}</div>}
        <div className={classes.releaseInformation}>
          {releaseInformation}
        </div>
        <div className={classes.source}>Watchable on {props.source}</div>
      </div>
    </li>
  );
};

export default ContentItem;
