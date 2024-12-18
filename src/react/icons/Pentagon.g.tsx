import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Pentagon = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M20.1928 9.30994L12.294 3.57108C12.1187 3.44376 11.8814 3.44376 11.7062 3.57108L3.80732 9.30994C3.63207 9.43726 3.55875 9.66294 3.62568 9.86895L6.64278 19.1546C6.70972 19.3606 6.90169 19.5001 7.11831 19.5001H16.8818C17.0984 19.5001 17.2904 19.3606 17.3574 19.1546L20.3745 9.86895C20.4414 9.66294 20.3681 9.43726 20.1928 9.30994ZM13.1756 2.35755C12.4747 1.84826 11.5255 1.84826 10.8245 2.35755L2.92564 8.09641C2.22467 8.6057 1.93135 9.50843 2.1991 10.3325L5.21619 19.6181C5.48394 20.4422 6.25185 21.0001 7.11831 21.0001H16.8818C17.7483 21.0001 18.5162 20.4422 18.7839 19.6181L21.801 10.3325C22.0688 9.50843 21.7755 8.6057 21.0745 8.09641L13.1756 2.35755Z" clipRule="evenodd" />
		</svg>
	);
};

Pentagon.iconName = "pentagon";

export default Pentagon;