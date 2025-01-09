import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFlame = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				d="M11.058 2.78a.75.75 0 0 1 .174.892 2.86 2.86 0 0 0-.294 1.268 2.873 2.873 0 0 0 4.539 2.345c.34-.242.627-.557.835-.922a.75.75 0 0 1 1.265-.059A13.4 13.4 0 0 1 20 14.003a8 8 0 1 1-16 0C4 9.266 6.452 5.102 10.152 2.71a.75.75 0 0 1 .906.07M12 20.503l.132-.001a2.5 2.5 0 0 0 2.368-2.497c0-1.255-.692-2.561-1.477-3.617A13 13 0 0 0 12 13.179c-.284.298-.655.713-1.023 1.209-.785 1.056-1.477 2.362-1.477 3.617a2.5 2.5 0 0 0 2.5 2.498m6.5-6.5c0 2.175-1.068 4.1-2.709 5.28.136-.401.209-.831.209-1.278 0-1.75-.933-3.381-1.773-4.512a14.4 14.4 0 0 0-1.684-1.884l-.033-.029-.009-.008-.003-.003h-.001a.75.75 0 0 0-.994 0h-.001l-.003.003-.01.008-.032.03-.113.105a14.437 14.437 0 0 0-1.57 1.778C8.932 14.623 8 16.256 8 18.005c0 .447.073.877.209 1.278a6.5 6.5 0 0 1-2.709-5.28c0-3.517 1.52-6.68 3.942-8.865a4.372 4.372 0 0 0 7.462 2.897 11.9 11.9 0 0 1 1.596 5.968"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFlame.iconName = "flame";

export default IconFlame;
