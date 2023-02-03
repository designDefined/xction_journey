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
        <p>
          사용자는 서비스 이용 전반이라는 큰 단위의 인터랙션부터 버튼 하나를
          누르고 화면을 스크롤하는 것과 같은 작은 단위의 인터랙션 등 다양한
          상호작용을 경험합니다. 사용자 경험(UX)은 이러한 다양한 층위의
          인터랙션이 지닌 가치를 평가하는 좋은 관점을 제공합니다.
        </p>
        <h1>쉽고, 빠르고, 재미있게</h1>
        <p>
          UX 기획자의 목표는 인터랙션을 쉽고, 빠르고, 재미있게 만드는 것입니다.
          그래야 사용자들이 서비스를 이용하고, 서비스가 제공하는 가치가 창출될
          수 있기 때문이죠.
        </p>

        <p></p>
        <div className={cx("examples")}>
          <div
            onClick={() => {
              window.open("https://story.pxd.co.kr/711");
            }}
          >
            간단한 예시: Pull To Refresh UI
          </div>
          <div className={cx("wrapper")}></div>
          <div
            onClick={() => {
              router.push("./");
            }}
          >
            돌아가기
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
