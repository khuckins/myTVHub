interface ITabProps {
  children: React.ReactNode;
}

const Tab = (props: ITabProps) => {
  return <div>{props.children}</div>
}

export default Tab