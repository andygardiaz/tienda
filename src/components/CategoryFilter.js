import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export const CategoryFilter = ({ categories, setCategory }) => {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
    setCategory && setCategory(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Categorías</FormLabel>
      <RadioGroup
        aria-labelledby="controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value=""
          control={<Radio />}
          label="Todas las categorías"
        />
        {categories.map((category) => (
          <FormControlLabel
            key={category.name_unique}
            value={category.name_unique}
            control={<Radio />}
            label={category.name}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
