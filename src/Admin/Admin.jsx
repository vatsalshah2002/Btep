import { useTheme } from "@emotion/react";
import { Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import { ListItemIcon, Toolbar, useMediaQuery } from "@mui/material";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Route, Routes, useNavigate } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import CreateProductForm from "./components/createProduct/CreateProductForm";
import UpdateProductForm from "./components/UpdateProduct/UpdateProduct";
import ProductsTable from "./components/Products/ProductsTable";
import OrdersTable from "./components/Orders/OrdersTable";
import Customers from "./components/customers/customers";
import Dashboard from "./components/Dashboard";
import AdminNavbar from "./Navigation/AdminNavbar";
import "./AdminPannel.css";
import { customTheme } from "./Theme/customTheme";
import DemoAdmin from "./DemoAdmin";

const drawerWidth = 240;

const menu = [
    { name: "Dashboard", path: "/admin" },
    { name: "Products", path: "/admin/products" },
    { name: "Customers", path: "/admin/customers" },
    { name: "Orders", path: "/admin/orders" },
    { name: "Total Earnings", path: "/admin" },
    { name: "Monthly Overview", path: "/admin" },
    { name: "Add Product", path: "/admin/product/create" },
];


const Admin = () => {

    const theme = useTheme();
    const navigate = useNavigate();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = React.useState(false);

    const drawer = (
        <Box
          sx={{
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {isLargeScreen && <Toolbar />}
          <List>
            {menu.map((item, index) => (
              <ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
    
          <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
            <Divider />
            {["Account", "Request"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    
      const handleSideBarViewInMobile = () => {
        setSideBarVisible(true);
      };
    
      const handleCloseSideBar = () => {
        setSideBarVisible(false);
      };
    
      const drawerVariant = isLargeScreen ? "permanent" : "temporary";
    
      return (
        <ThemeProvider theme={customTheme}>
          <Box sx={{ display: `${isLargeScreen ? "flex" : "block"}` }}>
            <CssBaseline />
            <AdminNavbar handleSideBarViewInMobile={handleSideBarViewInMobile} />
    
            <Drawer
              variant={drawerVariant}
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                  width: drawerWidth,
                  boxSizing: "border-box",
                  ...(drawerVariant === "temporary" && {
                    top: 0,
                    [`& .MuiPaper-root.MuiDrawer-paperAnchorTop.MuiDrawer-paperTemporary`]:
                      {
                        position: "fixed",
                        left: 0,
                        right: 0,
                        height: "100%",
                        zIndex: (theme) => theme.zIndex.drawer + 2,
                      },
                  }),
                },
              }}
              open={isLargeScreen || sideBarVisible}
              onClose={handleCloseSideBar}
            >
              {drawer}
            </Drawer>
            <Box className="adminContainer" component="main" sx={{ flexGrow: 1 }}>
              <Toolbar />
              <Routes>
                <Route path="/" element={ <Dashboard />}></Route>
                <Route path="/product/create" element={<CreateProductForm/>}></Route>
                <Route path="/product/update/:productId" element={<UpdateProductForm/>}></Route>
                <Route path="/products" element={<ProductsTable/>}></Route>
                <Route path="/orders" element={<OrdersTable/>}></Route>
                <Route path="/customers" element={<Customers/>}></Route>
                <Route path="/demo" element={<DemoAdmin />}></Route>
              </Routes>
             
            </Box>
          </Box>
        </ThemeProvider>
      );
    }
    

export default Admin;