import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Package = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M12.9713 2.53977C12.3672 2.20419 11.6328 2.20419 11.0287 2.53977L4.02871 6.42866C3.39378 6.7814 3 7.45064 3 8.17697V15.8234C3 16.5497 3.39378 17.2189 4.02871 17.5717L11.0287 21.4606C11.6328 21.7961 12.3672 21.7961 12.9713 21.4606L19.9713 17.5717C20.6062 17.2189 21 16.5497 21 15.8234V8.17697C21 7.45064 20.6062 6.7814 19.9713 6.42866L12.9713 2.53977ZM12.2428 3.85101L18.6397 7.40483L16.1604 8.79944L9.59893 5.05003L11.7572 3.85101C11.9082 3.76711 12.0918 3.76711 12.2428 3.85101ZM8.06597 5.90168L5.3603 7.40483L12 11.1397L14.6368 9.65645L8.06597 5.90168ZM4.5 15.8234V8.64193L11.25 12.4388V19.8676L4.75718 16.2604C4.59845 16.1723 4.5 16.0049 4.5 15.8234ZM19.2428 16.2604L12.75 19.8676V12.4388L19.5 8.64193V15.8234C19.5 16.0049 19.4016 16.1723 19.2428 16.2604Z" clipRule="evenodd" />
		</svg>
	);
};

Package.iconName = "package";

export default Package;