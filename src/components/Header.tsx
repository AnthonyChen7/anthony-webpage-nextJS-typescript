import * as React from 'react';
import { Menu, MenuItem } from 'semantic-ui-react';
import Head from "next/head";
export interface HeaderProps {
  labels: string[];
  selectedLabel?: string;
  labelClicked: (selectedPage: string) => void;
}
export const Header: React.SFC<HeaderProps>= (props: HeaderProps) => {
  const [selectedLabel, setSelectedLabel] = React.useState<string | undefined>(props.selectedLabel);
  const menuItems = !props.labels ? [] : props.labels.map(label => 
  <MenuItem
    key={label} 
    name={label}
    active={label === selectedLabel}
    onClick={() => { setSelectedLabel(label); props && props.labelClicked(label); } }
  >
  </MenuItem>);
  return (
    <>
    <Head>
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
