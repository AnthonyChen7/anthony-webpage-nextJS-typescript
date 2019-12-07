// This is the Link API
// will prefetch page and navigation will happen without page refresh
// if use a tag, it will request server for next page and then refresh page
import * as React from 'react';
import Link from 'next/link';
import Head from "next/head";
import { Menu, Segment, MenuItem } from 'semantic-ui-react';
import {PageName,PageLabels} from 'src/constants/page-names';

// https://medium.com/swlh/typing-next-js-components-using-typescript-2f1d0dc30c4c
const Index = () => {
  const [selectedPage, setSelectedPage] = React.useState<PageName>(PageName.ABOUT);
  const menuItems = Array.from(PageLabels.keys()).map(pageName => 
  <MenuItem 
    name={PageLabels.get(pageName)}
    active={pageName === selectedPage}
    onClick={() => setSelectedPage(pageName)}>
    {PageLabels.get(pageName)}
  </MenuItem>);
  return (
  
    <>
    <Head>
      <title>Anthony WebPage</title>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
      />
    </Head>
    <Menu>
      {menuItems}
    </Menu>
    </>
  );
};
// Make sure your React Component is the default export.
export default Index;