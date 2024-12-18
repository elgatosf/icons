import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoDropbox = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12.0129 6.38243L7.00647 9.76486L12.0129 13.1473L7.00647 16.5297L2 13.129L7.00647 9.74657L2 6.38243L7.00647 3L12.0129 6.38243ZM6.98058 17.6176L11.9871 14.2351L16.9935 17.6176L11.9871 21L6.98058 17.6176ZM12.0129 13.129L17.0194 9.74657L12.0129 6.38243L16.9935 3L22 6.38243L16.9935 9.76486L22 13.1473L16.9935 16.5297L12.0129 13.129Z" />
		</svg>
	);
};

LogoDropbox.iconName = "logo-dropbox";

export default LogoDropbox;