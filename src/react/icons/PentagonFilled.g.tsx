import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const PentagonFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M10.8245 2.35755C11.5255 1.84826 12.4747 1.84826 13.1756 2.35755L21.0745 8.09641C21.7755 8.6057 22.0688 9.50843 21.801 10.3325L18.7839 19.6181C18.5162 20.4422 17.7483 21.0001 16.8818 21.0001H7.11831C6.25185 21.0001 5.48394 20.4422 5.21619 19.6181L2.1991 10.3325C1.93135 9.50843 2.22467 8.6057 2.92564 8.09641L10.8245 2.35755Z" />
		</svg>
	);
};

PentagonFilled.iconName = "pentagon--filled";

export default PentagonFilled;