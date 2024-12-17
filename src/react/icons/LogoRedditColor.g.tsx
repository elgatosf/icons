import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoRedditColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<g clipPath="url(#prefix__a)">
				<path
					fill="#FF4500"
					d="M12 2C6.477 2 2 6.477 2 12a9.97 9.97 0 0 0 2.929 7.071l-1.905 1.905A.6.6 0 0 0 3.448 22H12c5.523 0 10-4.477 10-10S17.523 2 12 2"
				/>
				<path fill="url(#prefix__b)" d="M17.67 13.995a2.335 2.335 0 1 0 0-4.67 2.335 2.335 0 0 0 0 4.67" />
				<path fill="url(#prefix__c)" d="M6.335 13.996a2.335 2.335 0 1 0 0-4.67 2.335 2.335 0 0 0 0 4.67" />
				<path
					fill="url(#prefix__d)"
					d="M12.006 18.667c3.682 0 6.667-2.24 6.667-5 0-2.762-2.985-5-6.667-5s-6.666 2.238-6.666 5c0 2.76 2.985 5 6.666 5"
				/>
				<path
					fill="#842123"
					d="M10.035 13.18c-.04.847-.602 1.155-1.256 1.155s-1.154-.433-1.115-1.28c.04-.847.602-1.408 1.256-1.408s1.154.687 1.115 1.534M16.347 13.054c.04.847-.46 1.28-1.115 1.28-.654 0-1.217-.307-1.255-1.154-.04-.847.46-1.534 1.115-1.534.654 0 1.217.56 1.255 1.408"
				/>
				<path
					fill="url(#prefix__e)"
					d="M13.977 13.254c.036.793.562 1.08 1.175 1.08.612 0 1.08-.43 1.043-1.223s-.563-1.312-1.175-1.312-1.08.662-1.043 1.455"
				/>
				<path
					fill="url(#prefix__f)"
					d="M10.034 13.254c-.036.793-.562 1.08-1.175 1.08-.612 0-1.08-.43-1.043-1.223s.563-1.312 1.175-1.312 1.08.662 1.043 1.455"
				/>
				<path
					fill="#BBCFDA"
					d="M12.005 14.9c-.827 0-1.62.04-2.352.112a.185.185 0 0 0-.156.254 2.72 2.72 0 0 0 2.508 1.638 2.72 2.72 0 0 0 2.507-1.638.185.185 0 0 0-.156-.254 24 24 0 0 0-2.351-.112"
				/>
				<path
					fill="#fff"
					d="M12.005 15.084c-.825 0-1.614.04-2.345.114a.188.188 0 0 0-.155.258 2.71 2.71 0 0 0 4.999 0 .188.188 0 0 0-.156-.258c-.73-.074-1.52-.114-2.344-.114"
				/>
				<path
					fill="url(#prefix__g)"
					d="M12.006 14.988c-.81 0-1.588.04-2.307.113a.185.185 0 0 0-.154.254 2.667 2.667 0 0 0 4.922 0 .185.185 0 0 0-.153-.254 23 23 0 0 0-2.308-.113"
				/>
				<path fill="url(#prefix__h)" d="M15.657 7.987a1.655 1.655 0 1 0 0-3.31 1.655 1.655 0 0 0 0 3.31" />
				<path
					fill="url(#prefix__i)"
					d="M11.982 8.877c-.199 0-.359-.083-.359-.21a2.69 2.69 0 0 1 2.688-2.689.359.359 0 1 1 0 .717 1.974 1.974 0 0 0-1.97 1.971c0 .128-.162.211-.36.211"
				/>
				<path
					fill="#FF6101"
					d="M9.598 13.646c0 .307-.326.444-.728.444-.403 0-.73-.137-.73-.444s.327-.556.73-.556.728.249.728.556M15.87 13.646c0 .307-.327.444-.729.444s-.729-.137-.729-.444.327-.556.729-.556.729.249.729.556"
				/>
				<path
					fill="#FFC49C"
					d="M9.373 12.813c.143 0 .259-.126.259-.283s-.116-.282-.26-.282c-.143 0-.259.126-.259.282 0 .157.116.283.26.283M15.539 12.813c.143 0 .259-.126.259-.283s-.116-.282-.26-.282c-.143 0-.259.126-.259.282 0 .157.116.283.26.283"
				/>
			</g>
			<defs>
				<radialGradient
					id="prefix__b"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(4.6798 0 0 4.08238 17.704 10.403)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FEFFFF" />
					<stop offset={0.4} stopColor="#FEFFFF" />
					<stop offset={0.51} stopColor="#F9FCFC" />
					<stop offset={0.62} stopColor="#EDF3F5" />
					<stop offset={0.7} stopColor="#DEE9EC" />
					<stop offset={0.72} stopColor="#D8E4E8" />
					<stop offset={0.76} stopColor="#CCD8DF" />
					<stop offset={0.8} stopColor="#C8D5DD" />
					<stop offset={0.83} stopColor="#CCD6DE" />
					<stop offset={0.85} stopColor="#D8DBE2" />
					<stop offset={0.88} stopColor="#EDE3E9" />
					<stop offset={0.9} stopColor="#FFEBEF" />
				</radialGradient>
				<radialGradient
					id="prefix__c"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(4.6798 0 0 4.08238 6.37 10.403)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FEFFFF" />
					<stop offset={0.4} stopColor="#FEFFFF" />
					<stop offset={0.51} stopColor="#F9FCFC" />
					<stop offset={0.62} stopColor="#EDF3F5" />
					<stop offset={0.7} stopColor="#DEE9EC" />
					<stop offset={0.72} stopColor="#D8E4E8" />
					<stop offset={0.76} stopColor="#CCD8DF" />
					<stop offset={0.8} stopColor="#C8D5DD" />
					<stop offset={0.83} stopColor="#CCD6DE" />
					<stop offset={0.85} stopColor="#D8DBE2" />
					<stop offset={0.88} stopColor="#EDE3E9" />
					<stop offset={0.9} stopColor="#FFEBEF" />
				</radialGradient>
				<radialGradient
					id="prefix__d"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(14.1162 0 0 9.91134 12.184 9.748)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FEFFFF" />
					<stop offset={0.4} stopColor="#FEFFFF" />
					<stop offset={0.51} stopColor="#F9FCFC" />
					<stop offset={0.62} stopColor="#EDF3F5" />
					<stop offset={0.7} stopColor="#DEE9EC" />
					<stop offset={0.72} stopColor="#D8E4E8" />
					<stop offset={0.76} stopColor="#CCD8DF" />
					<stop offset={0.8} stopColor="#C8D5DD" />
					<stop offset={0.83} stopColor="#CCD6DE" />
					<stop offset={0.85} stopColor="#D8DBE2" />
					<stop offset={0.88} stopColor="#EDE3E9" />
					<stop offset={0.9} stopColor="#FFEBEF" />
				</radialGradient>
				<radialGradient
					id="prefix__e"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(-1.17941 0 0 -1.73147 14.913 13.795)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#F60" />
					<stop offset={0.5} stopColor="#FF4500" />
					<stop offset={0.7} stopColor="#FC4301" />
					<stop offset={0.82} stopColor="#F43F07" />
					<stop offset={0.92} stopColor="#E53812" />
					<stop offset={1} stopColor="#D4301F" />
				</radialGradient>
				<radialGradient
					id="prefix__f"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(1.17941 0 0 1.73147 9.045 13.795)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#F60" />
					<stop offset={0.5} stopColor="#FF4500" />
					<stop offset={0.7} stopColor="#FC4301" />
					<stop offset={0.82} stopColor="#F43F07" />
					<stop offset={0.92} stopColor="#E53812" />
					<stop offset={1} stopColor="#D4301F" />
				</radialGradient>
				<radialGradient
					id="prefix__g"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(4.15877 0 0 2.74301 12.03 17.227)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#172E35" />
					<stop offset={0.29} stopColor="#0E1C21" />
					<stop offset={0.73} stopColor="#030708" />
					<stop offset={1} />
				</radialGradient>
				<radialGradient
					id="prefix__h"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="translate(15.696 4.664)scale(3.65058)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FEFFFF" />
					<stop offset={0.4} stopColor="#FEFFFF" />
					<stop offset={0.51} stopColor="#F9FCFC" />
					<stop offset={0.62} stopColor="#EDF3F5" />
					<stop offset={0.7} stopColor="#DEE9EC" />
					<stop offset={0.72} stopColor="#D8E4E8" />
					<stop offset={0.76} stopColor="#CCD8DF" />
					<stop offset={0.8} stopColor="#C8D5DD" />
					<stop offset={0.83} stopColor="#CCD6DE" />
					<stop offset={0.85} stopColor="#D8DBE2" />
					<stop offset={0.88} stopColor="#EDE3E9" />
					<stop offset={0.9} stopColor="#FFEBEF" />
				</radialGradient>
				<radialGradient
					id="prefix__i"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="translate(14.175 8.644)scale(2.99221)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.48} stopColor="#7A9299" />
					<stop offset={0.67} stopColor="#172E35" />
					<stop offset={0.75} />
					<stop offset={0.82} stopColor="#172E35" />
				</radialGradient>
				<clipPath id="prefix__a">
					<path fill="#fff" d="M2 2h20v20H2z" />
				</clipPath>
			</defs>
		</svg>
	);
};

IconLogoRedditColor.iconName = "logo-reddit--color";

export default IconLogoRedditColor;
