import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoSkypeColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M13.66 8.081a5.45 5.45 0 0 1-1.604 3.858 5.484 5.484 0 0 1-7.742 0 5.447 5.447 0 0 1 0-7.716 5.484 5.484 0 0 1 7.742 0 5.45 5.45 0 0 1 1.604 3.858"
			/>
			<path
				fill="url(#prefix__b)"
				d="M21.288 15.917a5.44 5.44 0 0 1-1.604 3.86 5.48 5.48 0 0 1-3.872 1.598 5.49 5.49 0 0 1-3.872-1.599 5.45 5.45 0 0 1 0-7.719 5.486 5.486 0 0 1 8.932 1.771c.275.662.416 1.372.416 2.089"
			/>
			<path
				fill="#000"
				fillRule="evenodd"
				d="M2.73 8.548a5.474 5.474 0 1 0 6.136-5.881A9.95 9.95 0 0 0 2.73 8.548"
				clipRule="evenodd"
				opacity={0.05}
			/>
			<path
				fill="#000"
				fillRule="evenodd"
				d="M21.274 15.525a5.476 5.476 0 1 0-5.958 5.827 9.95 9.95 0 0 0 5.958-5.827"
				clipRule="evenodd"
				opacity={0.05}
			/>
			<path
				fill="#000"
				fillRule="evenodd"
				d="M2.987 9.796a5.472 5.472 0 1 0 7.124-6.823 9.31 9.31 0 0 0-7.124 6.823"
				clipRule="evenodd"
				opacity={0.1}
			/>
			<path
				fill="#000"
				fillRule="evenodd"
				d="M21.026 14.243a5.475 5.475 0 0 0-10.465.107 5.475 5.475 0 0 0 3.47 6.73 9.31 9.31 0 0 0 6.995-6.837"
				clipRule="evenodd"
				opacity={0.1}
			/>
			<path
				fill="#000"
				fillRule="evenodd"
				d="M3.188 10.313a5.47 5.47 0 1 0 7.434-7.119 8.99 8.99 0 0 0-7.434 7.12"
				clipRule="evenodd"
				opacity={0.1}
			/>
			<path
				fill="#000"
				fillRule="evenodd"
				d="M20.824 13.714a5.473 5.473 0 1 0-7.32 7.153 8.99 8.99 0 0 0 7.32-7.153"
				clipRule="evenodd"
				opacity={0.1}
			/>
			<path
				fill="url(#prefix__c)"
				d="M20.671 12.04a8.62 8.62 0 0 1-2.54 6.111 8.67 8.67 0 0 1-6.13 2.532A8.7 8.7 0 0 1 5.87 18.15a8.64 8.64 0 0 1-2.54-6.11A8.62 8.62 0 0 1 5.87 5.93 8.67 8.67 0 0 1 12 3.399a8.7 8.7 0 0 1 6.132 2.531 8.64 8.64 0 0 1 2.54 6.11"
			/>
			<path
				fill="#fff"
				fillRule="evenodd"
				d="M9.563 11.74c-.35-.23-.643-.539-.854-.9a2.5 2.5 0 0 1-.293-1.246 2.24 2.24 0 0 1 .528-1.508c.369-.422.843-.74 1.375-.919a5.3 5.3 0 0 1 1.8-.303 7 7 0 0 1 1.197.092q.426.066.83.215c.248.083.47.226.65.415a.84.84 0 0 1 .201.558.8.8 0 0 1-.21.582.7.7 0 0 1-.532.22 1 1 0 0 1-.394-.088 7 7 0 0 0-.94-.344 3.4 3.4 0 0 0-.904-.112 2.07 2.07 0 0 0-1.134.29.94.94 0 0 0-.452.847.85.85 0 0 0 .235.595c.181.189.396.342.633.454q.397.197 1.187.523.087.028.17.068a8.4 8.4 0 0 1 1.47.756c.367.239.676.556.905.929.226.391.34.838.327 1.29a2.6 2.6 0 0 1-.453 1.555 2.7 2.7 0 0 1-1.265.94 5.3 5.3 0 0 1-1.903.31 6 6 0 0 1-2.593-.491 1.4 1.4 0 0 1-.534-.416.93.93 0 0 1-.173-.564.74.74 0 0 1 .228-.575.84.84 0 0 1 .588-.208c.24.003.476.064.687.177q.396.197.624.296a3.1 3.1 0 0 0 1.228.241c.41.03.819-.08 1.16-.309a1.02 1.02 0 0 0 .392-.848.9.9 0 0 0-.245-.618 2.6 2.6 0 0 0-.722-.525 18 18 0 0 0-1.34-.613 8.3 8.3 0 0 1-1.474-.765"
				clipRule="evenodd"
			/>
			<defs>
				<linearGradient id="prefix__a" x1={7.332} x2={9.039} y1={2.691} y2={13.471} gradientUnits="userSpaceOnUse">
					<stop offset={0.012} stopColor="#00B7F0" />
					<stop offset={0.339} stopColor="#009DE5" />
					<stop offset={0.755} stopColor="#0082D9" />
					<stop offset={1} stopColor="#0078D4" />
				</linearGradient>
				<linearGradient id="prefix__b" x1={11.072} x2={20.552} y1={18.653} y2={13.181} gradientUnits="userSpaceOnUse">
					<stop stopColor="#0078D4" />
					<stop offset={0.37} stopColor="#007AD5" />
					<stop offset={0.573} stopColor="#0082D9" />
					<stop offset={0.735} stopColor="#0090DF" />
					<stop offset={0.875} stopColor="#00A3E7" />
					<stop offset={1} stopColor="#00BCF2" />
				</linearGradient>
				<linearGradient id="prefix__c" x1={8.617} x2={17.268} y1={6.181} y2={21.164} gradientUnits="userSpaceOnUse">
					<stop stopColor="#00B7F0" />
					<stop offset={1} stopColor="#007CC1" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoSkypeColor.iconName = "logo-skype--color";

export default IconLogoSkypeColor;
