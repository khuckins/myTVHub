import TabTitle from "./TabTitle"

interface ITabsProps {
  children: React.ReactElement[]
}

const Tabs = (props: ITabsProps) => {
  return (
    <div>
      <ul>
        {props.children.map((item, index) => (
          <TabTitle key={index} title={item.props.title} />
        ))}
      </ul>
    </div>
  )
}

export default Tabs