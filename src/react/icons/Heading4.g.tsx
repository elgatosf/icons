import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHeading4 = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 20 20"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.1162 12.1797C16.251 12.0182 16.4721 11.9587 16.6699 12.0303C16.8679 12.1019 17 12.2895 17 12.5V15H17.5C17.7761 15 18 15.2239 18 15.5C18 15.7761 17.7761 16 17.5 16H17V17.5C17 17.7761 16.7761 18 16.5 18C16.2239 18 16 17.7761 16 17.5V16H14C13.806 16 13.6292 15.8876 13.5469 15.7119C13.4647 15.5363 13.4921 15.3287 13.6162 15.1797L16.1162 12.1797ZM15.0674 15H16V13.8809L15.0674 15Z"
			/>
			<path d="M11.5 3C11.7761 3 12 3.22386 12 3.5V14.5C12 14.7761 11.7761 15 11.5 15C11.2239 15 11 14.7761 11 14.5V9H4V14.5C4 14.7761 3.77614 15 3.5 15C3.22386 15 3 14.7761 3 14.5V3.5C3 3.22386 3.22386 3 3.5 3C3.77614 3 4 3.22386 4 3.5V8H11V3.5C11 3.22386 11.2239 3 11.5 3Z" />
		</svg>
	);
};

IconHeading4.iconName = "heading4";

export default IconHeading4;
