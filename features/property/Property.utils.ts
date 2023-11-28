export const standardize = (text: any) => {
  if (!text) return "";
  return text.toLowerCase().replace(/\s+/g, "_");
};

import * as TYPE from "./symbols";

/**
 * Decides if the property should be the picker default value, item default value or not present (null)
 * @param {*} itemDefault
 * @param {*} propertyDefault
 */
const getPropertyValue = (itemDefault: any, propertyDefault: any) => {
  // Property isn't needed by the item when itemDefault is null
  if (itemDefault === null) return null;

  // If itemDefault isn't defined then we return the pickerDefault, itemDefault otherwise.
  return itemDefault === undefined ? propertyDefault : itemDefault;
};

/**
 * Geometry property
 * @param {*} options
 */
export const geometry = (options: any = {}) => {
  return {
    type: TYPE.GEOMETRY,
    label: options.label || "Geometry",
    value: {
      width: getPropertyValue(options.width, 40),
      height: getPropertyValue(options.height, 40),
    },
  };
};

export const number = (label = "Number", value: any, options: any = {}) => {
  const { min, max, step, maxDecimals } = options;
  if (min > max)
    throw new Error(`Edit properties "number": Min is larger than Max`);

  if (min && value < min) value = min;

  if (max && value > max) value = max;

  return {
    type: TYPE.NUMBER,
    label,
    min,
    max,
    step,
    value: getPropertyValue(value, 0),
    maxDecimals,
  };
};
