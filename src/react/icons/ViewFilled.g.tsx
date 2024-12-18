import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ViewFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.50002 13.3807 9.50002 12C9.50002 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z" /><path fillRule="evenodd" d="M12 5C6.82759 5 3.49949 9.23662 2.27658 11.118C1.92465 11.6594 1.92465 12.3406 2.27658 12.882C3.49949 14.7634 6.82759 19 12 19C17.1724 19 20.5006 14.7634 21.7235 12.882C22.0754 12.3406 22.0754 11.6594 21.7235 11.118C20.5006 9.23662 17.1724 5 12 5ZM16 12C16 14.2091 14.2092 16 12 16C9.79088 16 8.00002 14.2091 8.00002 12C8.00002 9.79086 9.79088 8 12 8C14.2092 8 16 9.79086 16 12Z" clipRule="evenodd" />
		</svg>
	);
};

ViewFilled.iconName = "view--filled";

export default ViewFilled;