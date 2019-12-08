import { Header, HeaderProps } from "src/components/header";
import { PageInfos, PageName } from "src/models/page-names";
import Router from 'next/router';
import { NextPageContext, NextPage } from 'next';

// https://stackoverflow.com/questions/49929268/using-getinitialprops-in-next-js-with-typescript
const About = () => {
  return (
    <>
    <Header
      labels={Array.from(PageInfos.keys())}
      selectedLabel={PageName.About as string}
      labelClicked={(label) => Router.push(`/${PageInfos.get(label as PageName)}`)}/>
    <div>
      <p>This is the about page</p>
    </div>
    </>
  );
}

export default About;
