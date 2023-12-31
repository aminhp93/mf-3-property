// import { useTranslation } from "react-i18next";
import Number from "../../components/number";
import { Geometry } from "./types";

export const borderStyles = { solid: "solid", dashed: "dashed" };

type Props = {
  value: Geometry;
  onChange: (value: Geometry) => void;
};

const GeometryProperty = (props: Props): JSX.Element => {
  console.log("GeometryProperty", props);
  const { value } = props;

  //   //   const { t } = useTranslation();

  const handleChange = (newObj: Partial<Geometry>) => {
    props.onChange({ ...props.value, ...newObj });
  };

  return (
    <>
      {/* {properties.width && ( */}

      <Number
        label={"width"}
        value={value.width}
        min={0}
        onChange={(width: number) => handleChange({ width })}
      />
      {/* )} */}
      {/* {properties.height && ( */}
      <Number
        label={"height"}
        value={value.height}
        min={0}
        onChange={(height: number) => handleChange({ height })}
      />
      {/* )} */}
    </>
  );
};

export default GeometryProperty;
