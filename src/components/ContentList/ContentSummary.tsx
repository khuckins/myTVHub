import classes from './ContentSummary.module.css'

const ContentSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>All your shows, listed in one place.</h2>
      <p>
        Below you'll see a list of all shows listed on your Plex Servers, and those favorited in supported Streaming Services.
      </p>
    </section>
  )
}

export default ContentSummary