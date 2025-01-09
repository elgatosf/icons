import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleCalendarColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path fill="#fff" d="m17 7-4.5-.5L7 7l-.5 5 .5 5 5 .625L17 17l.5-5.125z" />
			<path
				fill="#2684FC"
				d="M9.051 14.758q-.561-.379-.774-1.11l.868-.357q.118.45.412.698.293.247.71.246.426 0 .732-.259a.83.83 0 0 0 .306-.659.82.82 0 0 0-.323-.667q-.323-.26-.807-.259h-.501v-.858h.45q.415 0 .7-.226a.74.74 0 0 0 .286-.616.68.68 0 0 0-.255-.556 1 1 0 0 0-.646-.209q-.383 0-.608.204-.225.205-.327.501l-.86-.357q.171-.485.63-.854.46-.37 1.172-.37.527 0 .948.204t.658.565.238.811q0 .459-.221.777a1.5 1.5 0 0 1-.544.49v.05q.425.179.697.544.273.365.273.875t-.259.91a1.8 1.8 0 0 1-.714.629 2.25 2.25 0 0 1-1.023.23 2.1 2.1 0 0 1-1.218-.377M14.375 10.453l-.948.688-.476-.722 1.709-1.233h.655V15h-.94z"
			/>
			<path fill="#E94235" d="m17 21.5 4.5-4.5v-1H17v1h-1v4.5z" />
			<path fill="#00AC47" d="M17 17H6v4.5h11z" />
			<path fill="#2684FC" d="M4 2.5A1.5 1.5 0 0 0 2.5 4v14H7V7h11V2.5z" />
			<path fill="#00832D" d="M2.5 17v3A1.5 1.5 0 0 0 4 21.5h3V17z" />
			<path fill="#FFBA00" d="M21.5 6H17v11h4.5z" />
			<path fill="#0066DA" d="M21.5 7V4A1.5 1.5 0 0 0 20 2.5h-3V7z" />
		</svg>
	);
};

IconLogoGoogleCalendarColor.iconName = "logo-google-calendar--color";

export default IconLogoGoogleCalendarColor;
