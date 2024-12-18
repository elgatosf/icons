import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Cursor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M19.3037 9.53483L5.00186 4.36181C4.60335 4.21767 4.21746 4.60356 4.3616 5.00207L9.53462 19.3039C9.69359 19.7435 10.315 19.744 10.4747 19.3047L12.2711 14.3645C12.6249 13.3916 13.3913 12.6252 14.3643 12.2714L19.3045 10.4749C19.7438 10.3152 19.7432 9.6938 19.3037 9.53483ZM5.51206 2.95125L19.8139 8.12426C21.572 8.76015 21.5741 11.2457 19.8171 11.8846L14.8769 13.681C14.3209 13.8832 13.883 14.3212 13.6808 14.8771L11.8844 19.8174C11.2455 21.5743 8.75994 21.5722 8.12405 19.8141L2.95104 5.51228C2.37447 3.91824 3.91803 2.37469 5.51206 2.95125Z" clipRule="evenodd" />
		</svg>
	);
};

Cursor.iconName = "cursor";

export default Cursor;