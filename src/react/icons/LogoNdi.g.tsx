import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoNdi = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M1.25195 7V17H3.70776V12.7749C3.70776 12.5101 3.86722 12.3247 4.1194 12.3247C4.3319 12.3247 4.47765 12.4438 4.71685 12.8146L7.35845 17H10.0397V7H7.58394V11.2781C7.58394 11.5429 7.42448 11.7283 7.17229 11.7283C6.9598 11.7283 6.81404 11.6093 6.57485 11.2384L3.93324 7H1.25195Z" /><path fillRule="evenodd" d="M19.7594 11.9935C19.7594 9.23826 17.4364 7 14.5956 7H10.6401V17H14.5956C17.4497 17 19.7594 14.7484 19.7594 11.9935ZM17.2372 11.9802C17.2372 13.5827 16.0557 14.7484 14.4365 14.7484H13.4166C13.2395 14.7484 13.0955 14.6052 13.0955 14.428V9.57197C13.0955 9.39519 13.2391 9.25161 13.4166 9.25161H14.4365C16.0561 9.25161 17.2372 10.4173 17.2372 11.9802Z" clipRule="evenodd" /><path d="M20.2923 17V7H22.7481V17H20.2923Z" />
		</svg>
	);
};

LogoNdi.iconName = "logo-ndi";

export default LogoNdi;