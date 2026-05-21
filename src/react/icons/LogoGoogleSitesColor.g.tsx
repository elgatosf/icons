import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleSitesColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<mask
				id="mask0_3602_713"
				style={{
					maskType: "alpha",
				}}
				maskUnits="userSpaceOnUse"
				x={2}
				y={4}
				width={20}
				height={16}
			>
				<path
					d="M2.40039 8.39771C2.40039 7.06891 2.40039 6.40457 2.60908 5.8776C2.75851 5.50018 2.98369 5.15737 3.27073 4.87033C3.55776 4.5833 3.90057 4.35812 4.27799 4.20869C4.80496 4 5.46931 4 6.79811 4H17.2027C18.5315 4 19.1958 4 19.7228 4.20869C20.1002 4.35812 20.443 4.5833 20.7301 4.87033C21.0171 5.15737 21.2423 5.50018 21.3917 5.8776C21.6004 6.40457 21.6004 7.06891 21.6004 8.39771V15.6023C21.6004 16.9311 21.6004 17.5954 21.3917 18.1224C21.2423 18.4998 21.0171 18.8426 20.7301 19.1297C20.443 19.4167 20.1002 19.6419 19.7228 19.7913C19.1958 20 18.5315 20 17.2027 20H6.79811C5.46942 20 4.80496 20 4.27799 19.7913C3.90057 19.6419 3.55776 19.4167 3.27073 19.1297C2.98369 18.8426 2.75851 18.4998 2.60908 18.1224C2.40039 17.5954 2.40039 16.9311 2.40039 15.6023V8.39771Z"
					fill="#579FFF"
				/>
			</mask>
			<g mask="url(#mask0_3602_713)">
				<path d="M2.40039 4H21.6004V20H2.40039V4Z" fill="#4FA0FF" />
				<path
					d="M18.0571 14.9714H17.6C16.7794 14.9714 16.1143 15.6366 16.1143 16.4571C16.1143 17.2777 16.7794 17.9429 17.6 17.9429H18.0571C18.8777 17.9429 19.5428 17.2777 19.5428 16.4571C19.5428 15.6366 18.8777 14.9714 18.0571 14.9714Z"
					fill="white"
				/>
				<path
					d="M8.11468 9.02856H2.40039V17.1428C2.40039 18.7208 3.67959 20 5.25753 20C6.83548 20 8.11468 18.7208 8.11468 17.1428V9.02856Z"
					fill="#9DD2FF"
				/>
				<path d="M2.40039 4H21.6004V9.02857H2.40039V4Z" fill="#3186FF" />
			</g>
			<mask
				id="mask1_3602_713"
				style={{
					maskType: "alpha",
				}}
				maskUnits="userSpaceOnUse"
				x={2}
				y={4}
				width={20}
				height={6}
			>
				<path
					d="M2.40039 8.39771C2.40039 7.06891 2.40039 6.40457 2.60908 5.8776C2.75851 5.50018 2.98369 5.15737 3.27073 4.87033C3.55776 4.5833 3.90057 4.35812 4.27799 4.20869C4.80496 4 5.4693 4 6.7981 4H16.9741C18.3029 4 18.9672 4 19.4942 4.20869C19.8716 4.35812 20.2144 4.5833 20.5015 4.87033C20.7885 5.15737 21.0137 5.50018 21.1631 5.8776C21.3718 6.40457 21.3718 7.06891 21.3718 8.39771V9.02857H2.40039V8.39771Z"
					fill="#3983FF"
				/>
			</mask>
			<g mask="url(#mask1_3602_713)">
				<g filter="url(#filter0_f_3602_713)">
					<path d="M1.48535 4H8.11392V20H1.48535V4Z" fill="url(#paint0_linear_3602_713)" />
				</g>
			</g>
			<defs>
				<filter
					id="filter0_f_3602_713"
					x={0.0224944}
					y={2.53714}
					width={9.55462}
					height={18.9257}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation={0.731429} result="effect1_foregroundBlur_3602_713" />
				</filter>
				<linearGradient
					id="paint0_linear_3602_713"
					x1={5.60307}
					y1={9.09143}
					x2={8.78707}
					y2={4.52114}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#A9A8FF" />
					<stop offset={1} stopColor="#336EF3" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoGoogleSitesColor.iconName = "logo-google-sites--color";

export default IconLogoGoogleSitesColor;
