import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMetaColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fill="#0081FB"
				d="M3.738 14.233c0 .804.176 1.422.407 1.796.303.49.754.697 1.215.697.593 0 1.137-.147 2.183-1.595.839-1.16 1.827-2.789 2.492-3.81l1.126-1.73c.782-1.2 1.687-2.536 2.725-3.442C14.733 5.41 15.647 5 16.567 5c1.544 0 3.015.895 4.141 2.574 1.233 1.838 1.83 4.153 1.83 6.543 0 1.42-.28 2.464-.756 3.289-.46.797-1.357 1.594-2.866 1.594v-2.274c1.292 0 1.614-1.187 1.614-2.546 0-1.937-.451-4.086-1.446-5.621-.706-1.09-1.62-1.755-2.627-1.755-1.088 0-1.964.82-2.949 2.285-.523.777-1.06 1.725-1.664 2.794l-.664 1.177c-1.334 2.365-1.672 2.904-2.339 3.793C7.672 18.41 6.674 19 5.36 19c-1.56 0-2.545-.675-3.156-1.692-.498-.83-.743-1.917-.743-3.157z"
			/>
			<path
				fill="url(#prefix__a)"
				d="M3.256 7.734C4.3 6.125 5.806 5 7.534 5c1 0 1.995.296 3.033 1.144 1.136.927 2.347 2.454 3.858 4.97l.542.904c1.307 2.178 2.051 3.299 2.487 3.827.56.679.952.881 1.461.881 1.293 0 1.615-1.187 1.615-2.546l2.008-.063c0 1.42-.28 2.464-.756 3.289-.46.797-1.358 1.594-2.867 1.594-.938 0-1.77-.204-2.688-1.07-.707-.666-1.533-1.849-2.168-2.912l-1.89-3.157c-.95-1.585-1.82-2.767-2.323-3.302-.542-.575-1.238-1.27-2.35-1.27-.898 0-1.662.631-2.301 1.597z"
			/>
			<path
				fill="url(#prefix__b)"
				d="M7.497 7.29c-.9 0-1.663.63-2.302 1.596-.904 1.364-1.457 3.396-1.457 5.347 0 .804.176 1.422.407 1.796l-1.94 1.279c-.5-.83-.744-1.917-.744-3.157 0-2.254.619-4.603 1.795-6.417C4.3 6.125 5.806 5 7.534 5z"
			/>
			<defs>
				<linearGradient id="prefix__a" x1={5.932} x2={20.445} y1={13.576} y2={14.309} gradientUnits="userSpaceOnUse">
					<stop stopColor="#0064E1" />
					<stop offset={0.4} stopColor="#0064E1" />
					<stop offset={0.83} stopColor="#0073EE" />
					<stop offset={1} stopColor="#0082FB" />
				</linearGradient>
				<linearGradient id="prefix__b" x1={4.759} x2={4.759} y1={15.188} y2={9.838} gradientUnits="userSpaceOnUse">
					<stop stopColor="#0082FB" />
					<stop offset={1} stopColor="#0064E0" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoMetaColor.iconName = "logo-meta--color";

export default IconLogoMetaColor;
