import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function OrderDateTimePicker(props) {
  const now = dayjs().format();
  const [value, setValue] = React.useState(now);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        type="datetime-local"
        renderInput={(props) => <TextField {...props} />}
        label="Order Deadline"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          props.onChange({
            target: {
              name: "orderDatetime",
              value: +newValue,
            },
          });
        }}
        minDate={now}
      />
    </LocalizationProvider>
  );
}
