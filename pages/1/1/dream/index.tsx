import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";

const cx = classNames.bind(styles);

interface Props {}

const Index = ({}: Props) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <div className={cx("container")}>
      <div
        className={cx("already")}
        onClick={() => {
          setOpen(!open);
        }}
      >
        좋은 인터랙티브 무비는 이미 존재합니다
      </div>
      <div className={cx("examples", { open })}>
        <div className={cx("e1")} />
        <div className={cx("e2")} />
        <div className={cx("e3")} />
      </div>
      <div
        className={cx("andNext", { open })}
        onClick={() => {
          router.push("./spell");
        }}
      >
        그리고 우리는...
      </div>
    </div>
  );
};

export default Index;
