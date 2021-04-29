import React from "react";
import cx from "classnames";
import styles from "./styles.scss";
import { availableTags } from "../../availableTags";

export const Tag = ({ selected, type, cb , name}) => {
  let chosenTagType;
  switch (type) {
    case availableTags[0]: {
      chosenTagType = `Sketch`;
      break;
    }
    case availableTags[1]: {
      chosenTagType = `Spotify`;
      break;
    }
    case availableTags[2]: {
      chosenTagType = `Dribble`;
      break;
    }
    
    case availableTags[3]: {
      chosenTagType = `Behance`;
      break;
    }
    
    case availableTags[4]: {
      chosenTagType = `UX`;
      break;
    }
    default: {
      throw new Error("There is no such type!");
    }
  }

  const tagCn = cx("tag", chosenTagType, { 
    selected: selected ? selected : name === chosenTagType
  });
  const tagClick = () => {
    if (typeof cb === "function") {
      cb(type);
    }
  };

  console.log(selected);

  return (
    <span onClick={tagClick} className={tagCn}>
      {type}
    </span>
  );
};
