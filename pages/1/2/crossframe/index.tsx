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
        <div className={cx("frame")}>
          <div
            className={cx("content")}
            onClick={() => {
              window.open(
                "https://store.steampowered.com/app/1515210/The_Past_Within/?l=koreana",
              );
              window.open("https://www.ea.com/ko-kr/games/it-takes-two");
            }}
          >
            프레임을 넘기
          </div>
        </div>
      </div>
      <div
        className={cx("andNext")}
        onClick={() => {
          location.href =
            "https://www.notion.so/Chapter-1-cdd2d6e13081475e8bbf703a48f90e0c#c56c15af37894f3e93347a17974c8468";
        }}
      >
        다음 챕터로
      </div>
    </div>
  );
};

export default Index;
