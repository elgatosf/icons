import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoPythonColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M11.8824 2.00016C11.0667 2.00395 10.2877 2.07352 9.60233 2.1948C7.58323 2.55151 7.21664 3.29813 7.21664 4.67502V6.49348H11.988V7.09964H7.21664H5.42599C4.03929 7.09964 2.82506 7.93312 2.44527 9.51869C2.00718 11.3361 1.98775 12.4702 2.44527 14.3679C2.78443 15.7805 3.59441 16.787 4.9811 16.787H6.62161V14.607C6.62161 13.0322 7.98422 11.643 9.60233 11.643H14.3681C15.6948 11.643 16.7538 10.5507 16.7538 9.21839V4.67502C16.7538 3.38195 15.663 2.41061 14.3681 2.1948C13.5485 2.05836 12.698 1.99637 11.8824 2.00016ZM9.30203 3.46272C9.79488 3.46272 10.1974 3.87177 10.1974 4.37473C10.1974 4.8759 9.79488 5.28118 9.30203 5.28118C8.80741 5.28118 8.4067 4.8759 8.4067 4.37473C8.4067 3.87177 8.80741 3.46272 9.30203 3.46272Z"
				fill="url(#paint0_linear_8546_478)"
			/>
			<path
				d="M17.348 7.09961V9.21837C17.348 10.861 15.9554 12.2436 14.3673 12.2436H9.60151C8.29607 12.2436 7.21582 13.3608 7.21582 14.6682V19.2116C7.21582 20.5046 8.34023 21.2652 9.60151 21.6362C11.1119 22.0803 12.5602 22.1605 14.3673 21.6362C15.5685 21.2884 16.753 20.5884 16.753 19.2116V17.3931H11.9872V16.7869H16.753H19.1387C20.5254 16.7869 21.0421 15.8197 21.5244 14.3679C22.0225 12.8733 22.0013 11.436 21.5244 9.51866C21.1817 8.1382 20.5271 7.09961 19.1387 7.09961H17.348ZM14.6676 18.6054C15.1622 18.6054 15.5629 19.0107 15.5629 19.5119C15.5629 20.0148 15.1622 20.4239 14.6676 20.4239C14.1748 20.4239 13.7723 20.0148 13.7723 19.5119C13.7723 19.0107 14.1748 18.6054 14.6676 18.6054Z"
				fill="url(#paint1_linear_8546_478)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_8546_478"
					x1={2.10937}
					y1={2}
					x2={13.1116}
					y2={11.3755}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#5A9FD4" />
					<stop offset={1} stopColor="#306998" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_8546_478"
					x1={14.553}
					y1={19.359}
					x2={10.6058}
					y2={13.8278}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FFD43B" />
					<stop offset={1} stopColor="#FFE873" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoPythonColor.iconName = "logo-python--color";

export default IconLogoPythonColor;
