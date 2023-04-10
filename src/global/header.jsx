import {
  Box,
  Button,
  Typography,
  useTheme,
  Breadcrumbs,
  Link,
  Stack,
  MenuItem,
  Menu,
  ListItemIcon,
} from "@mui/material";
import { tokens } from "../theme";
import { useState } from "react";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

// const mainButton = styled('Button')({
//   color: 'darkslategray',
//   backgroundColor: 'aliceblue',
//   padding: 8,
//   borderRadius: 4,
// });

const Header = ({
  mainTitle,
  subTitle1,
  subTitle2,
  btnTxt1,
  btnTxt2,
  btnIcon1,
  btnIcon2,
  display,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      {subTitle1}
    </Link>,
    <Typography key="2" color={colors.secondary[500]}>
      {subTitle2}
    </Typography>,
  ];

  return (
    <>
      <Box
        marginBottom={3}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography
            variant="h3"
            color={colors.secondary[900]}
            sx={{ fontWeight: 500 }}
          >
            {mainTitle}
          </Typography>
          {/* <Typography variant="xsmall" color={colors.secondary[500]}>
            {subTitle}
          </Typography> */}

          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Box>
        <Stack direction="row" spacing={1}>
          <Button variant="contained" startIcon={btnIcon1}>
            {btnTxt1}
          </Button>
          <Button
            variant="contained"
            startIcon={btnIcon2}
            onClick={handleClick}
          >
            {btnTxt2}
          </Button>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1,
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <LocalPrintshopIcon fontSize="medium" color="secondary" />
              </ListItemIcon>
              Print
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <FontAwesomeIcon
                  icon={faFilePdf}
                  fontSize="medium"
                  className="FAicons"
                  color={colors.secondary[300]}
                />
              </ListItemIcon>
              Export As PDF
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <FontAwesomeIcon
                  icon={faFileExcel}
                  fontSize="medium"
                  className="FAicons"
                  color={colors.secondary[300]}
                />
              </ListItemIcon>
              Export As Excel
            </MenuItem>
          </Menu>
        </Stack>
      </Box>
    </>
  );
};

export default Header;
