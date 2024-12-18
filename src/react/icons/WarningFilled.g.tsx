import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const WarningFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M10.268 3.94727C11.0378 2.61393 12.9623 2.61393 13.7321 3.94727L21.268 16.9998C22.0378 18.3332 21.0756 19.9998 19.536 19.9998H4.46417C2.92457 19.9998 1.96231 18.3332 2.73211 16.9998L10.268 3.94727ZM12.0001 7.99988C12.4143 7.99988 12.7501 8.33566 12.7501 8.74988V13.2499C12.7501 13.6641 12.4143 13.9999 12.0001 13.9999C11.5859 13.9999 11.2501 13.6641 11.2501 13.2499V8.74988C11.2501 8.33566 11.5859 7.99988 12.0001 7.99988ZM12 16.9998C12.5523 16.9998 13 16.552 13 15.9998C13 15.4475 12.5523 14.9998 12 14.9998C11.4477 14.9998 11 15.4475 11 15.9998C11 16.552 11.4477 16.9998 12 16.9998Z" clipRule="evenodd" />
		</svg>
	);
};

WarningFilled.iconName = "warning--filled";

export default WarningFilled;