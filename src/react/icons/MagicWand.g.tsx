import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMagicWand = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M6.04 8.113c.147-.295.42-.568.967-1.115.546-.546.82-.819 1.114-.964a2 2 0 0 1 1.773 0c.294.146.567.42 1.113.965l9.491 9.495c.547.547.82.82.966 1.115a2 2 0 0 1 0 1.775c-.147.295-.42.568-.967 1.114s-.82.82-1.114.965a2 2 0 0 1-1.773 0c-.294-.146-.567-.42-1.113-.966l-9.491-9.494c-.547-.547-.82-.82-.966-1.116a2 2 0 0 1 0-1.774m11.517 11.324-6.465-6.468 1.881-1.881 6.465 6.467c.285.285.454.456.574.59.075.084.103.124.11.135a.5.5 0 0 1 0 .433 1 1 0 0 1-.11.134c-.12.134-.29.305-.575.59s-.455.454-.59.574a1 1 0 0 1-.134.11.5.5 0 0 1-.432 0 1 1 0 0 1-.135-.11c-.134-.12-.304-.29-.589-.575m-5.644-9.41-1.882 1.88-1.965-1.965a17 17 0 0 1-.574-.59 1 1 0 0 1-.11-.135.5.5 0 0 1 0-.433c.007-.01.035-.05.11-.134.12-.135.29-.305.575-.59s.455-.455.59-.574c.083-.075.123-.103.134-.11a.5.5 0 0 1 .432 0c.01.007.05.035.135.11.134.12.304.29.589.574z"
				clipRule="evenodd"
			/>
			<path d="M3.767 2.09a.25.25 0 0 1 .465 0l.475 1.203 1.203.474a.25.25 0 0 1 0 .466l-1.203.474-.475 1.203a.25.25 0 0 1-.465 0l-.475-1.203-1.203-.474a.25.25 0 0 1 0-.466l1.203-.474zM4.232 12.09a.25.25 0 0 0-.465 0l-.475 1.203-1.203.474a.25.25 0 0 0 0 .466l1.203.474.475 1.203a.25.25 0 0 0 .465 0l.475-1.203 1.203-.474a.25.25 0 0 0 0-.466l-1.203-.474z" />
		</svg>
	);
};

IconMagicWand.iconName = "magic-wand";

export default IconMagicWand;
