import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGitlabColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fill="#E24329"
				d="m21.676 10-.026-.077-2.722-7.102a.66.66 0 0 0-.283-.334.8.8 0 0 0-.424-.115.68.68 0 0 0-.41.154.68.68 0 0 0-.245.372L15.73 8.523H8.294L6.458 2.898a.8.8 0 0 0-.244-.372.68.68 0 0 0-.411-.154.7.7 0 0 0-.424.115.66.66 0 0 0-.283.334L2.374 9.923 2.348 10a5.054 5.054 0 0 0 1.682 5.843h.026c0 .013 4.148 3.12 4.148 3.12l2.055 1.555 1.246.937a.83.83 0 0 0 1.014 0l1.246-.937 2.055-1.554 4.173-3.12A5.05 5.05 0 0 0 21.663 10z"
			/>
			<path
				fill="#FC6D26"
				d="m21.676 10-.026-.077a9.3 9.3 0 0 0-3.66 1.644c-.013 0-3.236 2.453-5.985 4.52a1438 1438 0 0 0 3.802 2.877l4.173-3.12A5.05 5.05 0 0 0 21.65 10z"
			/>
			<path
				fill="#FCA326"
				d="m8.19 18.964 2.056 1.554 1.245.937a.83.83 0 0 0 1.015 0l1.246-.937 2.054-1.554s-1.772-1.336-3.8-2.877z"
			/>
			<path
				fill="#FC6D26"
				d="M6.02 11.567a9.1 9.1 0 0 0-3.66-1.644L2.336 10a5.054 5.054 0 0 0 1.682 5.843h.026c0 .013 4.148 3.12 4.148 3.12l3.814-2.876c-2.735-2.067-5.959-4.507-5.984-4.52"
			/>
		</svg>
	);
};

IconLogoGitlabColor.iconName = "logo-gitlab--color";

export default IconLogoGitlabColor;
