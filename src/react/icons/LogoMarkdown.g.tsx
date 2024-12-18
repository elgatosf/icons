import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoMarkdown = ({ size = "m", label = "Icon", ...props }: IconProps) => {
	const iconSize = sizeMap[size];
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			width={iconSize}
			height={iconSize}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M3.90659 8.28119V15.7187H6.09409V11.4531L8.28159 14.1874L10.4691 11.4531V15.7187H12.6566V8.28119H10.4691L8.28159 11.0156L6.09409 8.28119H3.90659Z" /><path d="M14.2972 12.1093L17.5785 15.7187L20.8597 12.1093H18.6722V8.28119H16.4847V12.1093H14.2972Z" /><path fillRule="evenodd" d="M2.26562 4.99988C1.35952 4.99988 0.625 5.73439 0.625 6.6405V17.3593C0.625 18.2654 1.35952 18.9999 2.26562 18.9999H21.7344C22.6405 18.9999 23.375 18.2654 23.375 17.3593V6.6405C23.375 5.73439 22.6405 4.99988 21.7344 4.99988H2.26562ZM1.71875 6.6405C1.71875 6.33846 1.96358 6.09363 2.26562 6.09363H21.7344C22.0364 6.09363 22.2812 6.33846 22.2812 6.6405V17.3593C22.2812 17.6613 22.0364 17.9061 21.7344 17.9061H2.26562C1.96358 17.9061 1.71875 17.6613 1.71875 17.3593V6.6405Z" clipRule="evenodd" />
		</svg>
	);
};

LogoMarkdown.iconName = "logo-markdown";

export default LogoMarkdown;