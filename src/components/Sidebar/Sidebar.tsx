import { Drawer, List, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { ReactElement } from "react";

import NavItem from "./NavItem/NavItem";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 280,
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: {
    width: 280,
    boxSizing: "border-box",
    background: "#111827",
  },
}));

const UserMenus: Array<{ id: number; title: string; href: string }> = [
  {
    id: 0,
    title: "Dashboard",
    href: "/panel",
  },
  {
    id: 1,
    title: "Products",
    href: "/panel/products",
  },
  {
    id: 2,
    title: "Labels",
    href: "/panel/labels",
  },
  {
    id: 3,
    title: "Orders",
    href: "/panel/orders",
  },
  {
    id: 4,
    title: "Profile",
    href: "/panel/profile",
  },
];

const Sidebar = (): ReactElement => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledDrawer variant={isMobile ? "temporary" : "permanent"}>
      <List>
        {UserMenus.map((item) => (
          <NavItem key={item.id} title={item.title} href={item.href} />
        ))}
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;
