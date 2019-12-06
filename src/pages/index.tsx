// This is the Link API
// will prefetch page and navigation will happen without page refresh
// if use a tag, it will request server for next page and then refresh page
import Link from 'next/link';
import Head from "next/head";
import { Menu, Segment } from 'semantic-ui-react';
import {PageNames} from 'src/constants/page-names';

// https://medium.com/swlh/typing-next-js-components-using-typescript-2f1d0dc30c4c
const Index = () => (
  <>
  <Head>
    <title>Anthony WebPage</title>
    <link
      rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
    />
  </Head>
  <Menu>
    <Menu.Item
      name='editorials'
    >
      {PageNames.ABOUT}
    </Menu.Item>

    <Menu.Item
      name='reviews'
    >
      {PageNames.BADMINTON}
    </Menu.Item>
  </Menu>
</>
);
// Make sure your React Component is the default export.
export default Index;