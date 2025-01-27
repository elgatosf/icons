import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMarkdown = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M3.907 8.281v7.438h2.187v-4.266l2.188 2.734 2.187-2.734v4.266h2.188V8.28h-2.188l-2.187 2.735L6.094 8.28zM14.297 12.11l3.281 3.609 3.282-3.61h-2.188V8.281h-2.187v3.828z" />
			<path
				fillRule="evenodd"
				d="M2.266 5A1.64 1.64 0 0 0 .625 6.64v10.72c0 .905.735 1.64 1.64 1.64h19.47a1.64 1.64 0 0 0 1.64-1.64V6.64A1.64 1.64 0 0 0 21.735 5zm-.547 1.64c0-.302.245-.546.547-.546h19.468c.302 0 .547.244.547.547v10.718a.547.547 0 0 1-.547.547H2.266a.547.547 0 0 1-.547-.547z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoMarkdown.iconName = "logo-markdown";

export default IconLogoMarkdown;
