import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoNdi = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M1.252 7v10h2.456v-4.225c0-.265.16-.45.411-.45.213 0 .359.119.598.49L7.358 17h2.682V7H7.584v4.278c0 .265-.16.45-.412.45-.212 0-.358-.119-.597-.49L3.933 7z" />
			<path
				fillRule="evenodd"
				d="M19.76 11.994C19.76 9.237 17.435 7 14.595 7H10.64v10h3.956c2.854 0 5.163-2.252 5.163-5.007m-2.523-.014c0 1.603-1.181 2.768-2.8 2.768h-1.02a.32.32 0 0 1-.322-.32V9.572a.32.32 0 0 1 .322-.32h1.02c1.62 0 2.8 1.165 2.8 2.728"
				clipRule="evenodd"
			/>
			<path d="M20.292 17V7h2.456v10z" />
		</svg>
	);
};

IconLogoNdi.iconName = "logo-ndi";

export default IconLogoNdi;
