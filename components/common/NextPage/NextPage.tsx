import classNames from "classnames/bind";
import styles from "./NextPage.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";

const cx = classNames.bind(styles);

interface Props {
  chapter: number;
  section: number;
  destination: string;
  name?: string;
  color?: string;
}

const NextPage = ({ chapter, section, destination, name, color }: Props) => {
  const router = useRouter();
  return (
    <button
      className={cx("NextPage")}
      onClick={() => {
        router.push(`/Chapter${chapter}/Section${section}/${destination}`);
      }}
      style={{ backgroundColor: color ? color : "gray" }}
    >
      {name ? name : "다음"}
      <Image src="/static/icon/arrow.svg" alt="arrow" width={20} height={20} />
    </button>
  );
};

export default NextPage;
