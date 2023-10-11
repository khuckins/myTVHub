import React, { useState } from "react";
import classes from './Accordion.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface IAccordionProps {
  children: React.ReactNode;
}

const Accordion = (props: IAccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      {isActive && <section className={classes.AccordionSection}>
        <span className={classes.TableHeader}>Info</span>
        <table className={classes.AccordionTable}>
          {props.children}
        </table>
      </section>}
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>
          {isActive ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion