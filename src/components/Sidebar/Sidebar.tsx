import {
  Dashboard,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LibraryMusic,
  Payments,
  Person,
  Star,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  type DrawerProps,
  IconButton,
  List,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { type ReactElement, useState } from "react";

import NavItem from "./NavItem/NavItem";
import SidebarUser from "./SidebarUser/SidebarUser";

interface IStyledDrawer extends DrawerProps {
  small?: boolean;
}

const StyledDrawer = styled(Drawer)<IStyledDrawer>(({ theme, small }) => ({
  width: 280,
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: {
    width: 280,
    boxSizing: "border-box",
    background: "#111827",
  },
  ...(small && {
    width: "auto",
    [`& .MuiDrawer-paper`]: {
      width: "auto",

      boxSizing: "border-box",
      background: "#111827",
    },
  }),
}));

const StyledWrapper = styled(Box)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const UserMenus: Array<{
  id: number;
  title: string;
  href: string;
  icon: ReactElement;
}> = [
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
  const [hideTitles, setHideTitles] = useState<boolean>(false);

  const handleToggleTitlesDisplay = (): void => {
    setHideTitles(!hideTitles);
  };

  return (
    <StyledDrawer
      variant={isMobile ? "temporary" : "permanent"}
      open={isOpen}
      onClose={onClose}
      small={!hideTitles}>
      <StyledWrapper>
        {hideTitles && <SidebarUser />}
        <Divider
          sx={(theme) => ({
            mb: 2,
            borderColor: theme.palette.neutral[700],
          })}
        />
        <List sx={{ flex: 1 }}>
          {UserMenus.map((item) => (
            <NavItem
              key={item.id}
              title={item.title}
              href={item.href}
              icon={item.icon}
              hideTitles={hideTitles}
            />
          ))}
        </List>
        <Box display='flex' justifyContent='center'>
          <IconButton
            focusRipple={false}
            onClick={handleToggleTitlesDisplay}
            sx={{
              paddingY: "20px",
              "&:hover": {
                background: "transparent",
              },
            }}>
            {!hideTitles && (
              <KeyboardArrowRight color='secondary' fontSize='large' />
            )}
            {hideTitles && (
              <KeyboardArrowLeft color='secondary' fontSize='large' />
            )}
          </IconButton>
        </Box>
      </StyledWrapper>
    </StyledDrawer>
  );
};

export default Sidebar;
