import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHelp = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M11.66 7.5c-.95 0-1.79.624-2.062 1.535l-.13.43a.75.75 0 1 1-1.436-.43l.129-.431A3.65 3.65 0 0 1 11.66 6h.395a3.556 3.556 0 0 1 2.015 6.487l-.825.566c-.31.214-.496.567-.496.943v.254a.75.75 0 0 1-1.5 0v-.254c0-.87.429-1.685 1.146-2.179l.825-.566A2.056 2.056 0 0 0 12.056 7.5zM12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
					<path
						fillRule="evenodd"
						d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-1.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17"
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
					<path d="M10 6C8.735 6 8.127 7.055 7.985 7.621a.5.5 0 1 1-.97-.242C7.207 6.612 8.065 5 10 5c1.74 0 3 1.19 3 2.75 0 1.175-.876 1.747-1.477 2.138l-.058.037c-.304.198-.542.352-.718.531-.167.17-.247.332-.247.544a.5.5 0 0 1-1 0c0-.538.233-.939.534-1.245.257-.262.587-.475.865-.655l.079-.05C11.625 8.628 12 8.325 12 7.75 12 6.81 11.26 6 10 6M11 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
					<path
						fillRule="evenodd"
						d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-1 0a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconHelp.iconName = "help";

export default IconHelp;
