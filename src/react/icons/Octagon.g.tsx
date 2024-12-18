import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Octagon = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M15.1066 4L8.8934 4C8.76079 4 8.63361 4.05268 8.53984 4.14645L4.14645 8.53985C4.05268 8.63361 4 8.76079 4 8.8934L4 15.1066C4 15.2392 4.05268 15.3664 4.14645 15.4602L8.53984 19.8536C8.63361 19.9473 8.76079 20 8.8934 20L15.1066 20C15.2392 20 15.3664 19.9473 15.4602 19.8536L19.8536 15.4602C19.9473 15.3664 20 15.2392 20 15.1066V8.8934C20 8.76079 19.9473 8.63361 19.8536 8.53984L15.4602 4.14645C15.3664 4.05268 15.2392 4 15.1066 4ZM15.1066 2.5C15.637 2.5 16.1457 2.71071 16.5208 3.08579L20.9142 7.47918C21.2893 7.85426 21.5 8.36296 21.5 8.8934V15.1066C21.5 15.637 21.2893 16.1457 20.9142 16.5208L16.5208 20.9142C16.1457 21.2893 15.637 21.5 15.1066 21.5L8.8934 21.5C8.36297 21.5 7.85426 21.2893 7.47918 20.9142L3.08579 16.5208C2.71071 16.1457 2.5 15.637 2.5 15.1066V8.8934C2.5 8.36297 2.71071 7.85426 3.08579 7.47919L7.47918 3.08579C7.85426 2.71071 8.36297 2.5 8.8934 2.5H15.1066Z" clipRule="evenodd" />
		</svg>
	);
};

Octagon.iconName = "octagon";

export default Octagon;