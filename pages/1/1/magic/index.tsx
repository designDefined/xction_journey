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
        <div
          className={cx("short")}
          onClick={() => {
            window.open("https://youtube.com/shorts/2TA8cduvuDs?feature=share");
          }}
        >
          마법 대신 마술을 해봅시다
        </div>
      </div>
      <div
        className={cx("andNext")}
        onClick={() => {
          router.push("../2");
        }}
      >
        다음 챕터로
      </div>
    </div>
  );
};

export default Index;
