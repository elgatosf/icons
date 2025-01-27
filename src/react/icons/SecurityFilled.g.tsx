import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSecurityFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="m4.008 5.424 5-2.857a2 2 0 0 1 1.984 0l5 2.857c.623.356 1.017 1.024.972 1.74-.435 6.865-4.669 9.694-6.314 10.54-.411.212-.889.212-1.3 0-1.645-.846-5.879-3.675-6.314-10.54-.045-.716.349-1.384.972-1.74m8.346 3.43a.5.5 0 0 0-.707-.708L9 10.793 7.854 9.646a.5.5 0 0 0-.708.707l1.5 1.5a.5.5 0 0 0 .708 0z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconSecurityFilled.iconName = "security--filled";

export default IconSecurityFilled;
