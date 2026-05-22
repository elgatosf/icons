import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGooglePhotosColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M12 12V2.76693C12 2.68727 12 2.64861 12.0035 2.61464C12.0354 2.29074 12.2911 2.03507 12.615 2.00315C12.6481 1.99963 12.6876 1.99963 12.7673 1.99963C15.3559 1.99963 17.4548 4.23826 17.4548 6.99965C17.4548 9.76103 15.3559 11.9997 12.7673 11.9997H12.0003L12 12Z"
				fill="url(#paint0_radial_3602_739)"
			/>
			<path
				d="M12.0003 12H21.2729C21.6741 12 22 12.3262 22 12.7272V12.767C22 15.3556 19.7614 17.4545 17 17.4545C14.2386 17.4545 12 15.3556 12 12.767V12H12.0003Z"
				fill="url(#paint1_radial_3602_739)"
			/>
			<path
				d="M12.0007 12V21.233C12.0007 21.3127 12.0007 21.3513 11.9972 21.3853C11.9653 21.7092 11.7096 21.9649 11.3857 21.9968C11.3526 22.0003 11.3131 22.0003 11.2334 22.0003C8.64483 22.0003 6.5459 19.7617 6.5459 17.0003C6.5459 14.2389 8.64483 12.0003 11.2334 12.0003H12.0004L12.0007 12Z"
				fill="url(#paint2_radial_3602_739)"
			/>
			<path
				d="M12.0003 12H2.7673C2.68764 12 2.64898 12 2.61501 11.9965C2.2911 11.9646 2.03544 11.7089 2.00351 11.385C2 11.3519 2 11.3124 2 11.2327C2 8.6441 4.23863 6.54517 7.00001 6.54517C9.7614 6.54517 12 8.6441 12 11.2327V11.9997L12.0003 12Z"
				fill="url(#paint3_radial_3602_739)"
			/>
			<defs>
				<radialGradient
					id="paint0_radial_3602_739"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(0.627742 -10.0336 9.63151 0.644781 11.5825 12.1009)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.05} stopColor="#FF96DA" />
					<stop offset={0.27} stopColor="#FF69C3" />
					<stop offset={0.75} stopColor="#FC413D" />
				</radialGradient>
				<radialGradient
					id="paint1_radial_3602_739"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(22.1952 17.4325) rotate(180) scale(10.0339 9.63245)"
				>
					<stop offset={0.5} stopColor="#3186FF" />
					<stop offset={1} stopColor="#A9A8FF" />
				</radialGradient>
				<radialGradient
					id="paint2_radial_3602_739"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(6.51642 22.1226) rotate(-90) scale(10.0339 9.63245)"
				>
					<stop offset={0.5} stopColor="#00AF57" />
					<stop offset={1} stopColor="#78C9FF" />
				</radialGradient>
				<radialGradient
					id="paint3_radial_3602_739"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(1.89919 6.57845) scale(10.0339 9.63245)"
				>
					<stop offset={0.3} stopColor="#FEC700" />
					<stop offset={1} stopColor="#FFE921" />
				</radialGradient>
			</defs>
		</svg>
	);
};

IconLogoGooglePhotosColor.iconName = "logo-google-photos--color";

export default IconLogoGooglePhotosColor;
