import { Directory } from "../directory-tree";
import files from "../../../../files.json";
import styles from "./fileSystem.module.css";

import IconOne from "../../../../assets/icons/playerdoticon-complete.svg";
import IconTwo from "../../../../assets/icons/playersmallrect-complete.svg";
import IconThree from "../../../../assets/icons/PlayerupArrow.svg";

import FolderIcon from "../../../../assets/icons/folder.svg";

export const FileSystem = () => {
  const doSomething = () => {
    alert("Implement Functionality");
  };

  const folderArray = [
    {
      id: 0,
      label: "item-0",
    },
    {
      id: 1,
      label: "item-1",
    },
    {
      id: 2,
      label: "item-2",
    },
    {
      id: 3,
      label: "item-3",
    },
    {
      id: 4,
      label: "item-4",
    },
    {
      id: 5,
      label: "item-5",
    },
    {
      id: 6,
      label: "item-6",
    },
    {
      id: 7,
      label: "item-7",
    },
    {
      id: 8,
      label: "item-8",
    },
    {
      id: 9,
      label: "item-9",
    },
    {
      id: 10,
      label: "item-10",
    },
    {
      id: 11,
      label: "item-11",
    },
    {
      id: 12,
      label: "item-12",
    },
    {
      id: 13,
      label: "item-13",
    },
    {
      id: 14,
      label: "item-14",
    },
    {
      id: 15,
      label: "item-15",
    },
  ];

  return (
    <div className={styles.fileSystemLayout}>
      <div className={styles.fileSystemLeftPan}>
        <Directory {...files} />
      </div>
      <div className={styles.fileSystemRightPan}>
        <div className={styles.fileSystemViewOperationHeader}>
          <div className={styles.fileSystemViewOperation}>
            <div className="flex gap-1">
              <span>Sort by:</span>
              <span>Name</span>
            </div>
            <div className="flex items-center gap-2">
              <button className={styles.customIconButton} onClick={doSomething}>
                <IconThree></IconThree>
              </button>
              <span>|</span>
              <div className="flex gap-2">
                <button
                  className={styles.customIconButton}
                  onClick={doSomething}
                >
                  <IconTwo></IconTwo>
                </button>
                <button
                  className={styles.customIconButton}
                  onClick={doSomething}
                >
                  <IconTwo></IconTwo>
                </button>
              </div>
            </div>
          </div>
          <button className={styles.customIconButton} onClick={doSomething}>
            <IconOne></IconOne>
          </button>
        </div>

        <div className={styles.fileSystemViewRenderTilesView}>
          {folderArray.map((item: any) => {
            return (
              <button
                key={item.id}
                className={styles.customIconButton}
                onClick={doSomething}
              >
                <FolderIcon></FolderIcon>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
