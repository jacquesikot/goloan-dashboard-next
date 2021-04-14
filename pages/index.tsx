import Head from 'next/head';
import { Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Goloan Dashboard</title>
        <link rel="icon" href="/goloanFavicon.svg" />
      </Head>
      <Link href="login">
        <Heading>Sign Up</Heading>
      </Link>
    </>
  );
}
