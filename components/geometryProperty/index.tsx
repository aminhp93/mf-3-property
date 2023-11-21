// import { useTranslation } from "react-i18next";
import NumberProperty from "../../components/NumberProperty";
import { Geometry, GeometryConfig } from "./types";

export const borderStyles = { solid: "solid", dashed: "dashed" };

interface Props {
  //   value: Geometry;
  //   config: GeometryConfig;
  //   onChange: (value: Geometry) => void;
  //   instance: string;
  //   onSaveView: () => void;
}

const GeometryProperty = (props: Props): JSX.Element => {
  //   const { value, config } = props;
  //   const { value: properties } = config;

  //   //   const { t } = useTranslation();

  //   const handleChange = (newObj: Partial<Geometry>) => {
  //     props.onChange({ ...props.value, ...newObj });
  //   };

  return (
    <>
      {/* {properties.width && ( */}
      <NumberProperty
        label={"width"}
        //   value={value.width}
        value={100}
        min={0}
        //   onChange={(width: number) => handleChange({ width })}
      />
      {/* )} */}
      {/* {properties.height && ( */}
      <NumberProperty
        label={"height"}
        //   value={value.height}
        value={100}
        min={0}
        //   onChange={(height: number) => handleChange({ height })}
      />
      {/* )} */}
    </>
  );
};

export default GeometryProperty;
