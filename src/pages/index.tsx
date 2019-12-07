// This is the Link API
// will prefetch page and navigation will happen without page refresh
// if use a tag, it will request server for next page and then refresh page
import * as React from 'react';
import Link from 'next/link';
import Head from "next/head";
import Router from 'next/router';
import { Menu, Segment, MenuItem } from 'semantic-ui-react';
import {PageName, PageInfos, PageNameInfo} from 'src/constants/page-names';

// https://medium.com/swlh/typing-next-js-components-using-typescript-2f1d0dc30c4c
// https://fettblog.eu/typescript-react/hooks/#usestate
// https://stackoverflow.com/questions/58173809/next-js-redirect-from-to-another-page
const Index = () => {
  const [selectedPage, setSelectedPage] = React.useState<PageName>(PageName.ABOUT);
  const menuItems = Array.from(PageInfos.keys()).map(pageName => 
  <MenuItem 
    name={ (PageInfos.get(pageName) as PageNameInfo).label}
    active={pageName === selectedPage}
    onClick={() => {setSelectedPage(pageName); Router.push(`/${(PageInfos.get(pageName) as PageNameInfo).fileName}`);}}>
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