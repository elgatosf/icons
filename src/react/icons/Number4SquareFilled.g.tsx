import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumber4SquareFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12.5505 9.32312L9.99849 13.1621H12.5285L12.5505 9.32312Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM15.2675 14.2731H14.0465V16.0001H12.5065V14.2731H8.85449V12.8431L12.1435 8.04712H14.0465V13.1511H15.2675V14.2731Z"
			/>
		</svg>
	);
};

IconNumber4SquareFilled.iconName = "number4-square--filled";

export default IconNumber4SquareFilled;
