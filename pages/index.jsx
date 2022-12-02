import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import { useState, useEffect, useRef } from "react";
import startOfToday from "date-fns/startOfToday";
import formatDistanceStrict from "date-fns/formatDistanceStrict";

export default function Home() {
  const ref = useRef(null);
  // var viz = tableau.Viz(
  //   ref.current,
  //   "https://public.tableau.com/views/ZafTableau/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
  // );

  var MasDate = startOfToday();

  const [result, setResult] = useState(
    formatDistanceToNowStrict(new Date(2022, 7, 23), {
      unit: "day",
    })
  );

  var month = MasDate.getMonth();

  var calc = formatDistanceStrict(
    new Date(2022, month, MasDate.getDate()),
    new Date(2022, 7, 23),
    { unit: "day" }
  );

  console.log(calc);

  var str = calc;
  var days = str.match(/(\d+)/);
  var numDays = days[0];
  var diffDays = 100 - numDays;

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (numDays >= 100) {
      setMessage(
        "Congratulations zaf for not being depressed for " + numDays + " days"
      );
    } else {
      if (diffDays != 1) {
        setMessage(
          "hang in there lol, you have " +
            parseInt(diffDays) +
            " days left until you reach 100 days"
        );
      } else {
        setMessage(
          "hang in there lol, you have " +
            parseInt(diffDays) +
            " day left until you reach 100 days"
        );
      }
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#6EB869] to-[#61C5B4]">
      <div className={styles.container}>
        <Head>
          <title>Zaf depreso</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/chef-tigre2.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            <b>{numDays} days </b>since Zafira last{" "}
            <Link
              target="_blank"
              href="https://www.youtube.com/watch?v=E61gXw7aLJk&ab_channel=SendenDahaG%C3%BCzel"
            >
              Depresso
            </Link>
          </h1>

          <p className={styles.description}>
            {message}
            <p> latest depresso is on {} 23/8/2022</p>
          </p>

          <div className={styles.grid}>
            <a href="https://twitter.com/acipooh" className={styles.card}>
              <h2>Hasif's Twitter &rarr;</h2>
              <p>Follow me for shit posting zaf's existence</p>
            </a>

            <a
              target="_blank"
              href="https://twitter.com/zafirazan"
              className={styles.card}
            >
              <h2>Zaf's Twitter &rarr;</h2>
              <p>My loyal victim's twitter account</p>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/hacips/"
              className={styles.card}
            >
              <h2>My insta &rarr;</h2>
              <p>i shitpost her in my close friends</p>
            </a>

            <a
              href="https://www.linkedin.com/in/zafirazannajas/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <h2>Zaf's linkedin &rarr;</h2>
              <p>
                I'm not sure, maybe HR felt sorry for her and wanted to hire
                her.
              </p>
            </a>
          </div>
        </main>
        <div ref={ref}></div>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Link href={"posts/first-post"}>
                {" "}
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  width={72}
                  height={16}
                />
              </Link>
            </span>
          </a>
        </footer>
      </div>
    </div>
  );
}
