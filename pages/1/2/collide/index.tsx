import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

interface Props {}

const Index = ({}: Props) => {
  const router = useRouter();
  return (
    <div className={cx("container")}>
      <div className={cx("main")}>
        <div className={cx("short")}>
          가만히 있어도 괜찮게 만드려는 스토리텔링
        </div>
        <div className={cx("short")}></div>
        <div className={cx("short")}>가만히 있을 수 없게 만드려는 UX</div>
      </div>
      <div
        className={cx("andNext")}
        onClick={() => {
          router.push("./interactive");
        }}
      >
        참 곤란한 일입니다.
      </div>
    </div>
  );
};

export default Index;
