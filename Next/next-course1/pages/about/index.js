import Router from 'next/router';
export default function About() {
  const clickHandler = () => {
    return Router.push('/posts');
  };
  return (
    <>
      <h1>About Page</h1>
      <button onClick={clickHandler}>Go back to home</button>
    </>
  );
}
