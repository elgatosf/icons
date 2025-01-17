import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSecurity = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12.354 8.854a.5.5 0 0 0-.707-.708L9 10.793 7.854 9.646a.5.5 0 0 0-.708.707l1.5 1.5a.5.5 0 0 0 .708 0z" />
					<path
						fillRule="evenodd"
						d="m9.008 2.567-5 2.857c-.623.356-1.017 1.024-.972 1.74.435 6.865 4.669 9.694 6.314 10.54.411.212.889.212 1.3 0 1.645-.846 5.879-3.675 6.314-10.54.045-.716-.349-1.384-.972-1.74l-5-2.857a2 2 0 0 0-1.984 0M4.504 6.292l5-2.857a1 1 0 0 1 .992 0l5 2.857c.322.184.489.507.47.809-.405 6.389-4.311 8.962-5.774 9.715a.41.41 0 0 1-.384 0C8.345 16.063 4.439 13.49 4.034 7.1c-.019-.302.148-.625.47-.809"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconSecurity.iconName = "security";

export default IconSecurity;
