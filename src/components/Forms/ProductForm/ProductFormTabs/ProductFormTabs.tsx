import { type ReactElement, type SyntheticEvent } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";

interface IProps {
  onTabChange: (e: SyntheticEvent, value: string) => void;
}

const ProductFormTabs = ({ onTabChange }: IProps): ReactElement => (
  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
    <TabList onChange={onTabChange} aria-label='lab API tabs example'>
      <Tab label='Basic information' value='1' />
      <Tab label='Descriptions' value='2' />
      <Tab label='Files' value='3' />
    </TabList>
  </Box>
);

export default ProductFormTabs;
