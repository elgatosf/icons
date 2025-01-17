import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconEdit = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M3.85 12.448a2 2 0 0 1 .484-.782l8.252-8.252a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828l-8.252 8.252a2 2 0 0 1-.782.483l-2.706.902-.316-.948 2.706-.902a1 1 0 0 0 .39-.242l6.313-6.313-2.585-2.585-6.313 6.312a1 1 0 0 0-.242.391l-.902 2.706a.5.5 0 0 0 .633.633l.316.948c-1.173.391-2.288-.724-1.897-1.897zm8.21-7.094 2.586 2.585 1.233-1.232a1 1 0 0 0 0-1.414L14.707 4.12a1 1 0 0 0-1.414 0z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconEdit.iconName = "edit";

export default IconEdit;
