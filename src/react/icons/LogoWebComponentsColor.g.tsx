import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoWebComponentsColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
						fillRule="evenodd"
						clipRule="evenodd"
						d="M21.8202 11.9938L19.6869 15.5862L16.6953 11.9448L19.6869 8.40149L21.8202 11.9938Z"
						fill="#166DA5"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M19.4563 16.1993L16.2072 12.3127L14.2578 15.574L17.2862 20.0001L19.4563 16.1993Z"
						fill="#8FDB69"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M19.4195 7.764L16.2072 11.6628L14.2578 8.40155L17.2862 4.02454L19.4195 7.764Z"
						fill="#166DA5"
					/>
					<path
						opacity={0.95}
						fillRule="evenodd"
						clipRule="evenodd"
						d="M9.62305 7.76398H19.4192L17.2614 4H11.7809L9.62305 7.76398ZM16.207 11.6751H21.6261L19.6767 8.38927H14.2453"
						fill="url(#paint0_linear_10846_49)"
					/>
					<path
						opacity={0.95}
						fillRule="evenodd"
						clipRule="evenodd"
						d="M19.4546 16.2114H9.60938L11.7672 19.9509H17.2845L19.4546 16.2114ZM16.2055 12.3003H21.6247L19.6753 15.5861H14.2439"
						fill="url(#paint1_linear_10846_49)"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M11.7674 19.9509L7.15746 11.9816L11.8287 4.01221H6.77739L2.17969 11.9816L6.77739 19.9509H11.7674Z"
						fill="#010101"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_10846_49"
							x1={9.62305}
							y1={7.83755}
							x2={21.6261}
							y2={7.83755}
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#2A3B8F" />
							<stop offset={1} stopColor="#29ABE2" />
						</linearGradient>
						<linearGradient
							id="paint1_linear_10846_49"
							x1={21.6247}
							y1={16.1256}
							x2={9.60938}
							y2={16.1256}
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#B4D44E" />
							<stop offset={1} stopColor="#E7F716" />
						</linearGradient>
					</defs>
				</svg>
			);
		default:
			return (
				<svg
					viewBox="0 0 20 20"
					fill="none"
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
						d="M18.5937 9.99461L16.727 13.1379L14.1094 9.9517L16.727 6.85132L18.5937 9.99461Z"
						fill="#166DA5"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M16.5252 13.6744L13.6823 10.2737L11.9766 13.1273L14.6264 17.0001L16.5252 13.6744Z"
						fill="#8FDB69"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M16.493 6.29351L13.6823 9.70501L11.9766 6.85137L14.6264 3.02148L16.493 6.29351Z"
						fill="#166DA5"
					/>
					<path
						opacity={0.95}
						fillRule="evenodd"
						clipRule="evenodd"
						d="M7.91992 6.29349H16.4916L14.6034 3H9.80804L7.91992 6.29349ZM13.6808 9.71571H18.4226L16.7169 6.84061H11.9644"
						fill="url(#paint0_linear_10846_33)"
					/>
					<path
						opacity={0.95}
						fillRule="evenodd"
						clipRule="evenodd"
						d="M16.5247 13.6849H7.91016L9.79828 16.9569H14.6259L16.5247 13.6849ZM13.6818 10.2627H18.4236L16.7178 13.1378H11.9653"
						fill="url(#paint1_linear_10846_33)"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M9.79747 16.9571L5.76376 9.98392L9.85111 3.01074H5.43119L1.4082 9.98392L5.43119 16.9571H9.79747Z"
						fill="#010101"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_10846_33"
							x1={7.91992}
							y1={6.35785}
							x2={18.4226}
							y2={6.35785}
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#2A3B8F" />
							<stop offset={1} stopColor="#29ABE2" />
						</linearGradient>
						<linearGradient
							id="paint1_linear_10846_33"
							x1={18.4236}
							y1={13.6098}
							x2={7.91016}
							y2={13.6098}
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#B4D44E" />
							<stop offset={1} stopColor="#E7F716" />
						</linearGradient>
					</defs>
				</svg>
			);
	}
};

IconLogoWebComponentsColor.iconName = "logo-web-components--color";

export default IconLogoWebComponentsColor;
