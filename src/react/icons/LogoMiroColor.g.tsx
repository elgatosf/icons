import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMiroColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				d="M3 7.5C3 5.01472 5.01472 3 7.5 3H16.5C18.9853 3 21 5.01472 21 7.5V16.5C21 18.9853 18.9853 21 16.5 21H7.5C5.01472 21 3 18.9853 3 16.5V7.5Z"
				fill="#FFDD33"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14.9669 6.43127H13.3328L14.6945 8.8237L11.6988 6.43127H10.0649L11.5627 9.35543L8.43087 6.43127H6.79688L8.43087 10.1534L6.79688 17.5969H8.43087L11.5627 9.62166L10.0649 17.5969H11.6988L14.6945 9.08993L13.3328 17.5969H14.9669L17.9625 8.29199L14.9669 6.43127Z"
				fill="#1C1C1E"
			/>
		</svg>
	);
};

IconLogoMiroColor.iconName = "logo-miro--color";

export default IconLogoMiroColor;
