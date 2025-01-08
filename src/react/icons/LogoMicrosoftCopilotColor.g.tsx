import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMicrosoftCopilotColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="url(#prefix__a)"
				d="M17.071 3.663A2.315 2.315 0 0 0 14.851 2h-.677a2.315 2.315 0 0 0-2.276 1.897l-1.158 6.307.287-.983a2.315 2.315 0 0 1 2.222-1.665h3.927l1.647.641 1.588-.641h-.464a2.315 2.315 0 0 1-2.22-1.663z"
			/>
			<path
				fill="url(#prefix__b)"
				d="M7.165 20.328A2.315 2.315 0 0 0 9.39 22h1.435c1.256 0 2.282-1 2.314-2.255l.157-6.081-.327 1.116a2.315 2.315 0 0 1-2.222 1.665h-3.96l-1.411-.766-1.528.766h.455c1.031 0 1.938.681 2.224 1.671z"
			/>
			<path
				fill="url(#prefix__c)"
				d="M14.75 2H6.73C4.439 2 3.064 5.028 2.147 8.057c-1.086 3.587-2.506 8.386 1.604 8.386h3.463a2.315 2.315 0 0 0 2.228-1.68c.602-2.106 1.657-5.78 2.486-8.577.42-1.422.772-2.643 1.31-3.403A1.81 1.81 0 0 1 14.75 2"
			/>
			<path
				fill="url(#prefix__d)"
				d="M14.75 2H6.73C4.439 2 3.064 5.028 2.147 8.057c-1.086 3.587-2.506 8.386 1.604 8.386h3.463a2.315 2.315 0 0 0 2.228-1.68c.602-2.106 1.657-5.78 2.486-8.577.42-1.422.772-2.643 1.31-3.403A1.81 1.81 0 0 1 14.75 2"
			/>
			<path
				fill="url(#prefix__e)"
				d="M9.249 22h8.02c2.291 0 3.666-3.029 4.582-6.058 1.086-3.588 2.507-8.387-1.604-8.387h-3.462a2.315 2.315 0 0 0-2.228 1.68c-.602 2.106-1.657 5.781-2.486 8.579-.421 1.421-.772 2.642-1.31 3.403A1.81 1.81 0 0 1 9.249 22"
			/>
			<path
				fill="url(#prefix__f)"
				d="M9.249 22h8.02c2.291 0 3.666-3.029 4.582-6.058 1.086-3.588 2.507-8.387-1.604-8.387h-3.462a2.315 2.315 0 0 0-2.228 1.68c-.602 2.106-1.657 5.781-2.486 8.579-.421 1.421-.772 2.642-1.31 3.403A1.81 1.81 0 0 1 9.249 22"
			/>
			<defs>
				<radialGradient
					id="prefix__a"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(-5.48026 -6.69461 6.29506 -5.15318 19.003 10.257)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.096} stopColor="#00AEFF" />
					<stop offset={0.773} stopColor="#2253CE" />
					<stop offset={1} stopColor="#0736C4" />
				</radialGradient>
				<radialGradient
					id="prefix__b"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="rotate(51.84 -14.1 13.925)scale(7.9956 7.75595)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FFB657" />
					<stop offset={0.634} stopColor="#FF5F3D" />
					<stop offset={0.923} stopColor="#C02B3C" />
				</radialGradient>
				<radialGradient
					id="prefix__e"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="rotate(109.274 8.15 10.401)scale(19.1937 22.9934)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.066} stopColor="#8C48FF" />
					<stop offset={0.5} stopColor="#F2598A" />
					<stop offset={0.896} stopColor="#FFB152" />
				</radialGradient>
				<linearGradient id="prefix__c" x1={6.25} x2={7.394} y1={3.75} y2={16.988} gradientUnits="userSpaceOnUse">
					<stop offset={0.156} stopColor="#0D91E1" />
					<stop offset={0.487} stopColor="#52B471" />
					<stop offset={0.652} stopColor="#98BD42" />
					<stop offset={0.937} stopColor="#FFC800" />
				</linearGradient>
				<linearGradient id="prefix__d" x1={7.25} x2={7.875} y1={2} y2={16.443} gradientUnits="userSpaceOnUse">
					<stop stopColor="#3DCBFF" />
					<stop offset={0.247} stopColor="#0588F7" stopOpacity={0} />
				</linearGradient>
				<linearGradient id="prefix__f" x1={21.293} x2={21.285} y1={6.673} y2={10.607} gradientUnits="userSpaceOnUse">
					<stop offset={0.058} stopColor="#F8ADFA" />
					<stop offset={0.708} stopColor="#A86EDD" stopOpacity={0} />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoMicrosoftCopilotColor.iconName = "logo-microsoft-copilot--color";

export default IconLogoMicrosoftCopilotColor;
