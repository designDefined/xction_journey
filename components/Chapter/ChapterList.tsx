import styles from "./ChapterCard.module.scss";
import classNames from "classnames/bind";
import ChapterCard from "@/components/Chapter/ChapterCard";
const cx = classNames.bind(styles);

const ChapterList = () => {
  return (
    <ol className={cx("ChapterList")}>
      <ChapterCard />
    </ol>
  );
};

export default ChapterList;
