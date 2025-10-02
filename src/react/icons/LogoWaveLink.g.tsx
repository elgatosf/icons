import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoWaveLink = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "s":
			return (
				<svg
					viewBox="0 0 16 16"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M8 2C8.27614 2 8.5 2.22386 8.5 2.5V13.5C8.5 13.7761 8.27614 14 8 14C7.72386 14 7.5 13.7761 7.5 13.5V2.5C7.5 2.22386 7.72386 2 8 2Z" />
					<path d="M2.5 4C2.77614 4 3 4.22386 3 4.5V11.5C3 11.7761 2.77614 12 2.5 12C2.22386 12 2 11.7761 2 11.5V4.5C2 4.22386 2.22386 4 2.5 4Z" />
					<path d="M10.75 4C11.0261 4 11.25 4.22386 11.25 4.5V11.5C11.25 11.7761 11.0261 12 10.75 12C10.4739 12 10.25 11.7761 10.25 11.5V4.5C10.25 4.22386 10.4739 4 10.75 4Z" />
					<path d="M5.25 6.5C5.52614 6.5 5.75 6.72386 5.75 7V9C5.75 9.27614 5.52614 9.5 5.25 9.5C4.97386 9.5 4.75 9.27614 4.75 9V7C4.75 6.72386 4.97386 6.5 5.25 6.5Z" />
					<path d="M13.5 6.5C13.7761 6.5 14 6.72386 14 7V9C14 9.27614 13.7761 9.5 13.5 9.5C13.2239 9.5 13 9.27614 13 9V7C13 6.72386 13.2239 6.5 13.5 6.5Z" />
				</svg>
			);
		default:
			return (
				<svg
					viewBox="0 0 20 20"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M10 3C10.2761 3 10.5 3.22386 10.5 3.5V16.5C10.5 16.7761 10.2761 17 10 17C9.72386 17 9.5 16.7761 9.5 16.5V3.5C9.5 3.22386 9.72386 3 10 3Z" />
					<path d="M3.5 5.5C3.77614 5.5 4 5.72386 4 6V14C4 14.2761 3.77614 14.5 3.5 14.5C3.22386 14.5 3 14.2761 3 14V6C3 5.72386 3.22386 5.5 3.5 5.5Z" />
					<path d="M13.25 5.5C13.5261 5.5 13.75 5.72386 13.75 6V14C13.75 14.2761 13.5261 14.5 13.25 14.5C12.9739 14.5 12.75 14.2761 12.75 14V6C12.75 5.72386 12.9739 5.5 13.25 5.5Z" />
					<path d="M6.75 8C7.02614 8 7.25 8.22386 7.25 8.5V11.5C7.25 11.7761 7.02614 12 6.75 12C6.47386 12 6.25 11.7761 6.25 11.5V8.5C6.25 8.22386 6.47386 8 6.75 8Z" />
					<path d="M16.5 8C16.7761 8 17 8.22386 17 8.5V11.5C17 11.7761 16.7761 12 16.5 12C16.2239 12 16 11.7761 16 11.5V8.5C16 8.22386 16.2239 8 16.5 8Z" />
				</svg>
			);
	}
};

IconLogoWaveLink.iconName = "logo-wave-link";

export default IconLogoWaveLink;
