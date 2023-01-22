import classNames from "classnames/bind";
import styles from "./ChapterItem.module.scss";
import { IChapter } from "../../../types/chapter";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

interface Props {
  chapter: IChapter;
}

const ChapterItem = ({
  chapter: { order, title, pageId, description },
}: Props) => {
  const router = useRouter();
  return (
    <li
      className={cx("ChapterItem")}
      onClick={() => {
        router.push(`/seminar/${pageId}`);
      }}
    >
      <label className={cx("title")}>{title}</label>
      <div className={cx("order")}>{order}</div>
      <div className={cx("description")}>{description}</div>
    </li>
  );
};

export default ChapterItem;
