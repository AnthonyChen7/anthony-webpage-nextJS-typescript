// This is the Link API
// will prefetch page and navigation will happen without page refresh
// if use a tag, it will request server for next page and then refresh page
import Link from 'next/link';
import Head from "next/head";
const Index = () => (
  <>
  <Head>
    <title>Anthony WebPage</title>
    <link
      rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
    />
  </Head>
<div>
  Hi I'm Anthony Chen. Welcome to my webpage.
</div>
</>
);
// Make sure your React Component is the default export.
export default Index;