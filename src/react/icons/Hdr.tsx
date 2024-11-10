/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */
import type { SVGProps } from "react";
import type { IconProps } from "../types.js";
const SIZE_MAP = {
	s: 16,
	m: 24,
	l: 32,
};
const IconHdr = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const sizeName = props.size || "m";
	const size = SIZE_MAP[sizeName];
	const label = props.label ?? "Icon";
	switch (sizeName) {
		// case 's':
		// case 'm':
		// case 'l':
		default:
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
					<path d="M7.588 16H5.864v-3.4H2.42V16H.69V8.045h1.73v3.26h3.443v-3.26h1.724V16Zm8.677-4.018q0 .683-.118 1.241-.119.553-.333.967-.21.414-.532.73-.32.312-.709.516a4 4 0 0 1-.87.333 7 7 0 0 1-.999.177q-.51.054-1.122.054H9.084V8.045h2.76q.795 0 1.446.124.65.119 1.214.408.563.285.945.73.381.447.596 1.123.22.677.22 1.552m-1.767.027q0-1.461-.687-2.1t-2.122-.639h-.875v5.51h.81q1.477 0 2.176-.665.698-.666.698-2.106M23.772 16h-1.805a5.4 5.4 0 0 1-.21-1.01q-.026-.21-.059-.596l-.037-.44a3.6 3.6 0 0 0-.102-.623 1 1 0 0 0-.21-.393.7.7 0 0 0-.381-.23 2.5 2.5 0 0 0-.628-.065h-1.29V16h-1.713V8.045h3.046q.413 0 .666.011.252.01.601.075.35.06.64.178 1.272.537 1.272 1.75 0 .812-.478 1.284t-1.316.64v.015q.683.044 1.02.317.34.27.479.892.02.102.043.231.022.123.037.295.022.167.038.264.016.128.054.494.037.36.064.548.027.182.097.467.07.278.172.494m-1.891-5.656a1 1 0 0 0-.113-.483.85.85 0 0 0-.274-.317 1.3 1.3 0 0 0-.408-.177 2.3 2.3 0 0 0-.456-.086 5 5 0 0 0-.479-.022h-1.1v2.218h.982a5.6 5.6 0 0 0 .843-.054q.236-.037.398-.112.161-.075.306-.193a.76.76 0 0 0 .226-.317q.075-.2.075-.457" />
				</svg>
			);
	}
};
export default IconHdr;
