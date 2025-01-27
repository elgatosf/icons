import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPerson = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M14 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M14.251 18c1.518 0 2.797-1.276 2.216-2.679a7 7 0 0 0-12.934 0C2.952 16.724 4.23 18 5.749 18zm-.008-4.243a6 6 0 0 1 1.3 1.947c.128.31.067.58-.146.82-.236.267-.656.476-1.146.476H5.75c-.49 0-.91-.209-1.146-.476-.213-.24-.274-.51-.146-.82a6 6 0 0 1 9.786-1.947"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconPerson.iconName = "person";

export default IconPerson;
