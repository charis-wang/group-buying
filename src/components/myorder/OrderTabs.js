import { React, useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
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
  const [value, setValue] = useState(0);
  const { username, login } = useSelector((state) => state.account);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (login === false) window.location.href = "/login?err=loginRequired";

    props.getOrders(username);
  }, [username, login]);

  return (
    <Box sx={{ width: "90%", backgroundColor: "background.paper" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
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
