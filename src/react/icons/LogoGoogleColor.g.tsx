import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#FC4C53"
				d="M21.418 10.182H12v3.873h5.382a4.6 4.6 0 0 1-2.01 3.009c-.89.6-2.027.963-3.372.963-2.6 0-4.81-1.754-5.6-4.118h-.012L6.4 13.9c-.2-.6-.318-1.236-.318-1.9s.118-1.3.318-1.9c.79-2.364 3-4.118 5.6-4.118 1.473 0 2.782.509 3.827 1.49l2.864-2.863C16.955 2.991 14.7 2 12 2 8.09 2 4.718 4.245 3.073 7.518A9.9 9.9 0 0 0 2 12c0 1.618.39 3.136 1.073 4.482v.009C4.718 19.755 8.09 22 12 22c2.7 0 4.964-.89 6.618-2.418 1.891-1.746 2.982-4.31 2.982-7.355 0-.709-.064-1.39-.182-2.045"
			/>
			<mask
				id="prefix__a"
				width={20}
				height={20}
				x={2}
				y={2}
				maskUnits="userSpaceOnUse"
				style={{
					maskType: "luminance",
				}}
			>
				<path
					fill="#fff"
					d="M21.418 10.182H12v3.873h5.382a4.6 4.6 0 0 1-2.01 3.009c-.89.6-2.027.963-3.372.963-2.6 0-4.81-1.754-5.6-4.118h-.012L6.4 13.9c-.2-.6-.318-1.236-.318-1.9s.118-1.3.318-1.9c.79-2.364 3-4.118 5.6-4.118 1.473 0 2.782.509 3.827 1.49l2.864-2.863C16.955 2.991 14.7 2 12 2 8.09 2 4.718 4.245 3.073 7.518A9.9 9.9 0 0 0 2 12c0 1.618.39 3.136 1.073 4.482v.009C4.718 19.755 8.09 22 12 22c2.7 0 4.964-.89 6.618-2.418 1.891-1.746 2.982-4.31 2.982-7.355 0-.709-.064-1.39-.182-2.045"
				/>
			</mask>
			<g mask="url(#prefix__a)">
				<path
					fill="url(#prefix__b)"
					d="M4.405 22.947c3.894 0 7.05-4.261 7.05-9.517 0-5.257-3.156-9.518-7.05-9.518s-7.05 4.261-7.05 9.518c0 5.256 3.157 9.517 7.05 9.517"
				/>
				<path
					fill="url(#prefix__c)"
					d="M16.565 32.601c7.854-.981 13.617-6.608 12.872-12.57-.744-5.96-7.715-9.997-15.569-9.016S.251 17.623.996 23.585c.744 5.96 7.715 9.997 15.569 9.016"
				/>
				<path fill="url(#prefix__d)" d="m11.186 8.618.446 5.088.566 3.406 6.693 6.226 7.825-14.452z" />
			</g>
			<defs>
				<radialGradient
					id="prefix__b"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(7.05027 0 0 9.51681 4.405 13.43)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.368} stopColor="#FFCF09" />
					<stop offset={0.718} stopColor="#FFCF09" stopOpacity={0.7} />
					<stop offset={1} stopColor="#FFCF09" stopOpacity={0} />
				</radialGradient>
				<radialGradient
					id="prefix__c"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="rotate(-7.12 182.886 -111.397)scale(14.3318 10.8774)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.383} stopColor="#34A853" />
					<stop offset={0.706} stopColor="#34A853" stopOpacity={0.7} />
					<stop offset={1} stopColor="#34A853" stopOpacity={0} />
				</radialGradient>
				<linearGradient id="prefix__d" x1={22.507} x2={12.134} y1={6.806} y2={19.545} gradientUnits="userSpaceOnUse">
					<stop offset={0.671} stopColor="#4285F4" />
					<stop offset={0.885} stopColor="#4285F4" stopOpacity={0} />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoGoogleColor.iconName = "logo-google--color";

export default IconLogoGoogleColor;
