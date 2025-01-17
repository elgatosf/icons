import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFilm = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
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
						d="M16.023 3.415A2 2 0 0 0 13.576 2L3.914 4.589A2 2 0 0 0 2.5 7.039L3 8.903V15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H6.639l7.97-2.136a2 2 0 0 0 1.414-2.45m-2.003-.48-1.402 2.428 1.732-.465a1 1 0 0 0-.33-1.963m-1.354.344-1.414 2.45-2.015.54 1.415-2.45zm-3.38.906-2.015.54-1.414 2.45 2.014-.54zm-3.381.906L4.49 7.54l-.766.204-.259-.965a1 1 0 0 1 .707-1.225zM4 9h11a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconFilm.iconName = "film";

export default IconFilm;
