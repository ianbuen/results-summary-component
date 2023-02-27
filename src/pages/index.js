import ResultSummary from '@/components/ResultSummary'
import Head from 'next/head'
import json from "@/data.json"

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Results summary component</title>
        <meta name="description" content="Frontend Mentor challenge - results summary component made with NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>

      <ResultSummary data={data} />
    </>
  )
}

export const getStaticProps = async () => {
    return { props: { data : json} };
};
