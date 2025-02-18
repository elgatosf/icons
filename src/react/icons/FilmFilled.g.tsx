import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFilmFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M3.638 6.153a2 2 0 0 0-1.414 2.45L3 11.5V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H8.598l9.857-2.641a2 2 0 0 0 1.414-2.45l-.259-.966a2 2 0 0 0-2.45-1.414zm13.911-2.175-.65.174-1.276 2.413 2.444-.655a.5.5 0 0 0 .353-.612l-.259-.966a.5.5 0 0 0-.612-.354m-4.997 1.339 2.37-.635-1.277 2.413-2.369.635zm-1.977.53L9.3 8.259l-2.37.635 1.277-2.412zM6.228 7.01 4.952 9.425l-.891.239-.389-1.449a.5.5 0 0 1 .354-.612z"
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
						d="M16.023 3.415A2 2 0 0 0 13.576 2L3.914 4.589A2 2 0 0 0 2.5 7.039L3 8.903V15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H6.639l7.97-2.136a2 2 0 0 0 1.414-2.45m-2.003-.48-1.402 2.428 1.732-.465a1 1 0 0 0-.33-1.963m-1.354.344-1.414 2.45-2.015.54 1.415-2.45zm-3.38.906-2.015.54-1.414 2.45 2.014-.54zm-3.381.906L4.49 7.54l-.766.204-.259-.965a1 1 0 0 1 .707-1.225z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconFilmFilled.iconName = "film--filled";

export default IconFilmFilled;
