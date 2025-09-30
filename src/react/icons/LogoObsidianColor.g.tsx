import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoObsidianColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M16.9331 20.5704C16.812 21.4845 15.9174 22.1954 15.0307 21.9494C13.7651 21.6017 12.3002 21.0587 10.9838 20.9572L8.96431 20.8009C8.63861 20.7782 8.33268 20.6364 8.10493 20.4025L4.62837 16.8204C4.44188 16.6297 4.31717 16.3871 4.27049 16.1245C4.22381 15.8618 4.25732 15.5911 4.36665 15.3478C4.36665 15.3478 6.51509 10.6212 6.59712 10.3751C6.67524 10.129 6.97212 7.98451 7.14399 6.83607C7.19087 6.52748 7.33931 6.25013 7.57368 6.0431L11.687 2.33998C11.8226 2.21815 11.9818 2.12546 12.1547 2.06765C12.3276 2.00984 12.5105 1.98813 12.6921 2.00388C12.8738 2.01962 13.0502 2.07249 13.2106 2.15919C13.371 2.2459 13.5118 2.3646 13.6245 2.50795L17.0776 6.89857C17.2696 7.1499 17.3739 7.45728 17.3745 7.77357C17.3745 8.6056 17.4448 10.3126 17.9057 11.4142C18.3549 12.4806 19.1752 13.6408 19.6049 14.2072C19.6867 14.3131 19.7352 14.4409 19.7442 14.5745C19.7533 14.708 19.7225 14.8412 19.6557 14.9572C19.0982 15.8926 18.5147 16.8122 17.9057 17.715C17.3198 18.5861 17.0502 19.6642 16.9292 20.5704H16.9331Z"
				fill="#6C31E3"
			/>
			<path
				d="M8.47921 20.6759C10.0964 17.3947 10.0495 15.0431 9.36203 13.3712C8.72921 11.8243 7.55343 10.8517 6.62765 10.2462C6.60421 10.3361 6.57687 10.4181 6.54171 10.5001L4.36593 15.3517C4.25611 15.5947 4.22196 15.8651 4.26794 16.1277C4.31393 16.3904 4.4379 16.6331 4.62374 16.8243L8.10421 20.4064C8.2122 20.5188 8.33913 20.6114 8.47921 20.6798V20.6759Z"
				fill="url(#paint0_radial_8576_787)"
			/>
			<path
				d="M12.8739 14.0157C13.3114 14.0626 13.7411 14.1564 14.1551 14.3126C15.4833 14.8087 16.6942 15.922 17.6903 18.0743C17.7606 17.9532 17.8309 17.8322 17.909 17.715C18.5173 16.8117 19.1008 15.8921 19.659 14.9572C19.7273 14.8416 19.7591 14.7082 19.75 14.5743C19.7409 14.4404 19.6915 14.3124 19.6083 14.2072C19.1786 13.6368 18.3583 12.4806 17.909 11.4142C17.4481 10.3126 17.3817 8.60168 17.3778 7.77356C17.3778 7.45715 17.2762 7.14856 17.0809 6.89856L13.6239 2.50793C13.6051 2.48515 13.5856 2.46301 13.5653 2.44153C13.7928 3.12267 13.8199 3.8548 13.6434 4.5509C13.4761 5.11295 13.2454 5.65418 12.9559 6.16418L12.6747 6.71887C12.2237 7.57738 11.9651 8.52378 11.9169 9.49231C11.87 10.6407 12.1044 12.0861 12.8739 14.0157Z"
				fill="url(#paint1_radial_8576_787)"
			/>
			<path
				d="M12.874 14.0158C12.1045 12.0861 11.8662 10.6408 11.917 9.48844C11.9653 8.51991 12.2239 7.57351 12.6748 6.715C12.7646 6.5275 12.8623 6.34391 12.9561 6.16422C13.2334 5.62125 13.5029 5.10953 13.6436 4.54703C13.82 3.85093 13.7929 3.1188 13.5654 2.43766C13.3285 2.17649 12.9976 2.01996 12.6454 2.00239C12.2931 1.98481 11.9483 2.10763 11.6865 2.34391L7.56934 6.04703C7.3397 6.25395 7.18918 6.53428 7.14355 6.84L6.64355 10.1603L6.62402 10.2502C7.55371 10.8556 8.7334 11.8283 9.3623 13.3752C9.49228 13.6884 9.59424 14.0126 9.66699 14.3439C10.7607 14.0783 11.8428 13.9142 12.874 14.0197V14.0158Z"
				fill="url(#paint2_radial_8576_787)"
			/>
			<path
				d="M15.0303 21.9533C15.917 22.1955 16.8115 21.4845 16.9326 20.5705C17.0334 19.6997 17.2901 18.8542 17.6904 18.0744C16.6904 15.9259 15.4834 14.8087 14.1592 14.3126C12.7529 13.7892 11.2217 13.9611 9.66699 14.34C10.0146 15.9181 9.80762 17.9845 8.47949 20.6759C8.63574 20.7462 8.7959 20.7931 8.96777 20.8048C8.96777 20.8048 9.9209 20.883 11.0615 20.965C12.1943 21.0431 13.8896 21.633 15.0303 21.9494V21.9533Z"
				fill="url(#paint3_radial_8576_787)"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11.9251 9.41418C11.8743 10.5548 12.0189 11.8673 12.7884 13.7931L12.5462 13.7736C11.8548 11.7618 11.7064 10.7267 11.7571 9.57043C11.8165 8.58638 12.0884 7.62687 12.554 6.75793C12.6478 6.56653 12.8665 6.20715 12.9642 6.02356C13.2415 5.4884 13.429 5.20325 13.5892 4.71106C13.8118 4.02747 13.765 3.69934 13.7376 3.37903C13.9173 4.547 13.2415 5.56653 12.7337 6.59778C12.2667 7.46689 11.991 8.42584 11.9251 9.41028V9.41418Z"
				fill="url(#paint4_radial_8576_787)"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.58887 13.4532C9.68262 13.6642 9.76855 13.8361 9.82324 14.0978L9.61621 14.1407C9.53418 13.8361 9.46777 13.6173 9.35059 13.3595C8.65527 11.7189 7.54199 10.8751 6.62793 10.254C7.72949 10.8478 8.8623 11.7775 9.58496 13.4532H9.58887Z"
				fill="url(#paint5_radial_8576_787)"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.83496 14.3009C10.2178 16.0978 9.78809 18.3712 8.52246 20.5861C9.58105 18.3907 10.0928 16.2853 9.66699 14.3361L9.83496 14.3009Z"
				fill="url(#paint6_radial_8576_787)"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14.2061 14.1408C16.2803 14.9181 17.0811 16.6252 17.6787 18.047C16.9365 16.5588 15.9131 14.9103 14.1318 14.297C12.7725 13.8361 11.6279 13.8908 9.66699 14.3361L9.62402 14.1408C11.7021 13.6681 12.7881 13.6134 14.2061 14.1408Z"
				fill="url(#paint7_radial_8576_787)"
			/>
			<defs>
				<radialGradient
					id="paint0_radial_8576_787"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(-2.30469 -8.78906 5.85938 -1.52344 8.30343 20.3517)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="white" stopOpacity={0.4} />
					<stop offset={1} stopOpacity={0.1} />
				</radialGradient>
				<radialGradient
					id="paint1_radial_8576_787"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(1.95313 -14.8047 10.9375 1.44531 16.0614 16.6095)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="white" stopOpacity={0.6} />
					<stop offset={1} stopColor="white" stopOpacity={0.1} />
				</radialGradient>
				<radialGradient
					id="paint2_radial_8576_787"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(2.69531 -12.4609 8.51563 1.83594 8.85059 13.9845)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="white" stopOpacity={0.8} />
					<stop offset={1} stopColor="white" stopOpacity={0.4} />
				</radialGradient>
				<radialGradient
					id="paint3_radial_8576_787"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(-3.75 -6.36719 7.30469 -4.33594 15.0967 22.0001)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="white" stopOpacity={0.3} />
					<stop offset={1} stopOpacity={0.3} />
				</radialGradient>
				<radialGradient
					id="paint4_radial_8576_787"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(-1.40625 6.48437 -4.375 -0.9375 14.1087 7.00012)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="white" stopOpacity={0} />
					<stop offset={1} stopColor="white" stopOpacity={0.2} />
				</radialGradient>
				<radialGradient
					id="paint5_radial_8576_787"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(3.4375 3.47656 -7.42187 7.30469 6.33496 10.5939)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="white" stopOpacity={0.2} />
					<stop offset={1} stopColor="white" stopOpacity={0.4} />
				</radialGradient>
				<radialGradient
					id="paint6_radial_8576_787"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(0.351563 5.07813 -10.7813 0.78125 10.3975 13.0861)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="white" stopOpacity={0.2} />
					<stop offset={1} stopColor="white" stopOpacity={0.3} />
				</radialGradient>
				<radialGradient
					id="paint7_radial_8576_787"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(-7.73438 -4.0625 12.7734 -24.3359 17.624 17.5861)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="white" stopOpacity={0.2} />
					<stop offset={0.5} stopColor="white" stopOpacity={0.2} />
					<stop offset={1} stopColor="white" stopOpacity={0.3} />
				</radialGradient>
			</defs>
		</svg>
	);
};

IconLogoObsidianColor.iconName = "logo-obsidian--color";

export default IconLogoObsidianColor;
