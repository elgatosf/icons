import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoJsColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M17 3H3V17H17V3Z" fill="#F7DF1E" />
			<path
				d="M12.4043 13.9382L11.333 14.5585C11.7183 15.3197 12.5077 15.9023 13.7294 15.9023C14.9792 15.9023 15.9096 15.254 15.9096 14.0698C15.9096 12.9703 15.2799 12.4817 14.1616 12.0024L13.8327 11.8614C13.2689 11.6171 13.0245 11.4573 13.0245 11.0626C13.0245 10.7431 13.2689 10.4988 13.6542 10.4988C14.0301 10.4988 14.2744 10.6585 14.4999 11.0626L15.5243 10.4048C15.092 9.64353 14.4906 9.35217 13.6542 9.35217C12.4795 9.35217 11.7277 10.104 11.7277 11.0908C11.7277 12.1621 12.3573 12.6696 13.3065 13.0736L13.6354 13.2147C14.2368 13.4777 14.5939 13.6375 14.5939 14.0886C14.5939 14.4645 14.2463 14.7371 13.7012 14.7371C13.0528 14.7371 12.6863 14.3988 12.4043 13.9382Z"
				fill="black"
			/>
			<path d="M6.68067 14.6995C6.68065 14.6994 6.68068 14.6995 6.68067 14.6995V14.6995Z" fill="black" />
			<path
				d="M6.68067 14.6995C6.99079 15.3572 7.60174 15.9022 8.65417 15.9022C9.81953 15.9022 10.6183 15.282 10.6183 13.9193V9.42737H9.30264V13.9007C9.30264 14.5585 9.03008 14.7276 8.59778 14.7276C8.14678 14.7276 7.95875 14.4175 7.75206 14.0511L6.68067 14.6995Z"
				fill="black"
			/>
		</svg>
	);
};

IconLogoJsColor.iconName = "logo-js--color";

export default IconLogoJsColor;
