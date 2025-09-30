import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoVisualStudioCodeColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				id="mask0_8546_546"
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
					fillRule="evenodd"
					clipRule="evenodd"
					d="M16.1824 21.8635C16.4974 21.9862 16.8566 21.9783 17.1745 21.8253L21.2922 19.844C21.7248 19.6358 22 19.1979 22 18.7175V5.28272C22 4.80232 21.7249 4.36442 21.2922 4.15622L17.1745 2.17481C16.7572 1.97404 16.2689 2.02321 15.9027 2.28945C15.8504 2.32748 15.8006 2.36995 15.7538 2.41674L7.87102 9.60836L4.43744 7.00198C4.1178 6.75936 3.67073 6.77924 3.37387 7.04928L2.27261 8.05104C1.90949 8.38134 1.90907 8.9526 2.27171 9.28346L5.24942 12.0001L2.27171 14.7167C1.90907 15.0475 1.90949 15.6188 2.27261 15.9491L3.37387 16.9509C3.67073 17.2209 4.1178 17.2408 4.43744 16.9982L7.87102 14.3918L15.7538 21.5834C15.8785 21.7082 16.0249 21.8021 16.1824 21.8635ZM17.003 7.45984L11.0218 12.0001L17.003 16.5403V7.45984Z"
					fill="white"
				/>
			</mask>
			<g mask="url(#mask0_8546_546)">
				<path
					d="M21.2927 4.15926L17.1718 2.17513C16.6948 1.94546 16.1248 2.04234 15.7504 2.41668L2.26015 14.7167C1.8973 15.0475 1.89772 15.6188 2.26105 15.9491L3.36298 16.9508C3.66002 17.2209 4.10738 17.2407 4.4272 16.9981L20.6726 4.674C21.2176 4.26054 22.0004 4.64926 22.0004 5.33336V5.28552C22.0004 4.80532 21.7254 4.36758 21.2927 4.15926Z"
					fill="#0065A9"
				/>
				<g filter="url(#filter0_d_8546_546)">
					<path
						d="M21.2927 19.8408L17.1718 21.8249C16.6948 22.0546 16.1248 21.9577 15.7504 21.5834L2.26015 9.28342C1.8973 8.95258 1.89772 8.3813 2.26105 8.051L3.36298 7.04924C3.66002 6.7792 4.10738 6.75932 4.4272 7.00194L20.6726 19.3261C21.2176 19.7395 22.0004 19.3508 22.0004 18.6667V18.7146C22.0004 19.1947 21.7254 19.6325 21.2927 19.8408Z"
						fill="#007ACC"
					/>
				</g>
				<g filter="url(#filter1_d_8546_546)">
					<path
						d="M17.1716 21.8252C16.6944 22.0548 16.1244 21.9577 15.75 21.5833C16.2113 22.0446 17 21.7179 17 21.0655V2.93439C17 2.28204 16.2113 1.95534 15.75 2.41662C16.1244 2.04224 16.6944 1.94523 17.1716 2.17469L21.2917 4.1561C21.7247 4.3643 22 4.8022 22 5.2826V18.7174C22 19.1978 21.7247 19.6357 21.2917 19.8439L17.1716 21.8252Z"
						fill="#1F9CF0"
					/>
				</g>
				<g
					style={{
						mixBlendMode: "overlay",
					}}
					opacity={0.25}
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M16.1707 21.8635C16.4857 21.9862 16.8449 21.9783 17.1628 21.8254L21.2804 19.844C21.7131 19.6358 21.9883 19.1979 21.9883 18.7175V5.28273C21.9883 4.80231 21.7131 4.36441 21.2805 4.15621L17.1628 2.17481C16.7455 1.97404 16.2572 2.02321 15.891 2.28945C15.8387 2.32748 15.7888 2.36995 15.7421 2.41674L7.8593 9.60835L4.42572 7.00199C4.1061 6.75935 3.65901 6.77925 3.36215 7.04927L2.26089 8.05103C1.89777 8.38135 1.89735 8.95261 2.25999 9.28345L5.2377 12.0001L2.25999 14.7167C1.89735 15.0476 1.89777 15.6188 2.26089 15.9491L3.36215 16.9509C3.65901 17.2209 4.1061 17.2408 4.42572 16.9982L7.8593 14.3918L15.7421 21.5834C15.8668 21.7082 16.0132 21.8022 16.1707 21.8635ZM16.9913 7.45985L11.0101 12.0001L16.9913 16.5403V7.45985Z"
						fill="url(#paint0_linear_8546_546)"
					/>
				</g>
			</g>
			<defs>
				<filter
					id="filter0_d_8546_546"
					x={0.321613}
					y={5.16585}
					width={23.3451}
					height={18.4492}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset />
					<feGaussianBlur stdDeviation={0.833334} />
					<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
					<feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow_8546_546" />
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8546_546" result="shape" />
				</filter>
				<filter
					id="filter1_d_8546_546"
					x={14.0833}
					y={0.384846}
					width={9.58334}
					height={23.2303}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset />
					<feGaussianBlur stdDeviation={0.833334} />
					<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
					<feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow_8546_546" />
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8546_546" result="shape" />
				</filter>
				<linearGradient
					id="paint0_linear_8546_546"
					x1={11.9883}
					y1={2.05164}
					x2={11.9883}
					y2={21.9485}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="white" />
					<stop offset={1} stopColor="white" stopOpacity={0} />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoVisualStudioCodeColor.iconName = "logo-visual-studio-code--color";

export default IconLogoVisualStudioCodeColor;
