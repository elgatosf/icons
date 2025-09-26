import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoCameraHubColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "s":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path fill="url(#prefix__a)" d="M15 8A7 7 0 1 0 1.001 8a7 7 0 0 0 14 0" />
					<path
						fill="url(#prefix__b)"
						d="M14.5 8A6.5 6.5 0 1 0 1.5 8.001a6.5 6.5 0 0 0 12.999 0m.5 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
					/>
					<path
						fill="#fff"
						d="M5.512 5.407v.312h4.995v-.625H5.512zm4.995 5.187v-.312H5.512v.625h4.995zm1.559-3.986-.307.061c.082.413.147.882.147 1.331h.625c0-.504-.072-1.016-.159-1.453zM12.218 8h-.312c0 .45-.065.919-.147 1.332l.307.06.306.061c.087-.436.159-.948.159-1.453zM3.936 9.374l.307-.061A7 7 0 0 1 4.094 8H3.47c0 .485.073.996.16 1.434zM3.782 8h.312c0-.427.065-.893.149-1.312l-.307-.06-.306-.062c-.088.44-.16.95-.16 1.434zm1.73 2.594v-.312c-.626 0-1.156-.397-1.27-.97l-.306.062-.306.06c.18.906 1.001 1.473 1.882 1.473zm4.995 0v.313c.87 0 1.687-.555 1.865-1.454l-.306-.06-.307-.061c-.111.561-.633.95-1.252.95zm0-5.187v.312c.62 0 1.14.389 1.252.95l.307-.06.306-.062c-.178-.898-.996-1.453-1.865-1.453zm-4.995 0v-.313c-.88 0-1.702.567-1.882 1.472l.306.061.307.061c.113-.572.643-.969 1.269-.969zM9 8a1 1 0 1 0-1.999 0 1 1 0 0 0 2 0m.626 0a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M4.438 7.813c0-.07.056-.125.125-.125h.688c.069 0 .125.056.125.125v.375a.125.125 0 0 1-.125.125h-.688a.125.125 0 0 1-.125-.125z"
					/>
					<path
						fill="url(#prefix__c)"
						d="M14.969 8A6.969 6.969 0 1 0 1.032 8a6.969 6.969 0 0 0 13.937 0m.032 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
					/>
					<defs>
						<linearGradient id="prefix__a" x1={8.001} x2={8.001} y1={1.001} y2={15} gradientUnits="userSpaceOnUse">
							<stop stopColor="#070D48" />
							<stop offset={1} stopColor="#060C1C" />
						</linearGradient>
						<linearGradient id="prefix__c" x1={8.001} x2={8.001} y1={1.001} y2={15} gradientUnits="userSpaceOnUse">
							<stop stopColor="#fff" />
							<stop offset={1} stopColor="#DBDBDB" />
						</linearGradient>
						<radialGradient
							id="prefix__b"
							cx={0}
							cy={0}
							r={1}
							gradientTransform="rotate(90 3.5 4.5)scale(6.99957)"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FEFEFE" />
							<stop offset={1} stopColor="#BFBFBF" />
						</radialGradient>
					</defs>
				</svg>
			);
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 20 20"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path fill="url(#prefix__a)" d="M18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0" />
					<path
						fill="url(#prefix__b)"
						d="M17.428 10a7.428 7.428 0 1 0-14.856 0 7.428 7.428 0 0 0 14.856 0M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
					/>
					<path
						fill="#fff"
						d="M7.156 7.036v.357h5.709v-.714h-5.71zm5.709 5.928v-.357h-5.71v.714h5.71zm1.781-4.555-.35.07c.094.471.168 1.007.168 1.521h.714c0-.577-.082-1.162-.181-1.66zM14.821 10h-.357c0 .514-.074 1.05-.168 1.521l.35.07.35.07A8.7 8.7 0 0 0 15.179 10zm-9.466 1.57.35-.07a8 8 0 0 1-.17-1.5h-.714c0 .554.084 1.137.184 1.639zM5.178 10h.358c0-.489.074-1.022.17-1.5l-.351-.07-.35-.069A8.7 8.7 0 0 0 4.82 10zm1.978 2.964v-.357c-.716 0-1.32-.454-1.45-1.107l-.351.07-.35.069c.205 1.035 1.145 1.682 2.15 1.682zm5.709 0v.357c.993 0 1.928-.633 2.132-1.66l-.35-.07-.35-.07c-.128.642-.725 1.086-1.432 1.086zm0-5.928v.357c.707 0 1.304.444 1.431 1.086l.35-.07.35-.07c-.203-1.027-1.138-1.66-2.131-1.66zm-5.71 0v-.357c-1.005 0-1.945.647-2.15 1.682l.35.07.35.07c.13-.654.735-1.108 1.45-1.108zM11.143 10a1.142 1.142 0 1 0-2.285 0 1.142 1.142 0 0 0 2.285 0m.714 0a1.858 1.858 0 1 1-3.715 0 1.858 1.858 0 0 1 3.715 0M5.929 9.786c0-.08.064-.143.143-.143h.785c.08 0 .143.064.143.143v.428a.143.143 0 0 1-.143.143h-.785a.143.143 0 0 1-.143-.143z"
					/>
					<path
						fill="url(#prefix__c)"
						d="M17.964 10a7.965 7.965 0 1 0-15.929 0 7.965 7.965 0 0 0 15.93 0m.037 0A8 8 0 1 1 2 10a8 8 0 0 1 16 0"
					/>
					<defs>
						<linearGradient id="prefix__a" x1={10} x2={10} y1={2} y2={18} gradientUnits="userSpaceOnUse">
							<stop stopColor="#070D48" />
							<stop offset={1} stopColor="#060C1C" />
						</linearGradient>
						<linearGradient id="prefix__c" x1={10} x2={10} y1={2} y2={18} gradientUnits="userSpaceOnUse">
							<stop stopColor="#fff" />
							<stop offset={1} stopColor="#DBDBDB" />
						</linearGradient>
						<radialGradient
							id="prefix__b"
							cx={0}
							cy={0}
							r={1}
							gradientTransform="matrix(0 8 -8 0 10 2)"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FEFEFE" />
							<stop offset={1} stopColor="#BFBFBF" />
						</radialGradient>
					</defs>
				</svg>
			);
	}
};

IconLogoCameraHubColor.iconName = "logo-camera-hub--color";

export default IconLogoCameraHubColor;
