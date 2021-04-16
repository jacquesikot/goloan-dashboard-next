import Head from 'next/head';
import { Dashboard } from '../src/screens';

export default function Home() {
  return (
    <>
      <Head>
        <title>Goloan Dashboard</title>
        <link rel="icon" href="/goloanFavicon.svg" />
      </Head>
      <Dashboard />
    </>
  );
}
