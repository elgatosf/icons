import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const CursorFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M19.8139 8.12426L5.51206 2.95125C3.91803 2.37469 2.37447 3.91824 2.95104 5.51228L8.12405 19.8141C8.75994 21.5722 11.2455 21.5743 11.8844 19.8174L13.6808 14.8771C13.883 14.3212 14.3209 13.8832 14.8769 13.681L19.8171 11.8846C21.5741 11.2457 21.572 8.76015 19.8139 8.12426Z" />
		</svg>
	);
};

CursorFilled.iconName = "cursor--filled";

export default CursorFilled;