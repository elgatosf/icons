import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const BadgeFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M13 2.18494C12.3812 1.82768 11.6188 1.82768 11 2.18494L4 6.22639C3.3812 6.58366 3 7.24391 3 7.95844V16.0413C3 16.7559 3.3812 17.4161 4 17.7734L11 21.8148C11.6188 22.1721 12.3812 22.1721 13 21.8148L20 17.7734C20.6188 17.4161 21 16.7559 21 16.0413V7.95844C21 7.24391 20.6188 6.58366 20 6.22639L13 2.18494ZM12.8967 6.81691C12.5298 6.07367 11.47 6.07367 11.1032 6.81691L9.94268 9.16837L7.34769 9.54544C6.52747 9.66462 6.19996 10.6726 6.79348 11.2511L8.67123 13.0815L8.22795 15.666C8.08784 16.4829 8.94527 17.1059 9.6789 16.7202L11.9999 15.4999L14.3209 16.7202C15.0546 17.1059 15.912 16.4829 15.7719 15.666L15.3286 13.0815L17.2064 11.2511C17.7999 10.6726 17.4724 9.66462 16.6522 9.54544L14.0572 9.16837L12.8967 6.81691Z" clipRule="evenodd" />
		</svg>
	);
};

BadgeFilled.iconName = "badge--filled";

export default BadgeFilled;