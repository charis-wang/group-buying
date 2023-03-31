import { React, useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Box, Tabs, Tab } from "@mui/material/";
import OrderInfoList from "./OrderInfoList";
import { getOrders } from "../../actions/account";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
};

const OrderTabs = (props) => {
  // const navigate = useNavigate();
  // const { isLoggedIn } = useLoaderData();
  // console.log("hi", isLoggedIn);
  const [value, setValue] = useState(0);
  const { username, login } = useSelector((state) => state.account);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    //if (isLoggedIn === false) navigate("/login?err=loginRequired"
    props.getOrders(username);
  }, [username, login]);

  return (
    <Box sx={{ maxWidth: { xs: 350, sm: 480 } }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs variant={"scrollable"} value={value} onChange={handleChange}>
          <Tab label="All" />
          <Tab label="Processing" />
          <Tab label="Completed" />
          <Tab label="Cancelled" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <OrderInfoList filtered={"All"} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OrderInfoList filtered={"Processing"} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OrderInfoList filtered={"Completed"} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <OrderInfoList filtered={"Cancelled"} />
      </TabPanel>
    </Box>
  );
};

export default connect(null, { getOrders })(OrderTabs);
