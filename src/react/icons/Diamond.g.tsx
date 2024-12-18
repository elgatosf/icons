import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Diamond = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M20.5251 11.6464L12.3536 3.47488C12.1583 3.27962 11.8417 3.27961 11.6464 3.47488L3.47488 11.6464C3.27962 11.8417 3.27961 12.1583 3.47488 12.3536L11.6464 20.5251C11.8417 20.7204 12.1583 20.7204 12.3536 20.5251L20.5251 12.3536C20.7204 12.1583 20.7204 11.8417 20.5251 11.6464ZM13.4142 2.41422C12.6332 1.63317 11.3668 1.63317 10.5858 2.41422L2.41422 10.5858C1.63317 11.3668 1.63317 12.6332 2.41422 13.4142L10.5858 21.5858C11.3668 22.3668 12.6332 22.3668 13.4142 21.5858L21.5858 13.4142C22.3668 12.6332 22.3668 11.3668 21.5858 10.5858L13.4142 2.41422Z" clipRule="evenodd" />
		</svg>
	);
};

Diamond.iconName = "diamond";

export default Diamond;