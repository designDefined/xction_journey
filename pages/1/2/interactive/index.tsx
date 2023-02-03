import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

interface Props {}

const Index = ({}: Props) => {
  const router = useRouter();
  return (
    <div className={cx("container")}>
      <div
        className={cx("poster", "e1")}
        onClick={() => {
          window.open("https://www.youtube.com/watch?v=Ak-qRYVNVXY");
        }}
      >
        <div className={cx("filter")} />
      </div>
      <div
        className={cx("poster", "e2")}
        onClick={() => {
          window.open("https://www.youtube.com/watch?v=RcGaTzFV-pw");
        }}
      >
        <div className={cx("filter")} />
      </div>
      <div
        className={cx("poster", "e3")}
        onClick={() => {
          window.open("https://www.youtube.com/watch?v=RcGaTzFV-pw");
        }}
      >
        <div className={cx("filter")} />
      </div>
      <div className={cx("poster", "e4")}>
        <div className={cx("filter")} />
      </div>
      <div
        className={cx("toNext")}
        onClick={() => {
          router.push("./whynot");
        }}
      >
        <div>왜 영화는?</div>
      </div>
    </div>
  );
};

export default Index;
