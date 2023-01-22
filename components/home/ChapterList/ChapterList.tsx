import classNames from "classnames/bind";
import styles from "./ChapterList.module.scss";
import chapters from "../chapters";
import ChapterItem from "../ChapterItem/ChapterItem";

const cx = classNames.bind(styles);

interface Props {}

const ChapterList = ({}: Props) => {
  return (
    <ol className={cx("ChapterList")}>
      {chapters.map((chapter) => (
        <ChapterItem key={chapter.pageId} chapter={chapter} />
      ))}
    </ol>
  );
};

export default ChapterList;
