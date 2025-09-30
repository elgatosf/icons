import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTextSizeIncrease = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M20.7196 5.53033C21.0125 5.82322 21.4874 5.82322 21.7803 5.53033C22.0732 5.23744 22.0732 4.76256 21.7803 4.46967L19.5303 2.21967C19.2374 1.92678 18.7625 1.92678 18.4696 2.21967L16.2196 4.46967C15.9267 4.76256 15.9267 5.23744 16.2196 5.53033C16.5125 5.82322 16.9874 5.82322 17.2803 5.53033L19 3.81066L20.7196 5.53033Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 4C12.3074 4 12.5838 4.18769 12.6971 4.47353L18.4471 18.9735C18.5998 19.3586 18.4115 19.7945 18.0264 19.9472C17.6414 20.0999 17.2055 19.9115 17.0528 19.5265L15.4561 15.5H8.54384L6.94714 19.5265C6.79445 19.9115 6.35853 20.0999 5.97349 19.9472C5.58844 19.7945 5.40008 19.3586 5.55277 18.9735L11.3028 4.47353C11.4161 4.18769 11.6925 4 12 4ZM12 6.78458L14.8612 14H9.13867L12 6.78458Z"
			/>
		</svg>
	);
};

IconTextSizeIncrease.iconName = "text-size-increase";

export default IconTextSizeIncrease;
