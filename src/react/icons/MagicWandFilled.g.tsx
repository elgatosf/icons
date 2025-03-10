import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMagicWandFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M14.233 2.09a.25.25 0 0 0-.466 0l-.474 1.203-1.203.474a.25.25 0 0 0 0 .466l1.203.474.474 1.203a.25.25 0 0 0 .466 0l.474-1.203 1.203-.474a.25.25 0 0 0 0-.466l-1.203-.474z" />
			<path
				fillRule="evenodd"
				d="M6.04 8.113c.147-.295.42-.568.967-1.115.546-.546.82-.819 1.114-.964a2 2 0 0 1 1.773 0c.294.146.567.42 1.113.965l9.491 9.495c.547.547.82.82.966 1.115a2 2 0 0 1 0 1.775c-.147.295-.42.568-.967 1.114s-.82.82-1.114.965a2 2 0 0 1-1.773 0c-.294-.146-.567-.42-1.113-.966l-9.491-9.494c-.547-.547-.82-.82-.966-1.116a2 2 0 0 1 0-1.774m5.873 1.914-1.882 1.88-1.965-1.965a17 17 0 0 1-.574-.59 1 1 0 0 1-.11-.135.5.5 0 0 1 0-.433c.007-.01.035-.05.11-.134.12-.135.29-.305.575-.59s.455-.455.59-.574c.083-.075.123-.103.134-.11a.5.5 0 0 1 .432 0c.01.007.05.035.135.11.134.12.304.29.589.574z"
				clipRule="evenodd"
			/>
			<path d="M3.767 2.09a.25.25 0 0 1 .465 0l.475 1.203 1.203.474a.25.25 0 0 1 0 .466l-1.203.474-.475 1.203a.25.25 0 0 1-.465 0l-.475-1.203-1.203-.474a.25.25 0 0 1 0-.466l1.203-.474zM4.232 12.09a.25.25 0 0 0-.465 0l-.475 1.203-1.203.474a.25.25 0 0 0 0 .466l1.203.474.475 1.203a.25.25 0 0 0 .465 0l.475-1.203 1.203-.474a.25.25 0 0 0 0-.466l-1.203-.474z" />
		</svg>
	);
};

IconMagicWandFilled.iconName = "magic-wand--filled";

export default IconMagicWandFilled;
