import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoObsidianColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#6C31E3"
				d="M16.933 20.57c-.121.915-1.016 1.625-1.902 1.38-1.266-.348-2.73-.891-4.047-.993l-2.02-.156a1.33 1.33 0 0 1-.86-.398L4.629 16.82a1.33 1.33 0 0 1-.261-1.472s2.148-4.727 2.23-4.973c.078-.246.375-2.39.547-3.539.047-.309.195-.586.43-.793l4.113-3.703a1.33 1.33 0 0 1 1.938.168l3.453 4.39c.192.252.296.56.297.876 0 .832.07 2.539.53 3.64.45 1.067 1.27 2.227 1.7 2.793a.675.675 0 0 1 .05.75 58 58 0 0 1-1.75 2.758c-.585.871-.855 1.95-.976 2.855z"
			/>
			<path
				fill="url(#prefix__a)"
				d="M8.48 20.676c1.616-3.281 1.57-5.633.882-7.305-.633-1.547-1.809-2.52-2.734-3.125q-.035.133-.086.254l-2.176 4.852a1.33 1.33 0 0 0 .258 1.472l3.48 3.582q.163.17.375.274z"
			/>
			<path
				fill="url(#prefix__b)"
				d="M12.874 14.016c.437.047.867.14 1.281.297 1.328.496 2.54 1.609 3.535 3.761.07-.12.14-.242.219-.359a60 60 0 0 0 1.75-2.758.66.66 0 0 0-.05-.75c-.43-.57-1.25-1.726-1.7-2.793-.46-1.101-.527-2.812-.531-3.64 0-.317-.102-.625-.297-.875l-3.457-4.391-.059-.066a3.75 3.75 0 0 1 .078 2.109 7.7 7.7 0 0 1-.687 1.613l-.281.555a6.7 6.7 0 0 0-.758 2.773c-.047 1.149.187 2.594.957 4.524"
			/>
			<path
				fill="url(#prefix__c)"
				d="M12.874 14.016c-.77-1.93-1.008-3.375-.957-4.528a6.7 6.7 0 0 1 .758-2.773c.09-.187.187-.371.281-.55.277-.544.547-1.055.688-1.618a3.75 3.75 0 0 0-.079-2.11 1.33 1.33 0 0 0-1.878-.093L7.569 6.047c-.23.207-.38.487-.425.793l-.5 3.32-.02.09c.93.606 2.11 1.578 2.738 3.125q.195.471.305.969c1.094-.266 2.176-.43 3.207-.324z"
			/>
			<path
				fill="url(#prefix__d)"
				d="M15.03 21.953c.887.242 1.781-.468 1.903-1.383.1-.87.357-1.716.757-2.496-1-2.148-2.207-3.265-3.53-3.761-1.407-.524-2.938-.352-4.493.027.348 1.578.14 3.645-1.188 6.336.157.07.317.117.489.129 0 0 .953.078 2.094.16 1.132.078 2.828.668 3.968.984z"
			/>
			<path
				fill="url(#prefix__e)"
				fillRule="evenodd"
				d="M11.925 9.414c-.05 1.14.094 2.453.863 4.38l-.242-.02c-.691-2.012-.84-3.047-.789-4.204.06-.984.331-1.943.797-2.812.094-.191.313-.55.41-.734.277-.536.465-.82.625-1.313.223-.684.176-1.012.149-1.332.18 1.168-.496 2.188-1.004 3.219a6.9 6.9 0 0 0-.809 2.812z"
				clipRule="evenodd"
			/>
			<path
				fill="url(#prefix__f)"
				fillRule="evenodd"
				d="M9.589 13.453c.094.211.18.383.234.645l-.207.043a4.7 4.7 0 0 0-.265-.781c-.696-1.641-1.809-2.485-2.723-3.106 1.101.594 2.234 1.524 2.957 3.2z"
				clipRule="evenodd"
			/>
			<path
				fill="url(#prefix__g)"
				fillRule="evenodd"
				d="M9.835 14.3c.383 1.798-.047 4.071-1.313 6.286 1.059-2.195 1.57-4.3 1.145-6.25z"
				clipRule="evenodd"
			/>
			<path
				fill="url(#prefix__h)"
				fillRule="evenodd"
				d="M14.206 14.14c2.074.778 2.875 2.485 3.473 3.907-.742-1.488-1.766-3.137-3.547-3.75-1.36-.46-2.504-.406-4.465.04l-.043-.196c2.078-.473 3.164-.528 4.582 0"
				clipRule="evenodd"
			/>
			<defs>
				<radialGradient
					id="prefix__a"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(-2.30469 -8.78906 5.85938 -1.52344 8.303 20.352)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#fff" stopOpacity={0.4} />
					<stop offset={1} stopOpacity={0.1} />
				</radialGradient>
				<radialGradient
					id="prefix__b"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(1.95313 -14.8047 10.9375 1.44531 16.061 16.61)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#fff" stopOpacity={0.6} />
					<stop offset={1} stopColor="#fff" stopOpacity={0.1} />
				</radialGradient>
				<radialGradient
					id="prefix__c"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(2.69531 -12.4609 8.51563 1.83594 8.85 13.985)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#fff" stopOpacity={0.8} />
					<stop offset={1} stopColor="#fff" stopOpacity={0.4} />
				</radialGradient>
				<radialGradient
					id="prefix__d"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(-3.75 -6.36719 7.30469 -4.33594 15.097 22)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#fff" stopOpacity={0.3} />
					<stop offset={1} stopOpacity={0.3} />
				</radialGradient>
				<radialGradient
					id="prefix__e"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(-1.40625 6.48437 -4.375 -.9375 14.109 7)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#fff" stopOpacity={0} />
					<stop offset={1} stopColor="#fff" stopOpacity={0.2} />
				</radialGradient>
				<radialGradient
					id="prefix__f"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(3.4375 3.47656 -7.42187 7.30469 6.335 10.594)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#fff" stopOpacity={0.2} />
					<stop offset={1} stopColor="#fff" stopOpacity={0.4} />
				</radialGradient>
				<radialGradient
					id="prefix__g"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(.35156 5.07813 -10.7813 .78125 10.398 13.086)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#fff" stopOpacity={0.2} />
					<stop offset={1} stopColor="#fff" stopOpacity={0.3} />
				</radialGradient>
				<radialGradient
					id="prefix__h"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(-7.73438 -4.0625 12.7734 -24.3359 17.624 17.586)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#fff" stopOpacity={0.2} />
					<stop offset={0.5} stopColor="#fff" stopOpacity={0.2} />
					<stop offset={1} stopColor="#fff" stopOpacity={0.3} />
				</radialGradient>
			</defs>
		</svg>
	);
};

IconLogoObsidianColor.iconName = "logo-obsidian--color";

export default IconLogoObsidianColor;
