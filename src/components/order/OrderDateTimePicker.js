import { React, useState } from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function OrderDateTimePicker(props) {
  const now = dayjs().format();
  const [value, setValue] = useState(now);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        type="datetime-local"
        renderInput={(props) => (
          <TextField name="orderDeadline" sx={{ width: "15em" }} {...props} />
        )}
        label="Order Deadline"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          props.onChange({
            target: {
              name: "orderDeadline",
              value: +newValue,
            },
          });
        }}
        minDate={now}
      />
    </LocalizationProvider>
  );
}
