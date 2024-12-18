import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const TextSize = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M14.8029 4.47353C14.9162 4.18769 15.1926 4 15.5001 4C15.8076 4 16.0839 4.18769 16.1973 4.47353L21.9473 18.9735C22.1 19.3586 21.9116 19.7945 21.5265 19.9472C21.1415 20.0999 20.7056 19.9115 20.5529 19.5265L18.9562 15.5H12.044L10.4478 19.5252C10.3744 19.7112 10.2271 19.8676 10.0265 19.9472C9.6415 20.0999 9.20558 19.9115 9.05289 19.5265L8.24929 17.5H4.25086L3.44726 19.5265C3.29457 19.9115 2.85865 20.0999 2.47361 19.9472C2.08856 19.7945 1.9002 19.3586 2.05289 18.9735L5.55289 10.1474C5.66624 9.8616 5.94258 9.67391 6.25008 9.67391C6.55757 9.67391 6.83391 9.8616 6.94726 10.1474L9.75008 17.2154L14.8029 4.47353ZM4.84569 16H7.65447L6.25008 12.4585L4.84569 16ZM18.3614 14L15.5001 6.78458L12.6388 14H18.3614Z" clipRule="evenodd" />
		</svg>
	);
};

TextSize.iconName = "text-size";

export default TextSize;