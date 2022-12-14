import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import startOfToday from "date-fns/startOfToday";
import formatDistanceStrict from "date-fns/formatDistanceStrict";
import Balance from "./balance";
// import Background from "./background";
import List from "./list";

// import BasicEmbed from "./chart";
// import dynamic from "next/dynamic";

// const BasicEmbed = dynamic(
//   () => {
//     return import("./chart");
//   },
//   { ssr: false }
// );

export default function Home({ sheetdata }) {
  var MasDate = startOfToday();

  var month = MasDate.getMonth();

  var calc = formatDistanceStrict(
    new Date(2022, month, MasDate.getDate()),
    new Date(2022, 7, 23),
    { unit: "day" }
  );

  // console.log(calc);

  var str = calc;
  var days = str.match(/(\d+)/);
  var numDays = days[0];
  var diffDays = 100 - numDays;

  const [message, setMessage] = useState("");
  var total = sheetdata[3];

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
      {/* <Background /> */}
      <div className={styles.container}>
        <Head>
          <title>Zaf depreso</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/chef-tigre2.ico" />
          {/* <script src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></script> */}
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            <b>{numDays} days </b>since Zafira's last{" "}
            <Link
              target="_blank"
              href="https://www.youtube.com/watch?v=E61gXw7aLJk&ab_channel=SendenDahaG%C3%BCzel"
            >
              Depresso
            </Link>
          </h1>

          <p className={styles.description}>
            {message}
            <p> latest depresso was on 23/8/2022</p>
          </p>

          <div className={styles.grid}>
            <a
              target="_blank"
              href="https://twitter.com/acipooh"
              className={styles.card}
            >
              <h2>Hasif's Twitter &rarr;</h2>
              <p>Follow me cuz im funneh and i always shit post zaf </p>
            </a>
            <a
              href="https://www.youtube.com/watch?v=E61gXw7aLJk&ab_channel=SendenDahaG%C3%BCzel"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <h2>Click me!! &rarr;</h2>
              <p>To check out why she was soo depresed 🙄</p>
            </a>

            <a
              target="_blank"
              href="https://twitter.com/zafirazan"
              className={styles.card}
            >
              <h2>Her Twitter &rarr;</h2>
              <p>All she do is talk about politics and Vixx.</p>
              <p>Like siapa je dengar band tu?</p>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/zafirazan"
              className={styles.card}
            >
              <h2>Her insta &rarr;</h2>
              <p>
                otw insta famous boleh buat paid review pastu dapat duit untuk
                jadi sugar mummy {":>>>>"}
              </p>
            </a>
          </div>
        </main>

        {/* list of things */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold">
            List of things that made her depressed:
          </h1>
          <List />
        </div>

        <Balance total={total} />
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
export async function getServerSideProps() {
  const req = await fetch("http://localhost:3000/api/sheet");
  const res = await req.json();

  return {
    props: {
      sheetdata: res.data,
    },
  };
}
