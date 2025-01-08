import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCompose = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="m19.414 2.914 1.672 1.672a2 2 0 0 1 0 2.828l-8.194 8.194a2 2 0 0 1-.93.526l-3.845.962a1 1 0 0 1-1.213-1.213l.962-3.846a2 2 0 0 1 .526-.929l8.194-8.194a2 2 0 0 1 2.828 0m.611 2.732-1.671-1.671a.5.5 0 0 0-.708 0L16.341 5.28 18.72 7.66l1.305-1.305a.5.5 0 0 0 0-.708M17.66 8.72 15.28 6.34l-5.828 5.828a.5.5 0 0 0-.131.232l-.76 3.037 3.038-.759a.5.5 0 0 0 .232-.131z"
				clipRule="evenodd"
			/>
			<path d="M13 3.75a.75.75 0 0 0-.75-.75H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.25a.75.75 0 0 0-1.5 0V19a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h7.25a.75.75 0 0 0 .75-.75" />
		</svg>
	);
};

IconCompose.iconName = "compose";

export default IconCompose;
