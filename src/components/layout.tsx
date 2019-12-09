import { QuoteInfo } from "src/models/quote-info";
import Head from "next/head";
import { Header } from "./header";
import { PageInfos, PageName } from "src/models/page-names";
import Router  from "next/router";
import { useState, useEffect, ReactNode } from "react";
import { QuoteBanner } from "./quote-banner";

// https://medium.com/@martin_hotell/react-children-composition-patterns-with-typescript-56dfc8923c64


export interface LayoutProps {
  children: ReactNode;
}

const Layout: React.SFC<LayoutProps> = (props) => {
  const [quoteInfo, setQuoteInfo] = useState<QuoteInfo | undefined>(undefined);
  useEffect(() => {
    // https://stackoverflow.com/questions/56442582/react-hooks-cant-perform-a-react-state-update-on-an-unmounted-component
    let isCancelled = false;
    (async function() {
      const response = await fetch('http://quotes.rest/qod.json');
      const json = await response.json();
      setQuoteInfo(parseQuoteJSON(json));
    })();

    return function() {
      isCancelled = false;
    };

  }, []);
  return (
    <>
    <Head>
      <title>Anthony Web Page</title>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
      />
    </Head>
    <QuoteBanner
      headerMsg='Quote Of the Day'
      data={quoteInfo}/>
    <Header
      labels={Array.from(PageInfos.keys())}
      labelClicked={(label) => Router.push(`/${PageInfos.get(label as PageName)}`)}/>
    {props.children}
    </>
  );
};

function parseQuoteJSON(json: any): QuoteInfo {
  const jsonQuote = json.contents.quotes[0];
  return {
    quote: jsonQuote.quote,
    author: jsonQuote.author,
    source: jsonQuote.permalink
  };
}

export default Layout;