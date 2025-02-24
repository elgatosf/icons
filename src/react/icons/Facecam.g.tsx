import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFacecam = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M6.574 4c-.375 0-.742.103-1.034.34C4.49 5.19 2 7.661 2 12s2.489 6.81 3.54 7.66c.292.236.659.34 1.034.34h10.852c.375 0 .743-.104 1.034-.34C19.51 18.81 22 16.339 22 12s-2.489-6.81-3.54-7.66C18.169 4.102 17.8 4 17.426 4zm10.852 1.5H6.574a.3.3 0 0 0-.096.011l-.003.001c-.816.663-2.688 2.513-2.945 5.738h2.22a.75.75 0 0 1 0 1.5H3.53c.257 3.225 2.13 5.075 2.945 5.738h.003a.3.3 0 0 0 .096.012h10.852c.051 0 .083-.007.096-.012h.003C18.402 17.776 20.5 15.69 20.5 12c0-3.69-2.098-5.776-2.975-6.488h-.003a.3.3 0 0 0-.096-.012"
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
						d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M5.254 4c-.648 0-1.256.315-1.629.846a8.96 8.96 0 0 0 0 10.308c.373.53.98.846 1.629.846h9.488a1.99 1.99 0 0 0 1.627-.844 8.955 8.955 0 0 0 0-10.312A1.99 1.99 0 0 0 14.742 4zm9.488 1H5.254a.99.99 0 0 0-.81.42A7.95 7.95 0 0 0 3.056 9H5a.5.5 0 0 1 0 1H2.994a7.95 7.95 0 0 0 1.45 4.58c.185.263.487.42.81.42h9.488a.99.99 0 0 0 .81-.42 7.955 7.955 0 0 0 0-9.16.99.99 0 0 0-.81-.42"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconFacecam.iconName = "facecam";

export default IconFacecam;
