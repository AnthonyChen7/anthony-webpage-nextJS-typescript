import { NextPageContext } from "next";
import { QuoteInfo } from "src/models/quote-info";
import Head from "next/head";
import { Header } from "./header";
import { PageInfos, PageName } from "src/models/page-names";
import Router  from "next/router";
import { useState, useEffect } from "react";
import { QuoteBanner } from "./quote-banner";

// https://medium.com/@martin_hotell/react-children-composition-patterns-with-typescript-56dfc8923c64


export interface LayoutProps {

}

const Layout: React.SFC<LayoutProps> = (props) => {
  const [quoteInfo, setQuoteInfo] = useState<QuoteInfo | undefined>(undefined);
  useEffect(() => {
    fetch('http://quotes.rest/qod.json')
    .then(res => res.json())
    .then(json => setQuoteInfo(parseQuoteJSON(json)))
  });
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