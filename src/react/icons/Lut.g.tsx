import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLut = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						d="M4 3.5h10a.5.5 0 0 1 .5.5v1.75a.75.75 0 0 0 1.5 0V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1.75a.75.75 0 0 0 0-1.5H4a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5m5.867 6h2.283v2.66H9.5V9.867c0-.203.164-.367.367-.367M13.65 8H9.867C8.836 8 8 8.836 8 9.867v10.267C8 21.164 8.836 22 9.867 22h10.271c1.03 0 1.866-.835 1.866-1.866V9.867C22.004 8.836 21.17 8 20.138 8H13.65m2.704 1.5H13.65v2.66h2.704zm0 4.16H13.65v2.688h2.704zm1.5 2.688V13.66h2.65v2.688zm-1.5 1.5H13.65V20.5h2.704zm1.5 2.653v-2.653h2.65v2.286a.367.367 0 0 1-.366.366zm0-8.34V9.5h2.284c.202 0 .366.164.366.367v2.293zM12.15 20.5v-2.653H9.5v2.286c0 .202.164.366.367.366zm0-4.153V13.66H9.5v2.688z"
						clipRule="evenodd"
					/>
				</svg>
			);
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
						d="M1 3.5A2.5 2.5 0 0 1 3.5 1h5A2.5 2.5 0 0 1 11 3.5a.5.5 0 0 1-1 0A1.5 1.5 0 0 0 8.5 2h-5A1.5 1.5 0 0 0 2 3.5v5A1.5 1.5 0 0 0 3.5 10a.5.5 0 0 1 0 1A2.5 2.5 0 0 1 1 8.5zM6 7a1 1 0 0 1 1-1h1v2H6zm3-2H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H9m2 1H9v2h2zm0 3H9v2h2zm1 2V9h2v2zm-1 1H9v2h2zm1 2v-2h2v1a1 1 0 0 1-1 1zm0-6V6h1a1 1 0 0 1 1 1v1zm-5 6h1v-2H6v1a1 1 0 0 0 1 1m1-3V9H6v2z"
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
						d="M4 3h7a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h1.5a.5.5 0 0 0 0-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m7.35 7.352V8h2.3v2.352zM14.65 7H9a2 2 0 0 0-2 2v6.998a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM16 16.997h-1.35v-2.349H17v1.35a1 1 0 0 1-1 1m-2.35 0v-2.349h-2.3v2.35zM17 13.648h-2.35v-2.296H17zm0-3.296h-2.35V8H16a1 1 0 0 1 1 1zm-6.65 4.296v2.35H9a1 1 0 0 1-1-1v-1.35zm3.3-1v-2.296h-2.3v2.296zm-3.3-2.296v2.296H8v-2.296zm0-1H8V9a1 1 0 0 1 1-1h1.35z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconLut.iconName = "lut";

export default IconLut;
