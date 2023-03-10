import Head from "next/head";
import styles from "./Home.module.scss";
import { NextPage } from "next";
import classNames from "classnames/bind";
import ChapterList from "../components/home/ChapterList/ChapterList";

const cx = classNames.bind(styles);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={cx("container")}>
        <div className={cx("logo")}>X</div>
        {/*
        <div className={cx("info")}>
          <p>인터랙티브 스토리텔링을</p>
          <p>ready, Xction</p>
        </div>
        <ChapterList />
       */}
      </main>
    </>
  );
};

export default Home;
