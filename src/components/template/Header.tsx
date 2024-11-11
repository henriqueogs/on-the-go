"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "./Logo";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const pages = ["Pesquisas", "Céditos", "Campanhas", "Equipe", "Configurações"];
const settings = ["Logout"];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "var(--foreground)",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          borderBottom: "1px solid var(--gray_500)",
        }}
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Logo width={36} height={36} />
          </Box>
          <Box
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <Logo width={36} height={36} />
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: "var(--font-public-sans)",
                      fontSize: "var(--font-size-xs)",
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "var(--text_gray_secundary)",
                  display: "block",
                  margin: "0 1rem",
                  fontSize: "var(--font-size-xs)",
                  fontFamily: "var(--font-public-sans)",
                  "&:hover": {
                    color: "var(--white)",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                margin: "0rem 2rem",
                border: "1px solid",
                padding: "0.3rem 0.8rem",
                borderRadius: "0.33rem",
                borderColor: "var(--gray_500)",
              }}
            >
              <Logo isBlack width={34} height={34} />
              <Typography
                variant="h6"
                sx={{
                  display: { xs: "none", md: "block" },
                  color: "var(--white)",
                  fontWeight: 500,
                  fontFamily: "var(--font-public-sans)",
                  marginLeft: "1rem",
                  fontSize: "var(--font-size-sm)",
                }}
              >
                ACME Corporation
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                justifyContent: "center",
                marginRight: "1rem",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  display: { xs: "none", md: "block" },
                  color: "var(--white)",
                  fontWeight: 500,
                  fontFamily: "var(--font-public-sans)",
                  fontSize: "var(--font-size-sm)",
                }}
              >
                Adriano Lima
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  display: { xs: "none", md: "block" },
                  color: "var(--text_gray_secundary)",
                  fontFamily: "var(--font-public-sans)",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: 400,
                }}
              >
                adriano.lima@acmecorp.com
              </Typography>
            </Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MoreVertIcon
                  sx={{ color: "var(--white)", width: "2rem", height: "2rem" }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: "var(--font-public-sans)",
                    }}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
