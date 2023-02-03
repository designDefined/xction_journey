import classNames from "classnames/bind";
import styles from "./TableOfContent.module.scss";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

interface Props {}

const TableOfContent = ({}: Props) => {
  const router = useRouter();
  return (
    <main className={cx("TableOfContent")}>
      <div className={cx("title")}>Chapter 1 목차</div>
      <div
        className={cx("section", "s1")}
        onClick={() => {
          router.push("./1/1");
        }}
      >
        section 1: 프로젝트를 시작하며
      </div>
      <div className={cx("content")}></div>
      <div className={cx("content")}>프로젝트를 시작한 이유</div>
      <div className={cx("content")}>맛보기: 마법과 마술</div>

      <div
        className={cx("section", "s2")}
        onClick={() => {
          router.push("./1/2");
        }}
      >
        section 2: 교차로
      </div>
      <div className={cx("content")}>좋은 스토리 / UX란?</div>
      <div className={cx("content")}>신기한 걸로는 충분하지 않지</div>
      <div
        className={cx("section", "s3")}
        onClick={() => {
          router.push("./1/3");
        }}
      >
        section 3: 같은 땅
      </div>
      <div className={cx("content")}>아키텍쳐와 의사 결정</div>
      <div className={cx("content")}>감정에서 로그라인으로</div>
    </main>
  );
};

export default TableOfContent;
