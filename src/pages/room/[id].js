import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Layout from "../../components/Layout/Layout.js";
import { useEffect } from "react";
import { useRouter } from "next/router.js";
import ReactPlayer from "react-player";
import Player from "../../components/Player/Player.js";

export default function Room() {
  const navigate = useRouter();

  useEffect(() => {
    console.log(navigate);
  }, [navigate]);

  return (
    <>
      <Head>
        <title>Syncro Watch</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <h2>Room №{navigate.query.id}</h2>
          <Player />
        </main>
      </Layout>
    </>
  );
}
