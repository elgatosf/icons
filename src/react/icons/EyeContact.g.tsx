import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconEyeContact = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
			<path d="M2.75 2a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0V3.5h1.75a.75.75 0 0 0 0-1.5zM2 18.75v2.5a.75.75 0 0 0 .75.75h2.5a.75.75 0 0 0 0-1.5H3.5v-1.75a.75.75 0 0 0-1.5 0M18 21.25c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-1.5 0v1.75h-1.75a.75.75 0 0 0-.75.75M22 5.25v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0" />
			<path
				fillRule="evenodd"
				d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-1.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M3.71 12.825a1.5 1.5 0 0 1 0-1.65C4.788 9.54 7.624 6 12 6s7.212 3.54 8.29 5.175c.329.5.329 1.15 0 1.65C19.211 14.46 16.376 18 12 18s-7.213-3.54-8.29-5.175M19.037 12c-1.043 1.584-3.487 4.5-7.036 4.5-3.55 0-5.993-2.916-7.037-4.5C6.007 10.416 8.45 7.5 12 7.5s5.993 2.916 7.036 4.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconEyeContact.iconName = "eye-contact";

export default IconEyeContact;
