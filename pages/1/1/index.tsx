import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

interface Props {}

const TableOfContent = ({}: Props) => {
  const router = useRouter();
  return (
    <main className={cx("TableOfContent")}>
      <div className={cx("title")}> section 1: 프로젝트를 시작하며</div>
      <div className={cx("section", "s1")}>만나서 반갑습니다!</div>
      <div className={cx("section", "s2")}>왜 이 프로젝트를 시작했나요?</div>
      <div className={cx("content")}>
        창작, 그 중에서도 기획 단계에서 왜 협업이 필요할까요?
      </div>
      <div className={cx("content")}>
        보통 창작 분야에서의 협업은 아이디어를 가진 사람이 각 분야의 기술을 가진
        사람을 만나는 과정에서 일어납니다.
      </div>
      <div className={cx("content")}>
        그들은 잘 짜여진 기획안과 레퍼런스를 바탕으로 소통하며 하나의 작품을
        완성합니다.
      </div>
      <div className={cx("content")}>그러나 우리의 경우는 다릅니다.</div>

      <div
        className={cx("section", "s2")}
        onClick={() => {
          location.href =
            "https://www.notion.so/9dea94940deb4b0a958450ac0a412c8a";
        }}
      >
        레퍼런스가 없는 창작?
      </div>
    </main>
  );
};

export default TableOfContent;
