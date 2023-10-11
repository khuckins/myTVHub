interface ITabTitleProps {
  title: string
}

const TabTitle = (props: ITabTitleProps) => {
  return (
    <li>
      <button>{props.title}</button>
    </li>
  )
}

export default TabTitle