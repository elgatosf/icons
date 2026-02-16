import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAdobeAuditionColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M17.7719 3H6.22811C4.44527 3 3 4.44527 3 6.22811V17.7719C3 19.5548 4.44527 21 6.22811 21H17.7719C19.5548 21 21 19.5548 21 17.7719V6.22811C21 4.44527 19.5548 3 17.7719 3Z"
				fill="#00005B"
			/>
			<path
				d="M15.4932 13.4873C15.4932 14.1807 15.8275 14.4658 16.3848 14.4658C16.6447 14.4658 16.868 14.4532 17.0537 14.3789V9.61133H19.2207V15.5303C18.3909 15.9514 17.499 16.2119 16.3721 16.2119C14.2544 16.2119 13.3262 15.3693 13.3262 13.5859V9.61133H15.4932V13.4873Z"
				fill="#9999FF"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13.1016 16.0752H10.6738L10.2656 14.8125H7.15723L6.74805 16.0752H4.41992L7.47949 7.77832H10.1289L13.1016 16.0752ZM7.81348 12.8428H9.62109L8.71777 10.0566L7.81348 12.8428Z"
				fill="#9999FF"
			/>
		</svg>
	);
};

IconLogoAdobeAuditionColor.iconName = "logo-adobe-audition--color";

export default IconLogoAdobeAuditionColor;
