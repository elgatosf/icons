import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMicrosoftProjectColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#185C37"
				d="M21.14 20.726H9.77a.856.856 0 0 1-.86-.86v-4.968l4.363-2.165 5.446 2.165h2.42c.478 0 .86.382.86.86v4.108c0 .478-.382.86-.86.86"
			/>
			<path
				fill="#33C481"
				d="m15.44 9.102-5.096 1.815-5.796-1.815V4.134c0-.478.382-.86.86-.86h9.203c.478 0 .86.382.86.86z"
			/>
			<path fill="#21A366" d="M4.548 9.102H17.86c.478 0 .86.382.86.86v4.968H5.408a.856.856 0 0 1-.86-.86z" />
			<path
				fill="#000"
				d="M8.91 18.178h2.772a.825.825 0 0 0 .828-.7V7.764c0-.477-.383-.86-.828-.86H4.548v7.134c0 .478.382.86.86.86H8.91z"
				opacity={0.1}
			/>
			<path
				fill="#000"
				d="M11.682 17.828a1.21 1.21 0 0 0 1.21-1.21V7.764a1.21 1.21 0 0 0-1.21-1.21H4.548v7.516c0 .478.382.86.86.86H8.91v2.898z"
				opacity={0.2}
			/>
			<path
				fill="#000"
				d="M11.682 17.446c.477 0 .86-.382.86-.828V7.764c0-.477-.383-.86-.828-.86H4.547v7.134c0 .478.382.86.86.86H8.91v2.548z"
				opacity={0.2}
			/>
			<path
				fill="#000"
				d="M11.331 17.446c.478 0 .86-.382.86-.828V7.764c0-.477-.382-.86-.828-.86H4.548v7.134c0 .478.382.86.86.86H8.91v2.548z"
				opacity={0.1}
			/>
			<path
				fill="url(#prefix__a)"
				d="M2.86 6.905h8.471c.478 0 .86.382.86.86v8.47c0 .479-.382.86-.86.86H2.86a.856.856 0 0 1-.86-.86v-8.47c0-.478.382-.86.86-.86"
			/>
			<path
				fill="#fff"
				d="M7.255 9.166a2.26 2.26 0 0 1 1.497.446c.35.35.54.828.51 1.305 0 .35-.096.67-.256.988-.19.286-.446.51-.732.668-.35.16-.733.255-1.115.223H6.11v2.007H5.024V9.166zm-1.115 2.77h.924c.286.032.573-.063.828-.254.19-.191.286-.446.286-.733 0-.637-.35-.923-1.05-.923h-.956z"
			/>
			<defs>
				<linearGradient id="prefix__a" x1={3.772} x2={10.409} y1={6.243} y2={17.739} gradientUnits="userSpaceOnUse">
					<stop stopColor="#18884F" />
					<stop offset={0.5} stopColor="#117E43" />
					<stop offset={1} stopColor="#0B6631" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoMicrosoftProjectColor.iconName = "logo-microsoft-project--color";

export default IconLogoMicrosoftProjectColor;
