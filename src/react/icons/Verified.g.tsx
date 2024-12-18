import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Verified = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M15.7803 10.2803C16.0732 9.98736 16.0732 9.51249 15.7803 9.21959C15.4874 8.9267 15.0126 8.9267 14.7197 9.21959L10.75 13.1893L9.28033 11.7196C8.98744 11.4267 8.51256 11.4267 8.21967 11.7196C7.92678 12.0125 7.92678 12.4874 8.21967 12.7803L10.2197 14.7803C10.5126 15.0731 10.9874 15.0731 11.2803 14.7803L15.7803 10.2803Z" /><path fillRule="evenodd" d="M19.25 7.52543L12.25 3.48398C12.0953 3.39466 11.9047 3.39466 11.75 3.48398L4.74999 7.52543C4.59529 7.61475 4.49999 7.77981 4.49999 7.95844V16.0413C4.49999 16.22 4.59529 16.385 4.74999 16.4744L11.75 20.5158C11.9047 20.6051 12.0953 20.6051 12.25 20.5158L19.25 16.4744C19.4047 16.385 19.5 16.22 19.5 16.0413V7.95844C19.5 7.77981 19.4047 7.61475 19.25 7.52543ZM13 2.18494C12.3812 1.82768 11.6188 1.82768 11 2.18494L3.99999 6.22639C3.38119 6.58366 2.99999 7.24391 2.99999 7.95844V16.0413C2.99999 16.7559 3.38119 17.4161 3.99999 17.7734L11 21.8148C11.6188 22.1721 12.3812 22.1721 13 21.8148L20 17.7734C20.6188 17.4161 21 16.7559 21 16.0413V7.95844C21 7.24391 20.6188 6.58366 20 6.22639L13 2.18494Z" clipRule="evenodd" />
		</svg>
	);
};

Verified.iconName = "verified";

export default Verified;