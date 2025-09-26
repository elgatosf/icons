import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHeatSink = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M20.25 12a.75.75 0 0 1 .75.75V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6.25a.75.75 0 0 1 1.5 0V19a.5.5 0 0 0 .5.5h3.5v-6.75a.75.75 0 0 1 1.5 0v6.75h4v-6.75a.75.75 0 0 1 1.5 0v6.75H19a.5.5 0 0 0 .5-.5v-6.25a.75.75 0 0 1 .75-.75M5.64 3.315a.75.75 0 0 1 1.22.87l-.319.449a.94.94 0 0 0 .178 1.28 2.44 2.44 0 0 1 .46 3.324l-.319.448a.75.75 0 0 1-1.22-.871l.319-.449a.94.94 0 0 0-.178-1.28 2.44 2.44 0 0 1-.46-3.324zM11.14 3.315a.75.75 0 0 1 1.22.87l-.319.449a.94.94 0 0 0 .178 1.28 2.44 2.44 0 0 1 .46 3.324l-.319.448a.75.75 0 0 1-1.22-.871l.319-.449a.94.94 0 0 0-.178-1.28 2.44 2.44 0 0 1-.46-3.324zM16.64 3.315a.75.75 0 0 1 1.22.87l-.319.449a.94.94 0 0 0 .178 1.28 2.44 2.44 0 0 1 .46 3.324l-.319.448a.75.75 0 0 1-1.22-.871l.319-.449a.94.94 0 0 0-.178-1.28 2.44 2.44 0 0 1-.46-3.324z" />
		</svg>
	);
};

IconHeatSink.iconName = "heat-sink";

export default IconHeatSink;
