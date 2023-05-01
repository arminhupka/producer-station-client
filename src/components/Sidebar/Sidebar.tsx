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
import InviteCard from "../atoms/InviteCard/InviteCard";

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

interface IMenuItem {
  id: number;
  title: string;
  href: string;
  icon: ReactElement;
}

const UserMenus: IMenuItem[] = [
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

const AdminMenus: IMenuItem[] = [
  {
    id: 5,
    title: "Categories",
    href: "/panel/admin/categories",
    icon: <Dashboard />,
  },
  {
    id: 6,
    title: "Genres",
    href: "/panel/admin/genres",
    icon: <Dashboard />,
  },
  {
    id: 7,
    title: "Instruments",
    href: "/panel/admin/instruments",
    icon: <Dashboard />,
  },
  {
    id: 8,
    title: "Orders",
    href: "/panel/admin/orders",
    icon: <Dashboard />,
  },
  {
    id: 9,
    title: "Users",
    href: "/panel/admin/Users",
    icon: <Dashboard />,
  },
  {
    id: 10,
    title: "Banners",
    href: "/panel/admin/banners",
    icon: <Dashboard />,
  },
  {
    id: 11,
    title: "Products",
    href: "/panel/admin/products",
    icon: <Dashboard />,
  },
  {
    id: 12,
    title: "Labels",
    href: "/panel/admin/labels",
    icon: <Dashboard />,
  },
  {
    id: 13,
    title: "Files",
    href: "/panel/admin/files",
    icon: <Dashboard />,
  },
];

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: IProps): ReactElement => {
  const IsAdmin = useAppSelector(
    (state) => state.userReducer.user?.role === "ADMIN",
  );

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
        <List>
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
        {IsAdmin && (
          <>
            <Divider
              sx={(theme) => ({
                mb: 2,
                borderColor: theme.palette.neutral[700],
              })}
            />

            <List>
              {AdminMenus.map((item) => (
                <NavItem
                  key={item.id}
                  title={item.title}
                  href={item.href}
                  icon={item.icon}
                  hideTitles={isFullMenu}
                />
              ))}
            </List>
          </>
        )}

        {isFullMenu && <InviteCard />}
        <Box
          mt={isFullMenu ? 2 : "auto"}
          p={2}
          display='flex'
          justifyContent='center'>
          <IconButton
            focusRipple={false}
            onClick={handleToggleTitlesDisplay}
            sx={{
              width: "100%",
              padding: 2,
              borderRadius: 2,
              "&:hover": {
                background: "secondary.contrastText",
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
