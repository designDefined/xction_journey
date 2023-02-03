import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";

const cx = classNames.bind(styles);

interface Props {}

const Index = ({}: Props) => {
  const router = useRouter();
  return (
    <div className={cx("container")}>
      <div className={cx("wrapper")}>
        <h1>최고의 인터랙티브 스토리를</h1>
        <p>
          우리는 모두 경험해본 적이 있습니다. 바로 어린 시절에 말입니다. 그 시절
          우리가 만난 책, 영화, 게임의 스토리는 상상 속에서 실감나는 인터랙티브
          스토리가 되어 끊임없이 재탄생하고, 변주되고, 또 체험되었죠. 자유도의
          제약도 없고, 나를 방해하는 것도 없었습니다.
        </p>
      </div>
      <div className={cx("wrapper")}>
        <h1>마법의 단계</h1>
        <p>
          오늘날의 인터랙티브 스토리텔링은 그러한 유년시절의 마법을 재현하려는
          것 같습니다. 인공지능으로 스토리를 동적으로 생성하고, 바라보는 곳의
          이미지를 실시간으로 렌더링하며, 개인 정보를 이용하여 관람객 맞춤형
          컨텐츠를 생성하기도 하죠.
        </p>

        <div className={cx("examples")}>
          <div
            onClick={() => {
              window.open(
                "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002824899",
              );
            }}
          >
            AI 메커니즘 기반 인터랙티브 스토리텔링 사례 연구
          </div>
          <div
            onClick={() => {
              window.open("https://openai.com/dall-e-2/");
            }}
          >
            이미지를 만드는 인공지능, Dall.E
          </div>
        </div>
      </div>
      <p>
        그러나 이러한 접근은 갈 길이 멉니다. 퀄리티도 조악하고, 개발에 너무 많은
        비용이 소요됩니다.
      </p>
      <div className={cx("examples")}>
        <div
          onClick={() => {
            router.push("./magic");
          }}
        >
          우리는 그 대신...
        </div>
      </div>
    </div>
  );
};

export default Index;
