/**
 * Gets the SVG string metadata for the specified icon.
 * @param name Name of the icon.
 * @returns The metadata.
 */
export function getSvgStringMetadata(name: string): SvgStringMetadata {
	const exportName = `icon${name.split("-").reduce((prev, curr) => {
		return prev + curr.charAt(0).toUpperCase() + curr.substring(1);
	}, "")}`;

	return { exportName };
}

/**
 * Metadata associated with an icon.
 */
export type SvgStringMetadata = {
	/**
	 * Name the icon SVG string.
	 *
	 * For example, the icon named `volume-1` is exported as:
	 * ```ts
	 * export { default as iconVolume1 } from "./m/icon-1.g.js";
	 * //                  └────┬────┘
	 * //                   exportName
	 * ```
	 * And can be imported with:
	 *
	 * ```ts
	 * import { iconVolume1 } from "@elgato/icons/m";
	 * //       └────┬────┘
	 * //        exportName
	 * ```
	 */
	exportName: string;
};

/**
 * Gets the React metadata for the specified icon.
 * @param name Name of the icon.
 * @returns The metadata.
 */
export function getReactMetadata(name: string): ReactMetadata {
	const { exportName } = getSvgStringMetadata(name);
	const componentName = `${exportName.charAt(0).toUpperCase()}${exportName.slice(1)}`;

	return {
		componentName,
		filename: componentName.slice(4),
	};
}

/**
 * Metadata associated with an icon.
 */
export type ReactMetadata = {
	/**
	 * Name of the component.
	 */
	componentName: string;

	/**
	 * Filename of the component.
	 */
	filename: string;
};
