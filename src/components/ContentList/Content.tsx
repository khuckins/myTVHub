import { Fragment } from "react"
import ContentSummary from "./ContentSummary"
import AvailableContent from "./AvailableContent"
import Tabs from "../UI/Tabs"

const Content = () => {
  return (
    <Fragment>
      <ContentSummary />
      <AvailableContent />
    </Fragment>
  )
}

export default Content