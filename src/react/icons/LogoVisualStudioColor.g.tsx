import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoVisualStudioColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					d="m5.667 18.917-3.334-2.5A.83.83 0 0 1 2 15.75v-7.5a.83.83 0 0 1 .333-.667l3.334-2.5a.76.76 0 0 0-.23.667v12.5a.76.76 0 0 0 .23.667"
				/>
				<path
					fill="#fff"
					d="M21.628 5.47a.84.84 0 0 0-1.038.097l-.058.058L13.882 12l-3.68 3.53L6.8 18.791l-.059.058a.81.81 0 0 1-.575.233.84.84 0 0 1-.5-.166l-3.333-2.5a.833.833 0 0 0 1.133-.125l3.7-4.296 3.038-3.525 5.32-6.18a.82.82 0 0 1 .63-.291c.164 0 .325.047.462.138z"
				/>
				<path
					fill="#fff"
					d="m21.628 18.529-5 3.333a.844.844 0 0 1-1.096-.15l-5.33-6.183-3.037-3.533-3.7-4.292a.837.837 0 0 0-1.133-.12l3.333-2.5a.84.84 0 0 1 .811-.108q.15.061.264.174l.059.058 3.404 3.263L13.882 12l6.65 6.375.058.058a.8.8 0 0 0 .575.233.84.84 0 0 0 .463-.137"
				/>
				<path
					fill="#fff"
					d="M21.999 6.167v11.667a.84.84 0 0 1-.371.695l-5 3.334a.84.84 0 0 0 .37-.696V2.834a.84.84 0 0 0-.383-.696l5.013 3.333a.84.84 0 0 1 .37.696"
				/>
			</mask>
			<g mask="url(#prefix__a)">
				<path
					fill="#5E438F"
					d="m5.667 18.917-3.334-2.5A.83.83 0 0 1 2 15.75v-7.5a.83.83 0 0 1 .333-.667l3.334-2.5a.76.76 0 0 0-.23.667v12.5a.76.76 0 0 0 .23.667"
				/>
				<g filter="url(#prefix__b)">
					<path
						fill="url(#prefix__c)"
						d="M21.628 5.47a.84.84 0 0 0-1.038.097l-.058.058-3.542 3.396L13.882 12l-3.68 3.53L6.8 18.791l-.059.058a.81.81 0 0 1-.575.233.84.84 0 0 1-.5-.166l-3.333-2.5a.833.833 0 0 0 1.133-.125l1.867-2.167 1.833-2.129 3.038-3.525 5.32-6.18a.82.82 0 0 1 .63-.291c.164 0 .325.047.462.138z"
					/>
				</g>
				<g filter="url(#prefix__d)">
					<path
						fill="url(#prefix__e)"
						d="m21.628 18.529-5 3.334a.84.84 0 0 1-1.096-.15l-5.33-6.184-3.037-3.533L5.332 9.87 3.465 7.704a.837.837 0 0 0-1.133-.12l3.333-2.5a.84.84 0 0 1 .811-.108q.15.061.264.174l.059.058 3.404 3.263L13.883 12l3.111 2.983 3.538 3.392.058.058a.8.8 0 0 0 .575.233.84.84 0 0 0 .463-.137"
					/>
				</g>
				<g filter="url(#prefix__f)">
					<path
						fill="url(#prefix__g)"
						d="M21.999 6.167v11.667a.84.84 0 0 1-.371.695l-5 3.334a.83.83 0 0 0 .37-.696V2.834a.84.84 0 0 0-.383-.696l5.013 3.333a.84.84 0 0 1 .37.696"
					/>
				</g>
			</g>
			<defs>
				<linearGradient id="prefix__c" x1={18.249} x2={3.398} y1={2} y2={16.947} gradientUnits="userSpaceOnUse">
					<stop stopColor="#7252AA" />
					<stop offset={1} stopColor="#7252AA" />
				</linearGradient>
				<linearGradient id="prefix__e" x1={3.874} x2={17.832} y1={5.646} y2={21.27} gradientUnits="userSpaceOnUse">
					<stop stopColor="#AE7FE2" />
					<stop offset={1} stopColor="#9A70D4" />
				</linearGradient>
				<linearGradient id="prefix__g" x1={19.248} x2={19.248} y1={1.735} y2={21.846} gradientUnits="userSpaceOnUse">
					<stop stopColor="#D59DFF" />
					<stop offset={1} stopColor="#C18EF1" />
				</linearGradient>
				<filter
					id="prefix__b"
					width={20.469}
					height={18.258}
					x={1.745}
					y={1.56}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
					<feOffset dy={0.028} />
					<feGaussianBlur stdDeviation={0.028} />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
					<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_3603_1086" />
					<feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
					<feOffset dy={0.147} />
					<feGaussianBlur stdDeviation={0.294} />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0" />
					<feBlend in2="effect1_dropShadow_3603_1086" result="effect2_dropShadow_3603_1086" />
					<feBlend in="SourceGraphic" in2="effect2_dropShadow_3603_1086" result="shape" />
				</filter>
				<filter
					id="prefix__d"
					width={20.469}
					height={18.258}
					x={1.745}
					y={4.476}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
					<feOffset dy={0.028} />
					<feGaussianBlur stdDeviation={0.028} />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
					<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_3603_1086" />
					<feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
					<feOffset dy={0.147} />
					<feGaussianBlur stdDeviation={0.294} />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0" />
					<feBlend in2="effect1_dropShadow_3603_1086" result="effect2_dropShadow_3603_1086" />
					<feBlend in="SourceGraphic" in2="effect2_dropShadow_3603_1086" result="shape" />
				</filter>
				<filter
					id="prefix__f"
					width={8.906}
					height={23.248}
					x={14.854}
					y={0.376}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
					<feOffset />
					<feGaussianBlur stdDeviation={0.015} />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
					<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_3603_1086" />
					<feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
					<feOffset />
					<feGaussianBlur stdDeviation={0.881} />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
					<feBlend in2="effect1_dropShadow_3603_1086" result="effect2_dropShadow_3603_1086" />
					<feBlend in="SourceGraphic" in2="effect2_dropShadow_3603_1086" result="shape" />
				</filter>
			</defs>
		</svg>
	);
};

IconLogoVisualStudioColor.iconName = "logo-visual-studio--color";

export default IconLogoVisualStudioColor;
