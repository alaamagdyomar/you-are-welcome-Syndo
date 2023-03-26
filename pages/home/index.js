import React,{useState} from 'react'
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Layout from '../../components/layout';
import LightMode from '../../components/lightMode';
import GetStarted from '../../components/GetStarted';
import Rounds from '../../components/Rounds';
import TalkCard from '../../components/Card';
import Footer from '../../components/Footer';
import styles from './index.module.scss'

export default function Home() {
  const router = useRouter();
  const [isDarkMode , setDarkMode ] = useState(false);
  
  const handleToggle = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <Layout>
      <div className={styles.container}>
      <Head>
        <title>Syndo | Home</title>
      </Head>
        <LightMode isDarkMode={isDarkMode} handleToggle={handleToggle}/>
        <Header isDarkMode={isDarkMode} />
        <GetStarted isDarkMode={isDarkMode}/>
        <Rounds isDarkMode={isDarkMode}/>
        <TalkCard isDarkMode={isDarkMode}/>
        <Footer isDarkMode={isDarkMode}/>
      <footer></footer>
    </div>
    </Layout>

  );
}
