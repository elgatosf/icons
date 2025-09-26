import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoStreamelementsColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
			<path
				fill="url(#prefix__a)"
				d="m12.027 2.271.435.845c2.88 1.032 4.86 3.812 4.86 6.89 0 4.035-3.285 7.318-7.324 7.318s-7.321-3.283-7.321-7.319c0-3.079 1.979-5.857 4.86-6.889l.434-.843A8.01 8.01 0 0 0 2 10.005C2 14.413 5.59 18 10 18s8-3.587 8-7.995a8.01 8.01 0 0 0-5.973-7.734"
			/>
			<mask
				id="prefix__b"
				width={14}
				height={14}
				x={3}
				y={3}
				maskUnits="userSpaceOnUse"
				style={{
					maskType: "luminance",
				}}
			>
				<path
					fill="#fff"
					d="M10 16.819a6.835 6.835 0 0 0 6.837-6.833 6.835 6.835 0 0 0-6.838-6.833 6.835 6.835 0 0 0-6.837 6.833A6.835 6.835 0 0 0 10 16.819"
				/>
			</mask>
			<g mask="url(#prefix__b)">
				<path
					fill="url(#prefix__c)"
					d="M16.85 9.824c-.039.52-.842 2.678-1.83 2.678-.401 0-.491-.586-.557-1.022-.178.695-1.405 2.199-2.314 2.199-1.654 0-2.039-3.486-2.15-3.951-.113.463-.498 3.951-2.152 3.951-.909 0-2.136-1.502-2.314-2.2-.066.437-.154 1.023-.557 1.023-.987 0-1.791-2.159-1.83-2.678-.211.313-.208 1.576.106 2.385a7.24 7.24 0 0 0 6.745 4.62 7.24 7.24 0 0 0 6.744-4.62c.314-.81.317-2.07.106-2.385z"
				/>
				<path
					fill="url(#prefix__d)"
					d="M10 13.689c.272.5.866 1.248 1.882 1.248s1.808-1.048 2.073-1.49c-.085.31-.257.976.296.976 1.269 0 2.186-2.005 2.186-2.005A6.91 6.91 0 0 1 10 16.827a6.91 6.91 0 0 1-6.437-4.41s.917 2.006 2.186 2.006c.555 0 .381-.667.296-.976.265.442 1.03 1.49 2.072 1.49 1.017 0 1.61-.75 1.883-1.248"
				/>
				<path
					fill="url(#prefix__e)"
					d="M11.612 15.937c-.624 0-1.11-.194-1.612-.506-.502.31-.988.506-1.612.506-.95 0-1.24-.28-1.584-.537.01.327.343.789.688.956.765.336 1.624.47 2.508.47s1.744-.135 2.509-.47c.344-.169.676-.629.688-.956-.345.257-.634.537-1.585.537"
				/>
			</g>
			<path
				fill="#FF4800"
				d="m9.076 6.668-.981 2.079a.46.46 0 0 0-.039.276l.311 1.878c.01.061.1.061.11 0l.168-1.024c.069-.425.295-.81.633-1.077l-.202-2.134zM10.924 6.668l.981 2.079c.04.085.055.181.039.276l-.311 1.88c-.01.06-.098.06-.11 0l-.168-1.026a1.73 1.73 0 0 0-.633-1.077l.202-2.134z"
			/>
			<path
				fill="url(#prefix__f)"
				d="M11.45 3.406 10.104.796a.117.117 0 0 0-.209 0L8.55 3.406a.57.57 0 0 0-.06.349l.679 4.767-.101.445.358.981a.06.06 0 0 0 .05.037h1.042a.06.06 0 0 0 .051-.037l.358-.98-.101-.446.678-4.767a.57.57 0 0 0-.06-.35z"
			/>
			<path
				fill="#FF4800"
				d="m9.953 7.735-.478 1.182a.93.93 0 0 0-.04.575l.51 2.042c.015.056.095.056.108 0l.51-2.042a.93.93 0 0 0-.04-.575l-.478-1.182c-.018-.041-.077-.041-.093 0z"
			/>
			<defs>
				<linearGradient id="prefix__a" x1={10} x2={10} y1={-2.273} y2={23.091} gradientUnits="userSpaceOnUse">
					<stop offset={0.3} stopColor="#00ADFF" />
					<stop offset={1} stopColor="#1542FF" />
				</linearGradient>
				<linearGradient id="prefix__c" x1={10} x2={10} y1={10.021} y2={19.137} gradientUnits="userSpaceOnUse">
					<stop stopColor="#FCE3AD" />
					<stop offset={0.07} stopColor="#FCE2A4" />
					<stop offset={0.19} stopColor="#FCE08B" />
					<stop offset={0.33} stopColor="#FCDD64" />
					<stop offset={0.48} stopColor="#FCDA32" />
					<stop offset={0.66} stopColor="#F9BC22" />
					<stop offset={1} stopColor="#F57700" />
				</linearGradient>
				<linearGradient id="prefix__d" x1={9.999} x2={9.999} y1={12.353} y2={17.534} gradientUnits="userSpaceOnUse">
					<stop stopColor="#FCD619" />
					<stop offset={0.35} stopColor="#F9B811" />
					<stop offset={1} stopColor="#F57700" />
				</linearGradient>
				<linearGradient id="prefix__e" x1={10} x2={10} y1={14.944} y2={17.332} gradientUnits="userSpaceOnUse">
					<stop stopColor="#F57700" />
					<stop offset={1} stopColor="#FF4800" />
				</linearGradient>
				<linearGradient id="prefix__f" x1={10} x2={10} y1={0.734} y2={12.781} gradientUnits="userSpaceOnUse">
					<stop stopColor="#E4E4E4" />
					<stop offset={0.88} stopColor="#B6B8B8" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoStreamelementsColor.iconName = "logo-streamelements--color";

export default IconLogoStreamelementsColor;
