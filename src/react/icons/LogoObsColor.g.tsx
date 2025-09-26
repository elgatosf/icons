import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoObsColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
					<path fill="url(#prefix__a)" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2" />
					<path
						fill="url(#prefix__b)"
						d="M11.951 2.118c5.41 0 9.794 4.385 9.794 9.794s-4.385 9.794-9.794 9.794-9.794-4.385-9.794-9.794 4.385-9.794 9.794-9.794"
					/>
					<path fill="url(#prefix__c)" d="M3.006 11.912a8.945 8.945 0 0 0 8.945 8.945 8.945 8.945 0 1 0-8.945-8.945" />
					<mask
						id="prefix__d"
						width={18}
						height={19}
						x={3}
						y={2}
						maskUnits="userSpaceOnUse"
						style={{
							maskType: "luminance",
						}}
					>
						<path fill="#fff" d="M3.006 11.912a8.945 8.945 0 0 0 8.945 8.945 8.945 8.945 0 1 0-8.945-8.945" />
					</mask>
					<g mask="url(#prefix__d)">
						<path fill="url(#prefix__e)" d="M20.896 2.967H3.006v17.89h17.89z" />
					</g>
					<mask
						id="prefix__f"
						width={18}
						height={18}
						x={3}
						y={3}
						maskUnits="userSpaceOnUse"
						style={{
							maskType: "luminance",
						}}
					>
						<path fill="#fff" d="M3.08 11.912a8.871 8.871 0 1 0 17.743 0 8.871 8.871 0 0 0-17.743 0" />
					</mask>
					<g mask="url(#prefix__f)">
						<path fill="url(#prefix__g)" d="M20.823 3.04H3.08v17.743h17.743z" />
					</g>
					<path
						fill="url(#prefix__h)"
						d="M15.433 9.06a4.012 4.012 0 0 1-6.489.658 4.01 4.01 0 0 1-.552-4.521 4 4 0 0 1 .393-.61 4 4 0 0 1 .522-.552 4 4 0 0 1 .471-.355 4.92 4.92 0 0 0-2.138 6.633c.006.007.008.006.018.006a4 4 0 0 1 .443.016 4.02 4.02 0 0 1 3.601 4.563 4 4 0 0 1-.93 2.052 4.025 4.025 0 0 1-4.267 1.212c.44.194.905.323 1.381.382a4.905 4.905 0 0 0 3.526-.92 5 5 0 0 0 1.245-1.335c.006-.008.017-.021.016-.03a3.989 3.989 0 0 1-.422-1.181 4 4 0 0 1 0-1.49 4.009 4.009 0 0 1 4.774-3.184 4 4 0 0 1 .784.25 4 4 0 0 1 .717.408 4 4 0 0 1 .426.35 4 4 0 0 1 .597.71 4 4 0 0 1 .38.722q.095.24.16.49a4.9 4.9 0 0 0-1.041-2.435 4.95 4.95 0 0 0-1.51-1.258 4.9 4.9 0 0 0-2.105-.581"
					/>
					<defs>
						<radialGradient
							id="prefix__a"
							cx={0}
							cy={0}
							r={1}
							gradientTransform="matrix(10 0 0 10 12 12)"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset={0.913} />
							<stop offset={1} stopOpacity={0} />
						</radialGradient>
						<radialGradient
							id="prefix__b"
							cx={0}
							cy={0}
							r={1}
							gradientTransform="translate(11.951 11.912)scale(9.79396)"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset={0.99} stopColor="#fff" />
							<stop offset={0.995} stopColor="#FDFDFD" />
							<stop offset={0.997} stopColor="#F6F6F6" />
							<stop offset={0.998} stopColor="#EBEBEB" />
							<stop offset={0.999} stopColor="#DADADA" />
							<stop offset={1} stopColor="#C7C7C7" />
						</radialGradient>
						<radialGradient
							id="prefix__c"
							cx={0}
							cy={0}
							r={1}
							gradientTransform="translate(11.95 11.912)scale(8.94502)"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset={0.99} stopOpacity={0.5} />
							<stop offset={1} stopOpacity={0} />
						</radialGradient>
						<radialGradient
							id="prefix__e"
							cx={0}
							cy={0}
							r={1}
							gradientTransform="translate(11.95 11.912)scale(8.94502)"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset={0.99} stopOpacity={0.5} />
							<stop offset={1} stopOpacity={0} />
						</radialGradient>
						<radialGradient
							id="prefix__g"
							cx={0}
							cy={0}
							r={1}
							gradientTransform="translate(11.951 11.942)scale(8.87117)"
							gradientUnits="userSpaceOnUse"
						>
							<stop />
							<stop offset={1} stopColor="#322F32" />
						</radialGradient>
						<radialGradient
							id="prefix__h"
							cx={0}
							cy={0}
							r={1}
							gradientTransform="matrix(7.1287 0 0 7.8209 13.297 11.13)"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#C2C0C2" />
							<stop offset={1} stopColor="#EBEBEB" />
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
					<path fill="url(#prefix__a)" d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16" />
					<path fill="url(#prefix__b)" d="M9.961 2.094a7.835 7.835 0 1 1 0 15.67 7.835 7.835 0 0 1 0-15.67" />
					<path fill="url(#prefix__c)" d="M2.805 9.93a7.156 7.156 0 1 0 14.312 0 7.156 7.156 0 0 0-14.312 0" />
					<mask
						id="prefix__d"
						width={16}
						height={16}
						x={2}
						y={2}
						maskUnits="userSpaceOnUse"
						style={{
							maskType: "luminance",
						}}
					>
						<path fill="#fff" d="M2.805 9.93a7.156 7.156 0 1 0 14.312 0 7.156 7.156 0 0 0-14.312 0" />
					</mask>
					<g mask="url(#prefix__d)">
						<path fill="url(#prefix__e)" d="M17.117 2.773H2.805v14.312h14.312z" />
					</g>
					<mask
						id="prefix__f"
						width={16}
						height={16}
						x={2}
						y={2}
						maskUnits="userSpaceOnUse"
						style={{
							maskType: "luminance",
						}}
					>
						<path fill="#fff" d="M2.864 9.93a7.097 7.097 0 1 0 14.194 0 7.097 7.097 0 0 0-14.194 0" />
					</mask>
					<g mask="url(#prefix__f)">
						<path fill="url(#prefix__g)" d="M17.058 2.832H2.864v14.194h14.194z" />
					</g>
					<path
						fill="url(#prefix__h)"
						d="M12.746 7.648a3.21 3.21 0 0 1-5.19.526 3.205 3.205 0 0 1-.128-4.104 3 3 0 0 1 .418-.442 3 3 0 0 1 .376-.284 3.94 3.94 0 0 0-1.71 5.306c.005.006.006.005.014.005a3 3 0 0 1 .355.013 3.216 3.216 0 0 1 2.88 3.65 3.2 3.2 0 0 1-1.545 2.315 3.22 3.22 0 0 1-2.612.296 3.9 3.9 0 0 0 2.175.293A3.9 3.9 0 0 0 9.53 14.5a4 4 0 0 0 .996-1.068c.004-.006.013-.017.012-.024a3.188 3.188 0 0 1-.337-2.137 3.208 3.208 0 0 1 5.36-1.74 3.2 3.2 0 0 1 .62.801 3.2 3.2 0 0 1 .29.737 3.93 3.93 0 0 0-.833-1.949 4 4 0 0 0-1.208-1.006 3.9 3.9 0 0 0-1.684-.465"
					/>
					<defs>
						<radialGradient
							id="prefix__a"
							cx={0}
							cy={0}
							r={1}
							gradientTransform="matrix(8 0 0 8 10 10)"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset={0.913} />
							<stop offset={1} stopOpacity={0} />
						</radialGradient>
						<radialGradient
							id="prefix__b"
							cx={0}
							cy={0}
							r={1}
							gradientTransform="translate(9.961 9.93)scale(7.83517)"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset={0.99} stopColor="#fff" />
							<stop offset={0.995} stopColor="#FDFDFD" />
							<stop offset={0.997} stopColor="#F6F6F6" />
							<stop offset={0.998} stopColor="#EBEBEB" />
							<stop offset={0.999} stopColor="#DADADA" />
							<stop offset={1} stopColor="#C7C7C7" />
						</radialGradient>
						<radialGradient
							id="prefix__c"
							cx={0}
							cy={0}
							r={1}
							gradientTransform="translate(9.96 9.93)scale(7.15601)"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset={0.99} stopOpacity={0.5} />
							<stop offset={1} stopOpacity={0} />
						</radialGradient>
						<radialGradient
							id="prefix__e"
							cx={0}
							cy={0}
							r={1}
							gradientTransform="translate(9.96 9.93)scale(7.15601)"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset={0.99} stopOpacity={0.5} />
							<stop offset={1} stopOpacity={0} />
						</radialGradient>
						<radialGradient
							id="prefix__g"
							cx={0}
							cy={0}
							r={1}
							gradientTransform="translate(9.961 9.954)scale(7.09693)"
							gradientUnits="userSpaceOnUse"
						>
							<stop />
							<stop offset={1} stopColor="#322F32" />
						</radialGradient>
						<radialGradient
							id="prefix__h"
							cx={0}
							cy={0}
							r={1}
							gradientTransform="matrix(5.70296 0 0 6.25672 11.038 9.305)"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#C2C0C2" />
							<stop offset={1} stopColor="#EBEBEB" />
						</radialGradient>
					</defs>
				</svg>
			);
	}
};

IconLogoObsColor.iconName = "logo-obs--color";

export default IconLogoObsColor;
