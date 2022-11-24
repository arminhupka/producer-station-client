import { Dashboard, LibraryMusic, Payments, Person, Star } from "@mui/icons-material";
import { Divider, Drawer, List, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { ReactElement } from "react";

import NavItem from "./NavItem/NavItem";
import SidebarUser from "./SidebarUser/SidebarUser";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 280,
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: {
    width: 280,
    boxSizing: "border-box",
    background: "#111827",
  },
}));

const UserMenus: Array<{ id: number; title: string; href: string; icon: ReactElement }> = [
  {
    id: 0,
    title: "Dashboard",
    href: "/panel",
    icon: <Dashboard />,
  },
  {
    id: 1,
    title: "Products",
    href: "/panel/products",
    icon: <LibraryMusic />,
  },
  {
    id: 2,
    title: "Labels",
    href: "/panel/labels",
    icon: <Star />,
  },
  {
    id: 3,
    title: "Orders",
    href: "/panel/orders",
    icon: <Payments />,
  },
  {
    id: 4,
    title: "Profile",
    href: "/panel/profile",
    icon: <Person />,
  },
];

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: IProps): ReactElement => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledDrawer variant={isMobile ? "temporary" : "permanent"} open={isOpen} onClose={onClose}>
      <SidebarUser />
      <Divider
        sx={(theme) => ({
          mb: 2,
          borderColor: theme.palette.neutral[700],
        })}
      />
      <List>
        {UserMenus.map((item) => (
          <NavItem key={item.id} title={item.title} href={item.href} icon={item.icon} />
        ))}
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;
