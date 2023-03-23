import fs from 'fs';
import path from 'path';
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from '../../components/layout/index'

import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from "next-i18next";
import useLocalStorage from '../../utils/useLocalStorage';



export async function getServerSideProps({locale, params, req, res}) {
    // load data from file
    const filePath = path.join(process.cwd(), 'data', 'test.json');
    let final_data;
    await fs.readFile(filePath, function (err, data) {
    final_data = JSON.parse(data);
    });

    return {
    props: {
        ...(await serverSideTranslations(locale, ["common", "test"])),
        // Will be passed to the page component as props
        products: final_data,
        userData: {'name': 'ahmed elbanna'},
    },
    };
}

export default function Test(props) {
  //const { pathname, asPath, query, locale } = useRouter()
  const router = useRouter()
  
  //translations from common.json
  const {t} = useTranslation('common');
  //translations from test.json
  const {t: testT} = useTranslation('test');

  let [value, setValue] = useLocalStorage("name", "")
  const change_lang = (nextLocale, router) => {
    
    router.push({ pathname: router.pathname, query: router.query }, router.asPath, { locale: nextLocale });
  }
  return (
    <Layout>
      <Head>
        <title>Paymob|Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {router.locale == "en" ?
        <p onClick={()=>{ change_lang("ar", router) }}>{testT("LANG")}</p>
      :
        <p onClick={()=>{ change_lang("en", router) }}>{testT("LANG")}</p>
      }
      <h1>{testT("HELLO_WORLD")} {process.env.customKey}</h1>
      <h2>{t("test")}</h2>
      <h1 className="title">
          Go To <Link href="/">Home</Link>
      </h1>
      <input value={value} onChange={(e)=>{setValue(e.target.value)}} />
      <h2>{props.userData.name}</h2>
    </Layout>
  )
}
