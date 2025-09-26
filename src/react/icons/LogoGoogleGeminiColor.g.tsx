import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleGeminiColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#fff"
				d="M19.833 10.94a12.9 12.9 0 0 1-4.045-2.728 12.84 12.84 0 0 1-3.344-5.865.457.457 0 0 0-.887 0q-.236.934-.616 1.82a12.9 12.9 0 0 1-2.73 4.045 12.84 12.84 0 0 1-5.864 3.345.457.457 0 0 0 0 .886q.934.235 1.82.616 2.31.995 4.045 2.729a12.8 12.8 0 0 1 3.345 5.865.458.458 0 0 0 .887 0q.235-.934.615-1.82a12.9 12.9 0 0 1 2.73-4.045 12.84 12.84 0 0 1 5.864-3.345.457.457 0 0 0 0-.887 12 12 0 0 1-1.82-.616"
			/>
			<mask
				id="prefix__b"
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
					fill="url(#prefix__a)"
					d="M12 2c.21 0 .392.143.443.347q.236.934.617 1.82a12.8 12.8 0 0 0 2.728 4.045 12.85 12.85 0 0 0 5.865 3.345.458.458 0 0 1 0 .886q-.934.236-1.82.617a12.9 12.9 0 0 0-4.045 2.728 12.86 12.86 0 0 0-3.345 5.865.457.457 0 0 1-.886 0 12.838 12.838 0 0 0-3.345-5.865 12.85 12.85 0 0 0-5.865-3.345.457.457 0 0 1 0-.886 12.849 12.849 0 0 0 5.865-3.345 12.84 12.84 0 0 0 3.345-5.865A.46.46 0 0 1 12 2"
				/>
			</mask>
			<g mask="url(#prefix__b)">
				<g filter="url(#prefix__c)">
					<path
						fill="#FFE432"
						d="M.195 17.635c2.31.82 4.966-.718 5.932-3.437.965-2.718-.125-5.587-2.436-6.408-2.31-.82-4.967.718-5.932 3.437s.125 5.588 2.436 6.408"
					/>
				</g>
				<g filter="url(#prefix__d)">
					<path
						fill="#FC413D"
						d="M10.454 8.672c3.175 0 5.748-2.63 5.748-5.875s-2.573-5.875-5.748-5.875c-3.174 0-5.748 2.63-5.748 5.875s2.574 5.875 5.748 5.875"
					/>
				</g>
				<g filter="url(#prefix__e)">
					<path
						fill="#00B95C"
						d="M8.22 27.46c3.314-.162 5.83-3.774 5.62-8.067s-3.066-7.642-6.38-7.48c-3.314.163-5.83 3.774-5.62 8.067s3.066 7.642 6.38 7.48"
					/>
				</g>
				<g filter="url(#prefix__f)">
					<path
						fill="#00B95C"
						d="M8.22 27.46c3.314-.162 5.83-3.774 5.62-8.067s-3.066-7.642-6.38-7.48c-3.314.163-5.83 3.774-5.62 8.067s3.066 7.642 6.38 7.48"
					/>
				</g>
				<g filter="url(#prefix__g)">
					<path
						fill="#00B95C"
						d="M11.54 24.862c2.778-1.69 3.522-5.54 1.661-8.6-1.86-3.058-5.622-4.167-8.4-2.477s-3.522 5.54-1.661 8.6c1.86 3.058 5.622 4.167 8.4 2.476"
					/>
				</g>
				<g filter="url(#prefix__h)">
					<path
						fill="#3186FF"
						d="M22.77 15.25c3.122 0 5.653-2.438 5.653-5.445s-2.531-5.444-5.654-5.444-5.654 2.437-5.654 5.444 2.532 5.445 5.654 5.445"
					/>
				</g>
				<g filter="url(#prefix__i)">
					<path
						fill="#FBBC04"
						d="M-2.026 14.618c2.875 2.187 7.075 1.5 9.382-1.532s1.844-7.264-1.03-9.45C3.45 1.45-.75 2.136-3.058 5.168s-1.844 7.264 1.03 9.45"
					/>
				</g>
				<g filter="url(#prefix__j)">
					<path
						fill="#3186FF"
						d="M12.707 17.85c3.431 2.36 7.98 1.702 10.16-1.468S24.032 8.729 20.6 6.369s-7.981-1.702-10.16 1.468-1.165 7.654 2.267 10.013"
					/>
				</g>
				<g filter="url(#prefix__k)">
					<path
						fill="#749BFF"
						d="M18.946 1.28c.873 1.187-.25 3.495-2.507 5.155s-4.794 2.044-5.667.857.249-3.495 2.506-5.156 4.795-2.043 5.668-.856"
					/>
				</g>
				<g filter="url(#prefix__l)">
					<path
						fill="#FC413D"
						d="M11.778 6.963c3.49-3.237 4.688-7.62 2.675-9.79S7.98-4.133 4.49-.895C.999 2.343-.199 6.727 1.813 8.896c2.013 2.17 6.474 1.305 9.965-1.933"
					/>
				</g>
				<g filter="url(#prefix__m)">
					<path
						fill="#FFEE48"
						d="M4.623 18.592c2.074 1.485 4.456 1.71 5.32.504s-.119-3.388-2.193-4.873c-2.075-1.485-4.457-1.71-5.32-.504-.864 1.207.118 3.388 2.193 4.873"
					/>
				</g>
			</g>
			<defs>
				<filter
					id="prefix__c"
					width={12.146}
					height={13.361}
					x={-4.13}
					y={6.032}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur result="effect1_foregroundBlur_3603_970" stdDeviation={0.769} />
				</filter>
				<filter
					id="prefix__d"
					width={26.36}
					height={26.613}
					x={-2.726}
					y={-10.509}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur result="effect1_foregroundBlur_3603_970" stdDeviation={3.716} />
				</filter>
				<filter
					id="prefix__e"
					width={24.661}
					height={28.194}
					x={-4.49}
					y={5.59}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur result="effect1_foregroundBlur_3603_970" stdDeviation={3.159} />
				</filter>
				<filter
					id="prefix__f"
					width={24.661}
					height={28.194}
					x={-4.49}
					y={5.59}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur result="effect1_foregroundBlur_3603_970" stdDeviation={3.159} />
				</filter>
				<filter
					id="prefix__g"
					width={24.747}
					height={25.294}
					x={-4.203}
					y={6.677}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur result="effect1_foregroundBlur_3603_970" stdDeviation={3.159} />
				</filter>
				<filter
					id="prefix__h"
					width={23.316}
					height={22.897}
					x={11.111}
					y={-1.643}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur result="effect1_foregroundBlur_3603_970" stdDeviation={3.002} />
				</filter>
				<filter
					id="prefix__i"
					width={24.23}
					height={24.422}
					x={-9.966}
					y={-3.084}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur result="effect1_foregroundBlur_3603_970" stdDeviation={2.721} />
				</filter>
				<filter
					id="prefix__j"
					width={24.443}
					height={24.031}
					x={4.432}
					y={0.094}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur result="effect1_foregroundBlur_3603_970" stdDeviation={2.43} />
				</filter>
				<filter
					id="prefix__k"
					width={17.463}
					height={16.087}
					x={6.127}
					y={-3.758}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur result="effect1_foregroundBlur_3603_970" stdDeviation={2.174} />
				</filter>
				<filter
					id="prefix__l"
					width={21.938}
					height={21.46}
					x={-2.836}
					y={-7.696}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur result="effect1_foregroundBlur_3603_970" stdDeviation={1.836} />
				</filter>
				<filter
					id="prefix__m"
					width={17.231}
					height={16.02}
					x={-2.429}
					y={8.398}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur result="effect1_foregroundBlur_3603_970" stdDeviation={2.273} />
				</filter>
				<linearGradient id="prefix__a" x1={7.685} x2={18.073} y1={15.382} y2={6.624} gradientUnits="userSpaceOnUse">
					<stop stopColor="#4893FC" />
					<stop offset={0.27} stopColor="#4893FC" />
					<stop offset={0.777} stopColor="#969DFF" />
					<stop offset={1} stopColor="#BD99FE" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoGoogleGeminiColor.iconName = "logo-google-gemini--color";

export default IconLogoGoogleGeminiColor;
