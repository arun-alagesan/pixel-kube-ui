import { useState } from "react";
import FolderIcon from "../../../../assets/icons/playertreeviewfoldericon.svg";
import DownArrow from "../../../../assets/icons/playerdownarrowtree.svg";

type TreeModel = {
  name: string;
  type: string;
  items?: TreeModel[];
};

export const Directory = (props: TreeModel) => {
  const { name, type, items } = props;
  const [isExpanded, toggleExpanded] = useState(false);
  const fileClicked = () => {
    alert("File Clicked");
  };

  if (props.type === "folder") {
    return (
      <div className="pl-3 pt-3">
        <button
          className="flex items-center text-sm gap-1.5"
          onClick={() => toggleExpanded(!isExpanded)}
        >
          <DownArrow
            style={isExpanded ? { rotate: "0deg" } : { rotate: "270deg" }}
          ></DownArrow>
          <FolderIcon></FolderIcon>
          <h2 className="text-gray-500">{props.name}</h2>
        </button>
        {isExpanded &&
          props?.items?.map((item: TreeModel) => (
            <Directory key={item.name} {...item} />
          ))}
      </div>
    );
  }
  return (
    <button
      onClick={fileClicked}
      className="text-gray-500 block text-sm pl-7 pt-4"
    >
      {props.name}
    </button>
  );
};
