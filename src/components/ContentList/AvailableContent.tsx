import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableContent.module.css";
import ContentItem from "./ContentItem/ContentItem";
import useHttp from "../../hooks/use-https";
const DUMMY_CONTENT = [
  {
    guid: "7747e5ff-6c24-4092-913d-7232ca189bfd",
    title: "Band of Brothers",
    art: "https://artworks.thetvdb.com/banners/posters/74205-12.jpg",
    studio: "HBO",
    type: "show",
    summary:
      "The miniseries follows Easy Company, an army unit during World War II, from their initial training at Camp Toccoa to the conclusion of the war. The series is based on the book written by the late Stephen E. Ambrose. Band of Brothers is executive produced by Steven Spielberg and Tom Hanks, the series won 6 Emmy Awards.",
    year: "2001",
    rating: "",
    audienceRating: "",
    source: "Plex",
  },
  {
    guid: "3410b05c-990b-41fe-9e08-0cbd75d9bd24",
    title: "Doctor Who (2005)",
    art: "https://artworks.thetvdb.com/banners/posters/78804-52.jpg",
    studio: "BBC One",
    type: "show",
    summary:
      "The Doctor is an alien Time Lord from the planet Gallifrey who travels through all of time and space in the TARDIS. The Doctor has a long list of friends and companions who have shared journeys along the way. Instead of dying, the Doctor is able to “regenerate” into a new body, taking on a new personality with each regeneration.",
    year: "2005",
    rating: "",
    audienceRating: "",
    source: "Disney+",
  },
];

export interface ContentBlob {
  guid: string,
  title: string,
  art: string,
  studio: string,
  type: string,
  summary: string,
  year: string,
  rating: string,
  audienceRating: string,
  source: string
}

const AvailableContent = () => {
  const [shows, setShows] = useState<Array<any>>([] as Array<any>)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const { isLoading, error, sendRequest: fetchContent } = useHttp();

  useEffect(() => {
    const transformContent = (contentObj: any) => {
      const loadedContent = [];
      console.log(contentObj)

      for (const contentKey in contentObj) {
        loadedContent.push({
          guid: contentKey,
          title: contentObj[contentKey].title,
          art: contentObj[contentKey].art,
          studio: contentObj[contentKey].studio,
          type: contentObj[contentKey].type,
          summary: contentObj[contentKey].summary,
          year: contentObj[contentKey].year,
          rating: contentObj[contentKey].rating,
          audienceRating: contentObj[contentKey].audienceRating,
          thumb: contentObj[contentKey].thumb,
          source: "Plex"
        });
      }

      setShows(loadedContent)
    };

    fetchContent(
      { url: `http://${process.env.REACT_APP_PLEX_IP_ADDRESS}:${process.env.REACT_APP_PLEX_PORT_NUMBER}/library/sections/${process.env.REACT_APP_PLEX_TV_LIBRARY_ID}/all?X-Plex-Token=${process.env.REACT_APP_PLEX_API_TOKEN}` },
      transformContent
    )
  }, [fetchContent]);  

  let content: any = shows.map((content: any) => {
    return (
      <Card key={content.guid}>
        <ul>
          <ContentItem
            guid={content.guid}
            source={content.source}
            title={content.title}
            summary={content.summary}
            type={content.type}
            studio={content.studio}
            year={content.year}
            art={`${content.thumb}?X-Plex-Token=GwzMnQNsqd_QaBt2udgh`}
            rating={content.rating}
            audienceRating={content.audienceRating}
          />
        </ul>
      </Card>
    );
  });

  if (error) {
    content = (
      <div className={classes['content-container']}>
        <button className={classes.button}>Try Again
        </button>
      </div>
    );
  }

  return <section className={classes.content}>{content}</section>;
};

export default AvailableContent;
