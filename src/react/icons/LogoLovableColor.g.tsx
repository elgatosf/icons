import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoLovableColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				id="prefix__b"
				width={18}
				height={19}
				x={3}
				y={2}
				maskUnits="userSpaceOnUse"
				style={{
					maskType: "alpha",
				}}
			>
				<path
					fill="url(#prefix__a)"
					fillRule="evenodd"
					d="M8.366 2.857a5.367 5.367 0 0 1 5.365 5.367v2.04h1.786a5.367 5.367 0 0 1 5.366 5.368A5.367 5.367 0 0 1 15.517 21H3V8.224a5.367 5.367 0 0 1 5.366-5.367"
					clipRule="evenodd"
				/>
			</mask>
			<g mask="url(#prefix__b)">
				<g filter="url(#prefix__c)">
					<path
						fill="#4B73FF"
						d="M10.844 24.62c6.686 0 12.105-5.408 12.105-12.079 0-6.67-5.42-12.078-12.105-12.078S-1.26 5.87-1.26 12.54s5.42 12.078 12.105 12.078"
					/>
				</g>
				<g filter="url(#prefix__d)">
					<path
						fill="#FF66F4"
						d="M12.172 17.991c8.562 0 15.503-5.407 15.503-12.078S20.735-6.165 12.172-6.165-3.33-.757-3.33 5.913 3.61 17.991 12.172 17.991"
					/>
				</g>
				<g filter="url(#prefix__e)">
					<path
						fill="#FF0105"
						d="M14.702 14.247c6.685 0 12.105-4.749 12.105-10.607S21.387-6.967 14.702-6.967 2.597-2.218 2.597 3.64s5.42 10.607 12.105 10.607"
					/>
				</g>
				<g filter="url(#prefix__f)">
					<path
						fill="#FE7B02"
						d="M12.39 13.174c4.02 0 7.28-3.252 7.28-7.264s-3.26-7.264-7.28-7.264S5.11 1.898 5.11 5.91s3.26 7.264 7.28 7.264"
					/>
				</g>
			</g>
			<defs>
				<filter
					id="prefix__c"
					width={35.036}
					height={34.982}
					x={-6.674}
					y={-4.95}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur result="effect1_foregroundBlur_8575_392" stdDeviation={2.706} />
				</filter>
				<filter
					id="prefix__d"
					width={41.833}
					height={34.982}
					x={-8.744}
					y={-11.578}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur result="effect1_foregroundBlur_8575_392" stdDeviation={2.706} />
				</filter>
				<filter
					id="prefix__e"
					width={35.036}
					height={32.04}
					x={-2.816}
					y={-12.38}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur result="effect1_foregroundBlur_8575_392" stdDeviation={2.706} />
				</filter>
				<filter
					id="prefix__f"
					width={25.386}
					height={25.354}
					x={-0.303}
					y={-6.767}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur result="effect1_foregroundBlur_8575_392" stdDeviation={2.706} />
				</filter>
				<linearGradient id="prefix__a" x1={9.018} x2={14.444} y1={6.045} y2={21.001} gradientUnits="userSpaceOnUse">
					<stop offset={0.025} stopColor="#FF8E63" />
					<stop offset={0.56} stopColor="#FF7EB0" />
					<stop offset={0.95} stopColor="#4B73FF" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoLovableColor.iconName = "logo-lovable--color";

export default IconLogoLovableColor;
