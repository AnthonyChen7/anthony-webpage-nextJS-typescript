import { Header } from "src/components/header";
import { PageInfos, PageName } from "src/models/page-names";
import Router from "next/router";
export default function Badminton() {
  return (
    <>
    <Header
      labels={Array.from(PageInfos.keys())}
      selectedLabel={PageName.Badminton as string}
      labelClicked={(label) => Router.push(`/${PageInfos.get(label as PageName)}`)}/>
    <div>This is the badminton page</div>
    </>
  );
}