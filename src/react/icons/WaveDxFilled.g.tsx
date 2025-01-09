import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWaveDxFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M13.196 14.572 21 10.066a2 2 0 0 0 .732-2.732l-2.5-4.33a2 2 0 0 0-2.732-.732L8.696 6.778z" />
			<path
				fillRule="evenodd"
				d="m7.397 7.528-4.4 2.54a2 2 0 0 0-.732 2.733l2.5 4.33a2 2 0 0 0 2.732.732l4.4-2.541zM8 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
				clipRule="evenodd"
			/>
			<path d="M6.5 20v-.369c.594 0 1.195-.151 1.746-.47L11 17.572V20a2 2 0 0 1-2 2h-.5a2 2 0 0 1-2-2" />
		</svg>
	);
};

IconWaveDxFilled.iconName = "wave-dx--filled";

export default IconWaveDxFilled;
