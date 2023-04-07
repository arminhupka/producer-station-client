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
import { type ReactElement } from "react";

import NavItem from "./NavItem/NavItem";
import SidebarUser from "./SidebarUser/SidebarUser";
import { useAppDispatch, useAppSelector } from "../../store";
import { setMenuFull } from "../../features/appSlice";

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
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const dispatch = useAppDispatch();
  const isFullMenu = useAppSelector((state) => state.appReducer.isFullMenu);

  const handleToggleTitlesDisplay = (): void => {
    dispatch(setMenuFull(!isFullMenu));
  };

  return (
    <StyledDrawer
      variant={isMobile ? "temporary" : "permanent"}
      open={isOpen}
      onClose={onClose}
      small={!isFullMenu}>
      <StyledWrapper>
        {isFullMenu && <SidebarUser />}
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
              hideTitles={isFullMenu}
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
            {!isFullMenu && (
              <KeyboardArrowRight color='secondary' fontSize='large' />
            )}
            {isFullMenu && (
              <KeyboardArrowLeft color='secondary' fontSize='large' />
            )}
          </IconButton>
        </Box>
      </StyledWrapper>
    </StyledDrawer>
  );
};

export default Sidebar;
