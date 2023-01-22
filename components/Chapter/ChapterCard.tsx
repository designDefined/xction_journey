import styles from "./ChapterCard.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const ChapterCard = () => {
  return <li className={cx("ChapterCard")}>예시</li>;
};

export default ChapterCard;
