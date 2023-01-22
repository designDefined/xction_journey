import classNames from "classnames/bind";
import styles from "./Component.module.scss";

const cx = classNames.bind(styles);

interface Props {}

const Component = ({}: Props) => {
  return <div className={cx("")}></div>;
};

export default Component;
