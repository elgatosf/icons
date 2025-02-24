import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDryCleanNo = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M2.146 2.146a.5.5 0 0 1 .708 0L10 9.293l7.146-7.147a.5.5 0 0 1 .708.708l-1.855 1.854A7.97 7.97 0 0 1 18 10c0 1.667-.51 3.215-1.382 4.496l-.722-.721A6.97 6.97 0 0 0 17 10a6.97 6.97 0 0 0-1.71-4.584L10.708 10l7.147 7.146a.5.5 0 0 1-.708.708l-1.854-1.855A7.97 7.97 0 0 1 10 18a7.97 7.97 0 0 1-5.292-2l-1.854 1.854a.5.5 0 0 1-.708-.708L9.293 10 4.709 5.416A6.97 6.97 0 0 0 3 10c0 1.39.405 2.686 1.104 3.775l-.722.721A7.96 7.96 0 0 1 2 10a7.97 7.97 0 0 1 2-5.292L2.147 2.854a.5.5 0 0 1 0-.708m3.27 13.145A6.97 6.97 0 0 0 10 17a6.97 6.97 0 0 0 4.584-1.71L10 10.708z"
				clipRule="evenodd"
			/>
			<path d="M10 2c1.667 0 3.215.51 4.496 1.382l-.721.722A6.97 6.97 0 0 0 10 3c-1.39 0-2.686.405-3.775 1.104l-.721-.722A7.96 7.96 0 0 1 10 2" />
		</svg>
	);
};

IconDryCleanNo.iconName = "dry-clean-no";

export default IconDryCleanNo;
