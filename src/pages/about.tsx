import { Header, HeaderProps } from "src/components/Header";
import { PageInfos, PageName } from "src/constants/page-names";
import Router from 'next/router';
import { NextPageContext, NextPage } from 'next';

interface AboutProps {
  headerProps: HeaderProps;
}
// https://stackoverflow.com/questions/49929268/using-getinitialprops-in-next-js-with-typescript
const About : NextPage<AboutProps> = (props) => {
  console.log(props);
  return (
    <>
    <Header
      labels={Array.from(PageInfos.keys())}
      labelClicked={(label) => Router.push(`/${PageInfos.get(label as PageName)}`)}/>
    <div>
      <p>This is the about page</p>
    </div>
    </>
  );
}

About.getInitialProps = async (context: NextPageContext) => {
  console.log(context);

  return { headerProps: {
    labels: Array.from(PageInfos.keys()),
    selectedLabel: PageName.About as string,
    labelClicked: (selectedPage: string) => Router.push(`/${selectedPage}`)
  } } as AboutProps;
}

export default About;
