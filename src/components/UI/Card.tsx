import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import classes from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Accordion from "./Accordion";
interface ICardProps {
  children: React.ReactNode;
  accordionChildren?: React.ReactNode;
}

const Card = (props: ICardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((current) => !current);
  };

  return (
    <div className={classes.card}>
      {props.children}
      <Accordion children={props.accordionChildren} />
    </div>
  );
};
export default Card;
