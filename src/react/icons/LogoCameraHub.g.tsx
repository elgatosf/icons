import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoCameraHub = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "s":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M8.001 6.375a1.626 1.626 0 1 1 0 3.252 1.626 1.626 0 0 1 0-3.252m0 .625a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
						clipRule="evenodd"
					/>
					<path d="M5.251 7.687c.07 0 .125.056.125.125v.375a.125.125 0 0 1-.125.125h-.687a.125.125 0 0 1-.125-.125v-.375c0-.069.056-.125.125-.125z" />
					<path
						fillRule="evenodd"
						d="M10.507 5.094c.87 0 1.687.555 1.866 1.453.086.436.159.95.159 1.453 0 .505-.073 1.017-.16 1.453-.178.898-.995 1.453-1.865 1.453H5.512c-.88 0-1.702-.567-1.882-1.472A7.6 7.6 0 0 1 3.47 8c0-.484.073-.995.16-1.434.18-.906 1.002-1.472 1.882-1.472zm-4.995.625c-.626 0-1.156.397-1.27.969A7 7 0 0 0 4.096 8c0 .428.065.894.148 1.312.113.572.643.969 1.27.969h4.994c.62 0 1.142-.388 1.253-.95.082-.412.147-.881.147-1.33s-.065-.92-.147-1.333c-.111-.561-.633-.949-1.253-.949z"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 .5a6.5 6.5 0 1 0 .001 13 6.5 6.5 0 0 0 0-13"
						clipRule="evenodd"
					/>
				</svg>
			);
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M10 8.143a1.858 1.858 0 1 1 0 3.715 1.858 1.858 0 0 1 0-3.715m0 .714a1.142 1.142 0 1 0 0 2.285 1.142 1.142 0 0 0 0-2.285"
						clipRule="evenodd"
					/>
					<path d="M6.857 9.643c.08 0 .143.064.143.143v.428a.143.143 0 0 1-.143.143h-.786a.143.143 0 0 1-.142-.143v-.428c0-.079.064-.143.142-.143z" />
					<path
						fillRule="evenodd"
						d="M12.864 6.679c.994 0 1.929.634 2.133 1.66a8.7 8.7 0 0 1 .18 1.661c0 .576-.08 1.162-.18 1.66-.204 1.027-1.139 1.661-2.133 1.661H7.155c-1.006 0-1.944-.647-2.15-1.682A8.7 8.7 0 0 1 4.82 10c0-.554.084-1.137.184-1.639.206-1.035 1.144-1.682 2.15-1.682zm-5.709.714c-.715 0-1.32.454-1.45 1.107a8 8 0 0 0-.17 1.5c0 .489.075 1.022.17 1.5.13.653.735 1.107 1.45 1.107h5.71c.707 0 1.303-.444 1.43-1.085A8 8 0 0 0 14.465 10c0-.514-.074-1.05-.168-1.521-.128-.642-.724-1.086-1.432-1.086z"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M10 2a8 8 0 1 1-.002 16.002A8 8 0 0 1 10 2m0 .572a7.428 7.428 0 1 0 0 14.856 7.428 7.428 0 0 0 0-14.856"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconLogoCameraHub.iconName = "logo-camera-hub";

export default IconLogoCameraHub;
