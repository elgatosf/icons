import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoVisualStudioCodeColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<mask
				id="prefix__a"
				width={20}
				height={20}
				x={2}
				y={2}
				maskUnits="userSpaceOnUse"
				style={{
					maskType: "alpha",
				}}
			>
				<path
					fill="#fff"
					fillRule="evenodd"
					d="M16.182 21.864c.315.122.675.114.992-.039l4.118-1.981A1.25 1.25 0 0 0 22 18.718V5.283c0-.48-.275-.919-.708-1.127l-4.118-1.981a1.245 1.245 0 0 0-1.42.242L7.87 9.608 4.437 7.002a.83.83 0 0 0-1.063.047L2.273 8.051a.834.834 0 0 0-.001 1.232L5.249 12l-2.977 2.717a.834.834 0 0 0 0 1.232l1.102 1.002c.297.27.744.29 1.063.047l3.434-2.606 7.883 7.191q.19.189.428.28m.821-14.404L11.022 12l5.981 4.54z"
					clipRule="evenodd"
				/>
			</mask>
			<g mask="url(#prefix__a)">
				<path
					fill="#0065A9"
					d="m21.293 4.16-4.121-1.985a1.25 1.25 0 0 0-1.422.242l-13.49 12.3a.833.833 0 0 0 .001 1.232l1.102 1.002c.297.27.744.29 1.064.047L20.673 4.674a.828.828 0 0 1 1.327.66v-.048c0-.48-.275-.918-.707-1.127"
				/>
				<g filter="url(#prefix__b)">
					<path
						fill="#007ACC"
						d="m21.293 19.84-4.121 1.985a1.25 1.25 0 0 1-1.422-.242L2.26 9.283a.833.833 0 0 1 .001-1.232l1.102-1.002a.83.83 0 0 1 1.064-.047l16.246 12.324a.828.828 0 0 0 1.327-.66v.049c0 .48-.275.918-.707 1.126"
					/>
				</g>
				<g filter="url(#prefix__c)">
					<path
						fill="#1F9CF0"
						d="M17.172 21.825a1.25 1.25 0 0 1-1.422-.242.732.732 0 0 0 1.25-.517V2.933a.732.732 0 0 0-1.25-.517 1.25 1.25 0 0 1 1.422-.242l4.12 1.981c.433.208.708.646.708 1.127v13.434c0 .48-.275.919-.708 1.127z"
					/>
				</g>
				<path
					fill="url(#prefix__d)"
					fillRule="evenodd"
					d="M16.17 21.864c.316.122.675.114.993-.039l4.117-1.981a1.25 1.25 0 0 0 .708-1.126V5.283c0-.48-.275-.919-.707-1.127l-4.118-1.981a1.245 1.245 0 0 0-1.42.242L7.858 9.608 4.426 7.002a.83.83 0 0 0-1.064.047L2.261 8.051a.834.834 0 0 0-.001 1.232L5.238 12 2.26 14.717a.834.834 0 0 0 0 1.232l1.102 1.002c.297.27.744.29 1.064.047l3.433-2.606 7.883 7.191c.125.125.271.22.429.28m.821-14.404L11.011 12l5.98 4.54z"
					clipRule="evenodd"
					opacity={0.25}
					style={{
						mixBlendMode: "overlay",
					}}
				/>
			</g>
			<defs>
				<filter
					id="prefix__b"
					width={23.345}
					height={18.449}
					x={0.322}
					y={5.166}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
					<feOffset />
					<feGaussianBlur stdDeviation={0.833} />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
					<feBlend in2="BackgroundImageFix" mode="overlay" result="effect1_dropShadow_8546_546" />
					<feBlend in="SourceGraphic" in2="effect1_dropShadow_8546_546" result="shape" />
				</filter>
				<filter
					id="prefix__c"
					width={9.583}
					height={23.23}
					x={14.083}
					y={0.385}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
					<feOffset />
					<feGaussianBlur stdDeviation={0.833} />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
					<feBlend in2="BackgroundImageFix" mode="overlay" result="effect1_dropShadow_8546_546" />
					<feBlend in="SourceGraphic" in2="effect1_dropShadow_8546_546" result="shape" />
				</filter>
				<linearGradient id="prefix__d" x1={11.988} x2={11.988} y1={2.052} y2={21.948} gradientUnits="userSpaceOnUse">
					<stop stopColor="#fff" />
					<stop offset={1} stopColor="#fff" stopOpacity={0} />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoVisualStudioCodeColor.iconName = "logo-visual-studio-code--color";

export default IconLogoVisualStudioCodeColor;
