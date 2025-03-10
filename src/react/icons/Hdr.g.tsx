import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHdr = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M7.587 16H5.863v-3.4H2.42V16H.69V8.045h1.73v3.26h3.443v-3.26h1.724zM16.265 11.982q0 .683-.119 1.241-.118.553-.333.967-.21.415-.531.73a3 3 0 0 1-.71.516 4 4 0 0 1-.87.333 7 7 0 0 1-.998.177q-.51.054-1.123.054H9.083V8.045h2.761q.795 0 1.445.124.65.118 1.214.408.564.285.945.73.382.447.596 1.123.22.677.22 1.552m-1.767.027q0-1.461-.688-2.1t-2.122-.639h-.875v5.51h.811q1.477 0 2.175-.665.699-.666.699-2.106M23.771 16h-1.805a5.4 5.4 0 0 1-.21-1.01q-.026-.21-.058-.596l-.038-.44a3.6 3.6 0 0 0-.102-.623 1 1 0 0 0-.21-.393.7.7 0 0 0-.38-.23 2.5 2.5 0 0 0-.63-.065H19.05V16h-1.713V8.045h3.045q.414 0 .666.011t.602.075q.348.06.639.178 1.272.537 1.273 1.75 0 .812-.478 1.284-.48.472-1.316.64v.015q.682.044 1.02.317.339.27.478.892.022.102.043.231.021.123.038.295.022.167.037.264.017.128.054.494.038.36.065.548.026.182.096.467.07.278.172.494m-1.89-5.656a1 1 0 0 0-.113-.483.85.85 0 0 0-.274-.317 1.3 1.3 0 0 0-.409-.177 2.3 2.3 0 0 0-.456-.086 5 5 0 0 0-.478-.022H19.05v2.218h.983q.247 0 .424-.01a6 6 0 0 0 .419-.043q.237-.038.397-.113.162-.075.307-.193a.76.76 0 0 0 .225-.317q.075-.2.075-.457" />
		</svg>
	);
};

IconHdr.iconName = "hdr";

export default IconHdr;
