import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMicrosoftForms = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M15.125 13.875H19.5v4.375h-4.375zM16.375 17h1.875v-1.875h-1.875zm.938-6.25a2.78 2.78 0 0 1-2.588-1.709 3.1 3.1 0 0 1-.225-1.104 2.78 2.78 0 0 1 1.709-2.587q.498-.206 1.104-.225A2.78 2.78 0 0 1 19.9 6.834q.205.498.225 1.104a2.78 2.78 0 0 1-1.709 2.587q-.498.206-1.104.225m0-4.375q-.322 0-.606.117a1.45 1.45 0 0 0-.498.342q-.215.225-.332.498t-.127.606q0 .321.117.605t.342.498q.225.215.498.332t.605.127q.322 0 .606-.117t.498-.342.332-.498.127-.605q0-.322-.117-.606a1.45 1.45 0 0 0-.342-.498 1.7 1.7 0 0 0-.498-.332 1.7 1.7 0 0 0-.605-.127M21.17 3.25a.8.8 0 0 1 .586.244.8.8 0 0 1 .244.586v15.84a.8.8 0 0 1-.244.586.8.8 0 0 1-.586.244H7.83a.8.8 0 0 1-.586-.244A.8.8 0 0 1 7 19.92V17H2.83a.8.8 0 0 1-.586-.244A.8.8 0 0 1 2 16.17V7.83a.8.8 0 0 1 .244-.586A.8.8 0 0 1 2.83 7H7V4.08a.8.8 0 0 1 .244-.586.8.8 0 0 1 .586-.244zM8.25 7h2.92a.8.8 0 0 1 .586.244.8.8 0 0 1 .244.586v3.545h8.75V4.5H8.25zm.781 5.762v-1.328h-2.53v-1.387h2.716V8.719H4.969v6.562h1.533v-2.52zM20.75 19.5v-6.875H12v3.545a.8.8 0 0 1-.244.586.8.8 0 0 1-.586.244H8.25v2.5z" />
		</svg>
	);
};

IconLogoMicrosoftForms.iconName = "logo-microsoft-forms";

export default IconLogoMicrosoftForms;
