import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

interface Props {}

const Index = ({}: Props) => {
  const router = useRouter();
  return (
    <div className={cx("container")}>
      <div className={cx("wrapper")}>
        <h1>공회전</h1>
        <p>많은 인터랙티브 영화 작품들은 이유를 제시해주지 못했습니다.</p>
        <p>
          게임보다 불편하고, 영화보다 귀찮은데 왜 굳이 인터랙티브 영화를 봐야
          할까요?
        </p>
        <div className={cx("examples")}>
          <div
            onClick={() => {
              router.push("./isit");
            }}
          >
            그러나 때로는 성공하기도 합니다
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
