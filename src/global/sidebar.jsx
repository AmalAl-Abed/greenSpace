import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme, Link } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../theme";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";



const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const Item = ({ title, to, icon, selected, setSelected, name }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    return (
      <>
        {/* <SubMenu
          title={title}
          active={selected === name}
          style={{
            color: colors.secondary[900],
          }}
          onClick={() => setSelected(name)}
          icon={icon}
        >
          <Link href="/faq" underline="hover">
            {"hi"}
          </Link>
        </SubMenu> */}
        <MenuItem
          active={selected === title}
          style={{
            color: colors.secondary[500],
          }}
          onClick={() => setSelected(title)}
          icon={icon}
        >
          <Typography display={isCollapsed ? "none" :"block"}>{title}</Typography>
          <Link to={to} />
        </MenuItem>
        
      </>
    );
  };
  
  return (
    <>
      <Box 
        sx={{
          "& .pro-menu-item": {
            color: `${colors.secondary[900]} !important`,
          },
          "& .pro-sidebar-inner": {
            background: `${colors.grey[100]} !important`,
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 5px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "& .pro-menu-item.active": {
            color: "#309ED9 !important",
            backgroundColor: "#45a84514 ",

          },
          display: { xs: "none", md: "block" },
          boxShadow:" 0px 3px 20px #00000029",
          background: `${colors.grey[100]}`,
          height: "inherit",
        }}
      >
        <ProSidebar collapsed={isCollapsed}>
          <Menu iconShape="square">
            {/* LOGO AND MENU ICON */}
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "0px 0 25px 0",
                color: colors.grey[900],
                lineHeight: "5px",
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <img
                      src="assets/logo.png"
                      alt="logo"
                      width="40"
                      height="43"
                    />
                    <Box marginLeft={0.3} color={colors.grey[900]}>
                      <Typography
                        variant="h4"
                        fontWeight={500}
                        sx={{ wordSpacing: "-2px" }}
                      >
                        Green Touch
                      </Typography>
                      <Typography variant="xxsmall">Technologies</Typography>
                    </Box>
                  </Box>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            <Box>
              <Item
                title="Dashboard"
                href="/"
                name="/"
                icon={<DashboardOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="xsmall"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Entries
              </Typography>
              <Item
                title="Journal Entries"
                to="/team"
                icon={<AutoStoriesOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Vouchers"
                to="/contacts"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
       
              <Item
                title="Invoices"
                to="/invoices"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="xsmall"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 25px" ,}}
              >
                COA
              </Typography>
              <Item
                title="Charts Of Accounts"
                to="/form"
                icon={<AccountTreeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant="xsmall"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Reports
              </Typography>
              <Item
                title="Balance Sheet"
                to="/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Profit & Loss Statement"
                to="/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </ProSidebar>
      </Box>
    </>
  );
};
export default Sidebar;
