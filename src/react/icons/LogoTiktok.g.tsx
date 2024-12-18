import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoTiktok = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M18.3946 6.00888C17.3174 5.30628 16.5396 4.1826 16.2972 2.87257C16.2448 2.58939 16.216 2.2982 16.216 2H12.7775L12.7718 15.7801C12.7141 17.3232 11.4441 18.5618 9.88698 18.5618C9.40311 18.5618 8.94729 18.4409 8.54624 18.2295C7.62625 17.7453 6.99678 16.7809 6.99678 15.6713C6.99678 14.0774 8.29345 12.7807 9.88698 12.7807C10.1845 12.7807 10.4697 12.8298 10.7399 12.9143V9.40399C10.4604 9.36593 10.1765 9.34222 9.88698 9.34222C6.3977 9.34255 3.55859 12.1817 3.55859 15.6713C3.55859 17.8125 4.62852 19.7072 6.26046 20.8529C7.28831 21.5746 8.53889 22 9.88732 22C13.3769 22 16.216 19.1609 16.216 15.6713V8.6837C17.5645 9.65177 19.2168 10.2221 20.9997 10.2221V6.78361C20.0393 6.78361 19.1446 6.4981 18.3946 6.00888Z" />
		</svg>
	);
};

LogoTiktok.iconName = "logo-tiktok";

export default LogoTiktok;