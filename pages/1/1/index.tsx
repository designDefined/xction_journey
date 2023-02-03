import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

interface Props {}

const BeforeWeStart = ({}: Props) => {
  const router = useRouter();
  return (
    <div className={cx("")}>
      <div></div>
    </div>
  );
};

export default BeforeWeStart;
