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
import GeometryProperty from "@/components/geometryProperty";
// import StyleProperty from "./properties/StyleProperty";
// import TextProperty from "./properties/TextProperty";
import { standardize } from "./Property.utils";

const pickerMap: any = {
  // Custom groups
  //   [TYPE.GROUP]: GroupProperty,

  // Predefined groups
  //   [TYPE.TRANSFORM]: TransformProperty,
  [TYPE.GEOMETRY]: GeometryProperty,
  //   [TYPE.STYLE]: StyleProperty,
  //   [TYPE.TEXT]: TextProperty,
};

const Property = (props: any) => {
  //   const { t } = useTranslation();
  console.log("PropertyList", props);

  const onPropertyChange = (newProperty: any) => {
    props.onChange({ ...props.properties, ...newProperty });
  };

  if (!props.id || !props.instance || props.isMultiSelect)
    // return <h5 className={css.title}>{t("please_select_one_item")}</h5>;
    return <h5 className={css.title}>please_select_one_item</h5>;

  //   const item = getItem(props.id);
  //   const item: any = TEST_ITEM;
  const item = props.item;

  console.log({ item });
  return (
    <Fragment>
      {/* <h5 className={css.title}>{t(standardize(item.name))}</h5> */}
      <h5 className={css.title}>{item.name}</h5>
      <ol className={css.content}>
        {Object.keys(props.properties).map((key) => {
          if (!item.properties) return null;
          const config = item.properties[key];
          console.log({ config, key });
          const Picker = pickerMap[config.type];
          console.log("Picker", Picker, config.type, pickerMap);

          if (!Picker) return null;
          return (
            <ol key={key}>
              <PropertyGroup label={standardize(config.label)}>
                <Picker
                  key={props.instance}
                  config={config}
                  value={props.properties[key]}
                  onChange={(x: any) => onPropertyChange({ [key]: x })}
                  onSaveView={props.onSave}
                  instance={props.instance}
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
