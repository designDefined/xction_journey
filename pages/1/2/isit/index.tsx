import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

interface Props {}

const Index = ({}: Props) => {
  const router = useRouter();
  return (
    <div className={cx("container")}>
      <div className={cx("poster", "e1")} onClick={() => {}}>
        <div className={cx("filter")} />
      </div>
      <div className={cx("poster", "e2")} onClick={() => {}}>
        <div className={cx("filter")} />
      </div>
      <div
        className={cx("toNext")}
        onClick={() => {
          router.push("./collide");
        }}
      >
        <div>요점은 관통하는 것</div>
      </div>
    </div>
  );
};

export default Index;
