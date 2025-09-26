import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoTelegram = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m4.089 6.02c-.377.007-.954.208-3.73 1.363a474 474 0 0 0-5.832 2.512q-.71.282-.744.552c-.044.346.454.453 1.08.657.51.166 1.198.36 1.555.367q.486.01 1.084-.4 4.086-2.758 4.219-2.788c.062-.014.149-.032.207.02s.052.15.046.177c-.05.21-2.608 2.539-2.755 2.692-.563.584-1.202.941-.215 1.592.854.563 1.35.922 2.23 1.5.563.368 1.004.805 1.585.751.267-.024.543-.276.684-1.025.33-1.771.982-5.607 1.132-7.189a1.8 1.8 0 0 0-.016-.394.42.42 0 0 0-.142-.27c-.12-.098-.306-.118-.389-.117"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoTelegram.iconName = "logo-telegram";

export default IconLogoTelegram;
