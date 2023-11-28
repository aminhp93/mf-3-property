import React from "react";
import NumberInput from "../NumberInput";
import PropertyLabel from "../../features/property/PropertyLabel";
import CustomNumberInput from "../CustomNumberInput";

const Number = (props: any) => {
  const { label, value, min, max, step, onChange, maxDecimals } = props;

  return (
    <PropertyLabel label={label}>
      {/* <NumberInput
        compact={true}
        value={value}
        min={min}
        max={max}
        step={step}
        onInput={(val: any) => onChange(val)}
        maxDecimals={maxDecimals}
      /> */}
      <CustomNumberInput value={value} onChange={onChange} />
    </PropertyLabel>
  );
};

export default Number;
