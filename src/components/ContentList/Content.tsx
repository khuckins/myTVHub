import { Fragment } from "react"
import ContentSummary from "./ContentSummary"
import AvailableContent from "./AvailableContent"

const Content = () => {
  return (
    <Fragment>
      <ContentSummary />
      <AvailableContent />
    </Fragment>
  )
}

export default Content