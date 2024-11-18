import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconSecurity = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M15.53 10.28a.75.75 0 0 0-1.06-1.06L11 12.69l-1.47-1.47a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z" />
			<path
				fillRule="evenodd"
				d="m4.029 6.429 7-3.89a2 2 0 0 1 1.942 0l7 3.89c.635.352 1.038 1.025.994 1.75-.496 8.203-6.09 12.194-8.182 13.407a1.55 1.55 0 0 1-1.566 0C9.126 20.373 3.531 16.382 3.035 8.18c-.044-.725.359-1.398.994-1.75Zm.728 1.31 7-3.888a.5.5 0 0 1 .486 0l7 3.889c.174.097.23.248.225.348-.452 7.466-5.527 11.092-7.438 12.2-.018.011-.027.011-.03.011s-.012 0-.03-.01c-1.911-1.109-6.986-4.735-7.438-12.2-.006-.1.05-.252.225-.35"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconSecurity.iconName = "security";

export default IconSecurity;
