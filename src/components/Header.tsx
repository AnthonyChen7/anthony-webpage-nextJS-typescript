import * as React from 'react';
import Router from 'next/router';
import { Menu, MenuItem } from 'semantic-ui-react';
import {PageName, PageInfos, PageNameInfo} from 'src/constants/page-names';
import Head from "next/head";
// TODO make default page a prop
// make it emit selected page as prop
const Header = () => {
  const [selectedPage, setSelectedPage] = React.useState<PageName>(PageName.ABOUT);
  const menuItems = Array.from(PageInfos.keys()).map(pageName => 
  <MenuItem
    key={pageName} 
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

export default Header;
