import Link from 'next/link';
import Head from 'next/head';

export default function Index() {
  return (
    <>
      <Head>
        <title>Next Title</title>
        <meta name='keywords' content='next,js,next react' />
        <meta name='description' content='tryying out' />
        <meta charSet='utf-8' content='tryying out' />
      </Head>
      <h1>Hello Next JS</h1>
      <p>
        <Link href={'/about'}>About</Link>
      </p>
      <p>
        <Link href='/posts'>Posts</Link>
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    </>
  );
}
