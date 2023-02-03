import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

interface Props {}

const GoodStory = ({}: Props) => {
  const router = useRouter();
  return (
    <div className={cx("GoodStory")}>
      <div className={cx("poster", "king")}>
        <div className={cx("filter")} />
      </div>
      <div className={cx("poster", "inception")}>
        <div className={cx("filter")} />
      </div>
      <div className={cx("poster", "knivesOut")}>
        <div className={cx("filter")} />
      </div>
      <div className={cx("poster", "glory")}>
        <div className={cx("filter")} />
      </div>
      <div
        className={cx("toNext")}
        onClick={() => {
          router.push("./");
        }}
      >
        <div>좋은 스토리는 우리가 손을 떼고, 눈은 떼지 못하게 합니다</div>
      </div>
    </div>
  );
};

export default GoodStory;
