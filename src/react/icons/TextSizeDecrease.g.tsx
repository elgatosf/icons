import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const TextSizeDecrease = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M17.2803 2.21967C16.9874 1.92678 16.5125 1.92678 16.2196 2.21967C15.9267 2.51256 15.9267 2.98744 16.2196 3.28033L18.4696 5.53033C18.7625 5.82322 19.2374 5.82322 19.5303 5.53033L21.7803 3.28033C22.0732 2.98744 22.0732 2.51256 21.7803 2.21967C21.4874 1.92678 21.0125 1.92678 20.7196 2.21967L19 3.93934L17.2803 2.21967Z" /><path fillRule="evenodd" d="M12 4C12.3074 4 12.5838 4.18769 12.6971 4.47353L18.4471 18.9735C18.5998 19.3586 18.4115 19.7945 18.0264 19.9472C17.6414 20.0999 17.2055 19.9115 17.0528 19.5265L15.4561 15.5H8.54384L6.94714 19.5265C6.79445 19.9115 6.35853 20.0999 5.97349 19.9472C5.58844 19.7945 5.40008 19.3586 5.55277 18.9735L11.3028 4.47353C11.4161 4.18769 11.6925 4 12 4ZM12 6.78458L14.8612 14H9.13867L12 6.78458Z" clipRule="evenodd" />
		</svg>
	);
};

TextSizeDecrease.iconName = "text-size-decrease";

export default TextSizeDecrease;