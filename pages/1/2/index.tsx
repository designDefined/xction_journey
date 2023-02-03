import classNames from "classnames/bind";
import styles from "./Crossroad.module.scss";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

interface Props {}

const Crossroad = ({}: Props) => {
  const router = useRouter();
  return (
    <div className={cx("Crossroad")}>
      <div className={cx("title")}>2. 교차로</div>
      <div
        className={cx("road")}
        onClick={() => {
          router.push("./2/collide");
        }}
      />
      <div
        className={cx("goodStory")}
        onClick={() => {
          router.push("./2/goodstory");
        }}
      >
        좋은 이야기?
        <div className={cx("back")} />
      </div>
      <div
        className={cx("goodUx")}
        onClick={() => {
          router.push("./2/goodux");
        }}
      >
        좋은 UX?
        <div className={cx("back")} />
      </div>
    </div>
  );
};

export default Crossroad;
