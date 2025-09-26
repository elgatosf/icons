import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMedium = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M17.842 3A3.16 3.16 0 0 1 21 6.158v3.366a3 3 0 0 0-.228-.008h-.017c-.403 0-.896.098-1.247.274-.4.186-.754.463-1.047.827-.473.585-.758 1.376-.828 2.265a7 7 0 0 0-.016.3 6 6 0 0 0 0 .232c.046 2.014 1.134 3.624 3.067 3.624q.162 0 .316-.015v.82A3.16 3.16 0 0 1 17.842 21H6.158A3.16 3.16 0 0 1 3 17.842V6.158A3.16 3.16 0 0 1 6.158 3zM6.306 7.297l.014.003c.529.119.798.298.798.94v7.52c0 .641-.27.82-.8.94l-.013.002v.11h2.119v-.109L8.41 16.7c-.53-.12-.797-.298-.798-.94V8.676l3.458 8.137h.196l3.559-8.364v7.496c-.045.508-.312.665-.791.773l-.014.003v.109h3.691v-.11l-.014-.002c-.48-.108-.752-.265-.797-.773l-.003-7.705h.003c0-.642.268-.821.797-.94l.014-.003v-.11h-2.898l-2.692 6.327L9.43 7.187H6.306z"
				clipRule="evenodd"
			/>
			<path d="M21 15.388c-1.007-.296-1.728-1.409-1.653-2.725L21 12.662zM20.743 9.938q.137.003.257.035v2.308h-1.616c.06-1.35.545-2.326 1.36-2.343" />
		</svg>
	);
};

IconLogoMedium.iconName = "logo-medium";

export default IconLogoMedium;
