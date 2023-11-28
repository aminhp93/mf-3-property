import dynamic from "next/dynamic";

import React, { Fragment } from "react";
// import { useTranslation } from "react-i18next";
// import { getItem } from "../../lib/item";
import css from "./Property.module.css";

import PropertyGroup from "./PropertyGroup";

// Property stuff
import * as TYPE from "./symbols";
// import GroupProperty from "./properties/GroupProperty";
// import TransformProperty from "./properties/TransformProperty";
import GeometryProperty from "@/components/geometry";
// import StyleProperty from "./properties/StyleProperty";
// import TextProperty from "./properties/TextProperty";
import { standardize } from "./Property.utils";

type Props = {
  id: string;
  name: string;
  label: string;
  properties: any;
  instance: string;
  isMultiSelect: boolean;
  onSave: (x: any) => void;
  onChange: (x: any) => void;
  items: any;
};

const pickerMap: any = {
  // Custom groups
  //   [TYPE.GROUP]: GroupProperty,

  // Predefined groups
  //   [TYPE.TRANSFORM]: TransformProperty,
  [TYPE.GEOMETRY]: GeometryProperty,
  //   [TYPE.STYLE]: StyleProperty,
  //   [TYPE.TEXT]: TextProperty,
};

const Property = (props: Props) => {
  const { id, name, label, properties, onChange } = props;
  console.log(props);
  //   const { t } = useTranslation();

  const onPropertyChange = (newProperty: any) => {
    onChange({ ...properties, ...newProperty });
  };

  // if (!props.id || !props.instance || props.isMultiSelect)
  //   // return <h5 className={css.title}>{t("please_select_one_item")}</h5>;
  //   return <h5 className={css.title}>please_select_one_item</h5>;

  return (
    <Fragment>
      {/* <h5 className={css.title}>{t(standardize(item.name))}</h5> */}
      <h5 className={css.title}>{name}</h5>
      <ol className={css.content}>
        {Object.keys(properties).map((key) => {
          const Picker = pickerMap[properties[key].type];
          if (!Picker) return null;
          return (
            <ol key={key}>
              <PropertyGroup label={standardize(label)}>
                <Picker
                  key={id}
                  value={properties[key].value}
                  onChange={(x: any) => onPropertyChange({ [key]: x })}
                />
              </PropertyGroup>
            </ol>
          );
        })}
      </ol>
    </Fragment>
  );
};

export default dynamic(() => Promise.resolve(Property), {
  ssr: false,
});
