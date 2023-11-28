export interface Geometry {
	width: number;
	height: number;
}

/**
 * @description Reference to the geometry  in PMP/src/lib/item/properties/index.js
 */
export interface GeometryConfig {
	type: symbol;
	label: string;
	value: Geometry;
}
