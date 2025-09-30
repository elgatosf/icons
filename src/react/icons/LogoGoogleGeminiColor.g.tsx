import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleGeminiColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
				d="M19.8334 10.9403C18.2926 10.277 16.9442 9.3674 15.7881 8.21156C14.6325 7.05615 13.7229 5.70781 13.0594 4.16656C12.8059 3.57733 12.6 2.96871 12.4437 2.34656C12.419 2.24759 12.3619 2.15973 12.2815 2.09693C12.2011 2.03414 12.102 2.00002 12 2C11.7903 2 11.6078 2.14312 11.5566 2.34687C11.4002 2.96892 11.1942 3.57744 10.9406 4.16656C10.2769 5.7076 9.36729 7.05594 8.21187 8.21156C7.05604 9.3674 5.7076 10.277 4.16656 10.9403C3.57734 11.194 2.96873 11.4001 2.34656 11.5566C2.24769 11.5813 2.15991 11.6383 2.09712 11.7186C2.03434 11.7988 2.00016 11.8978 2 11.9997C2 12.2091 2.14312 12.3919 2.34688 12.4428C2.96893 12.5993 3.57744 12.8053 4.16656 13.0591C5.7074 13.7224 7.05583 14.632 8.21187 15.7878C9.36812 16.9432 10.2777 18.2916 10.9406 19.8328C11.1943 20.422 11.4002 21.0307 11.5566 21.6528C11.6078 21.8559 11.7906 21.9997 12 21.9997C12.2094 21.9997 12.3922 21.8566 12.4434 21.6528C12.5998 21.0308 12.8058 20.4223 13.0594 19.8331C13.7229 18.2925 14.6325 16.9442 15.7881 15.7881C16.944 14.6323 18.2924 13.7227 19.8334 13.0594C20.4227 12.8056 21.0313 12.5996 21.6534 12.4431C21.7523 12.4184 21.8401 12.3614 21.9029 12.2811C21.9657 12.2008 21.9998 12.1019 22 12C22 11.79 21.8569 11.6078 21.6531 11.5562C21.0311 11.4 20.4226 11.1938 19.8334 10.9403Z"
				fill="white"
			/>
			<mask
				id="mask0_3603_970"
				style={{
					maskType: "alpha",
				}}
				maskUnits="userSpaceOnUse"
				x={2}
				y={2}
				width={20}
				height={20}
			>
				<path
					d="M12 2C12.2097 2 12.3922 2.14312 12.4434 2.34688C12.5999 2.96904 12.806 3.57766 13.0597 4.16687C13.723 5.70771 14.6325 7.05594 15.7881 8.21156C16.9444 9.3674 18.2927 10.277 19.8331 10.9403C20.4224 11.1941 21.0312 11.4001 21.6534 11.5566C21.8562 11.6078 22 11.79 22 12C22 12.21 21.8569 12.3922 21.6531 12.4434C21.031 12.5999 20.4223 12.806 19.8331 13.0597C18.2923 13.723 16.944 14.6325 15.7881 15.7881C14.6325 16.9444 13.723 18.2927 13.0597 19.8331C12.8061 20.4225 12.6 21.0312 12.4434 21.6534C12.4186 21.7523 12.3615 21.84 12.2812 21.9027C12.2009 21.9654 12.1019 21.9996 12 21.9997C11.898 21.9995 11.799 21.9653 11.7187 21.9025C11.6383 21.8396 11.5813 21.7518 11.5566 21.6528C11.4001 21.0306 11.194 20.422 10.9403 19.8328C10.2772 18.292 9.36771 16.9436 8.21187 15.7878C7.05562 14.6322 5.70729 13.7227 4.16687 13.0594C3.57756 12.8056 2.96883 12.5995 2.34656 12.4431C2.24767 12.4184 2.15987 12.3613 2.09709 12.2809C2.03432 12.2006 2.00015 12.1016 2 11.9997C2 11.7903 2.14312 11.6078 2.34688 11.5566C2.96904 11.4001 3.57766 11.194 4.16687 10.9403C5.70771 10.2768 7.05604 9.36719 8.21187 8.21156C9.3675 7.05594 10.277 5.70771 10.9403 4.16687C11.1941 3.57756 11.4001 2.96883 11.5566 2.34656C11.5813 2.24767 11.6384 2.15987 11.7187 2.09709C11.7991 2.03432 11.8981 2.00015 12 2Z"
					fill="url(#paint0_linear_3603_970)"
				/>
			</mask>
			<g mask="url(#mask0_3603_970)">
				<g filter="url(#filter0_f_3603_970)">
					<path
						d="M0.194632 17.6352C2.50539 18.4558 5.16129 16.9171 6.12674 14.1984C7.0922 11.4798 6.00161 8.61063 3.69084 7.79003C1.38008 6.96943 -1.27582 8.50811 -2.24127 11.2268C-3.20672 13.9454 -2.11613 16.8146 0.194632 17.6352Z"
						fill="#FFE432"
					/>
				</g>
				<g filter="url(#filter1_f_3603_970)">
					<path
						d="M10.4542 8.67186C13.6288 8.67186 16.2023 6.04167 16.2023 2.79717C16.2023 -0.447328 13.6288 -3.07751 10.4542 -3.07751C7.27958 -3.07751 4.70605 -0.447328 4.70605 2.79717C4.70605 6.04167 7.27958 8.67186 10.4542 8.67186Z"
						fill="#FC413D"
					/>
				</g>
				<g filter="url(#filter2_f_3603_970)">
					<path
						d="M8.22037 27.46C11.5343 27.298 14.0506 23.6864 13.8407 19.3934C13.6308 15.1004 10.7742 11.7515 7.46029 11.9135C4.1464 12.0756 1.63011 15.6871 1.84 19.9801C2.04989 24.2732 4.90648 27.622 8.22037 27.46Z"
						fill="#00B95C"
					/>
				</g>
				<g filter="url(#filter3_f_3603_970)">
					<path
						d="M8.22037 27.46C11.5343 27.298 14.0506 23.6864 13.8407 19.3934C13.6308 15.1004 10.7742 11.7515 7.46029 11.9135C4.1464 12.0756 1.63011 15.6871 1.84 19.9801C2.04989 24.2732 4.90648 27.622 8.22037 27.46Z"
						fill="#00B95C"
					/>
				</g>
				<g filter="url(#filter4_f_3603_970)">
					<path
						d="M11.5399 24.8615C14.3182 23.1711 15.0619 19.3214 13.201 16.2628C11.3401 13.2042 7.57931 12.0951 4.80103 13.7854C2.02275 15.4758 1.27905 19.3255 3.13993 22.3841C5.00082 25.4427 8.7616 26.5518 11.5399 24.8615Z"
						fill="#00B95C"
					/>
				</g>
				<g filter="url(#filter5_f_3603_970)">
					<path
						d="M22.7693 15.25C25.8919 15.25 28.4234 12.8123 28.4234 9.80528C28.4234 6.79827 25.8919 4.3606 22.7693 4.3606C19.6466 4.3606 17.1152 6.79827 17.1152 9.80528C17.1152 12.8123 19.6466 15.25 22.7693 15.25Z"
						fill="#3186FF"
					/>
				</g>
				<g filter="url(#filter6_f_3603_970)">
					<path
						d="M-2.02618 14.6182C0.849029 16.8047 5.04936 16.1187 7.35553 13.086C9.66169 10.0534 9.20039 5.82247 6.32517 3.63603C3.44996 1.44959 -0.750375 2.13557 -3.05654 5.16822C-5.3627 8.20087 -4.9014 12.4318 -2.02618 14.6182Z"
						fill="#FBBC04"
					/>
				</g>
				<g filter="url(#filter7_f_3603_970)">
					<path
						d="M12.7065 17.8502C16.1384 20.2096 20.6875 19.5523 22.8671 16.3819C25.0468 13.2116 24.0317 8.72873 20.5998 6.36926C17.1679 4.00978 12.6188 4.66713 10.4391 7.83749C8.25945 11.0079 9.27459 15.4907 12.7065 17.8502Z"
						fill="#3186FF"
					/>
				</g>
				<g filter="url(#filter8_f_3603_970)">
					<path
						d="M18.9456 1.28001C19.8188 2.4672 18.6966 4.77501 16.4394 6.43532C14.1825 8.09532 11.645 8.47876 10.7719 7.29157C9.89877 6.10439 11.0206 3.79689 13.2781 2.13626C15.5353 0.476261 18.0728 0.0928231 18.9456 1.28001Z"
						fill="#749BFF"
					/>
				</g>
				<g filter="url(#filter9_f_3603_970)">
					<path
						d="M11.7775 6.96337C15.268 3.72572 16.466 -0.657916 14.4533 -2.82775C12.4407 -4.99757 7.9795 -4.13193 4.48902 -0.894276C0.998538 2.34338 -0.199469 6.72701 1.81319 8.89684C3.82586 11.0667 8.28704 10.201 11.7775 6.96337Z"
						fill="#FC413D"
					/>
				</g>
				<g filter="url(#filter10_f_3603_970)">
					<path
						d="M4.62271 18.5921C6.69731 20.077 9.07907 20.3027 9.94253 19.0962C10.806 17.8898 9.82416 15.7081 7.74956 14.2233C5.67496 12.7385 3.2932 12.5128 2.42974 13.7192C1.56629 14.9256 2.54811 17.1073 4.62271 18.5921Z"
						fill="#FFEE48"
					/>
				</g>
			</g>
			<defs>
				<filter
					id="filter0_f_3603_970"
					x={-4.13027}
					y={6.03184}
					width={12.1463}
					height={13.3615}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation={0.76875} result="effect1_foregroundBlur_3603_970" />
				</filter>
				<filter
					id="filter1_f_3603_970"
					x={-2.72582}
					y={-10.5094}
					width={26.3598}
					height={26.6131}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation={3.71594} result="effect1_foregroundBlur_3603_970" />
				</filter>
				<filter
					id="filter2_f_3603_970"
					x={-4.49}
					y={5.58983}
					width={24.6607}
					height={28.1939}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation={3.15906} result="effect1_foregroundBlur_3603_970" />
				</filter>
				<filter
					id="filter3_f_3603_970"
					x={-4.49}
					y={5.58983}
					width={24.6607}
					height={28.1939}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation={3.15906} result="effect1_foregroundBlur_3603_970" />
				</filter>
				<filter
					id="filter4_f_3603_970"
					x={-4.20289}
					y={6.67663}
					width={24.7466}
					height={25.2936}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation={3.15906} result="effect1_foregroundBlur_3603_970" />
				</filter>
				<filter
					id="filter5_f_3603_970"
					x={11.1115}
					y={-1.64315}
					width={23.3161}
					height={22.8969}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation={3.00187} result="effect1_foregroundBlur_3603_970" />
				</filter>
				<filter
					id="filter6_f_3603_970"
					x={-9.96566}
					y={-3.08407}
					width={24.2302}
					height={24.4224}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation={2.72063} result="effect1_foregroundBlur_3603_970" />
				</filter>
				<filter
					id="filter7_f_3603_970"
					x={4.43164}
					y={0.0941162}
					width={24.4434}
					height={24.0311}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation={2.42969} result="effect1_foregroundBlur_3603_970" />
				</filter>
				<filter
					id="filter8_f_3603_970"
					x={6.12746}
					y={-3.75792}
					width={17.4629}
					height={16.0874}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation={2.17406} result="effect1_foregroundBlur_3603_970" />
				</filter>
				<filter
					id="filter9_f_3603_970"
					x={-2.83559}
					y={-7.69569}
					width={21.9378}
					height={21.4605}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation={1.83625} result="effect1_foregroundBlur_3603_970" />
				</filter>
				<filter
					id="filter10_f_3603_970"
					x={-2.42941}
					y={8.39786}
					width={17.2309}
					height={16.0197}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation={2.27281} result="effect1_foregroundBlur_3603_970" />
				</filter>
				<linearGradient
					id="paint0_linear_3603_970"
					x1={7.68531}
					y1={15.3816}
					x2={18.0731}
					y2={6.62375}
					gradientUnits="userSpaceOnUse"
				>
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
