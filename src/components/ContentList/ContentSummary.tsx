import classes from './ContentSummary.module.css'

const ContentSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>All your shows, listed in one place.</h2>
      <p>
        Below you'll see a list of all shows available on your local Plex Server, and those watch-listed in supported Streaming Services.
      </p>
    </section>
  )
}

export default ContentSummary