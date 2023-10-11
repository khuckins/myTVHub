interface IAccordionItemProps {
  label: string,
  val: string
}
const AccordionItem = (props: IAccordionItemProps) => {
  return (<tr>
    <td>{props.label}</td>
    <td>{props.val}</td>
  </tr>)
}

export default AccordionItem