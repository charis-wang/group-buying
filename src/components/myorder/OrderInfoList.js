import { Fragment, React } from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Chip,
  Divider,
} from "@mui/material";
import _ from "lodash";

import { getDatetimeString } from "../../utils/base";

const OrderInfoList = (props) => {
  const { orderIds } = useSelector((state) => state.myOrders);

  return (
    <Box sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
      <List>
        {orderIds
          .filter(
            (id) =>
              Object.values(id)[0].status === props.filtered ||
              props.filtered === "All"
          )
          .map((id) => (
            <Fragment key={Object.keys(id)[0]}>
              <ListItemButton href={`/order/${Object.keys(id)[0]}`}>
                <ListItem>
                  <ListItemText>
                    <Grid container justifyContent="space-around" spacing={0.8}>
                      <Grid item xs={12}></Grid>
                      <Grid item xs={4} sx={{ textAlign: "right" }}>
                        <Chip
                          label={Object.values(id)[0].status}
                          variant="outlined"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={7} sx={{ fontSize: "0.9rem" }}>
                        {Object.keys(id)[0]}
                      </Grid>
                      <Grid item xs={4} sx={{ textAlign: "right" }}>
                        deadline
                      </Grid>
                      <Grid item xs={7}>
                        {getDatetimeString(Object.values(id)[0].orderDeadline)}
                      </Grid>
                      <Grid item xs={4} sx={{ textAlign: "right" }}>
                        payment
                      </Grid>
                      <Grid item xs={7}>
                        {_.upperFirst(Object.values(id)[0].payment)}
                      </Grid>
                    </Grid>
                  </ListItemText>
                </ListItem>
              </ListItemButton>
              <Divider light />
            </Fragment>
          ))}
      </List>
    </Box>
  );
};

export default OrderInfoList;
