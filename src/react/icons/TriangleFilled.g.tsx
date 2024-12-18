import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const TriangleFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M10.2679 4C11.0377 2.66667 12.9622 2.66667 13.732 4L21.8149 18C22.5847 19.3333 21.6225 21 20.0829 21H3.91705C2.37745 21 1.41519 19.3333 2.185 18L10.2679 4Z" />
		</svg>
	);
};

TriangleFilled.iconName = "triangle--filled";

export default TriangleFilled;