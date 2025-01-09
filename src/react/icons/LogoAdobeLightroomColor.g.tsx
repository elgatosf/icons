import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAdobeLightroomColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#001E36"
				d="M6.038 3h11.924a3.266 3.266 0 0 1 3.269 3.269V17.73A3.266 3.266 0 0 1 17.96 21H6.039a3.266 3.266 0 0 1-3.269-3.269V6.27A3.266 3.266 0 0 1 6.04 3"
			/>
			<path
				fill="#31A8FF"
				d="M12.46 15.723H7.586c-.087 0-.123-.044-.123-.137V7.723a.097.097 0 0 1 .087-.108h1.533c.036-.007.087.022.087.065v6.48h3.557c.079 0 .1.036.086.108l-.223 1.34a.14.14 0 0 1-.043.093.2.2 0 0 1-.087.022M13.692 9.567h1.346c.08 0 .137.05.159.122.028.05.05.115.064.18a2.7 2.7 0 0 1 .05.511c.231-.266.512-.49.822-.662a2.2 2.2 0 0 1 1.144-.274c.05-.007.101.029.108.087v1.533c0 .065-.036.087-.122.087-.497-.03-1 .064-1.455.259a1.3 1.3 0 0 0-.417.288v3.924c0 .079-.029.108-.1.108h-1.499c-.064.007-.115-.029-.122-.094v-4.2909999999999995c0-.187 0-.374-.007-.576s-.007-.403-.015-.598a6 6 0 0 0-.043-.51c-.007-.037.015-.08.05-.087.015-.015.022-.015.037-.007"
			/>
		</svg>
	);
};

IconLogoAdobeLightroomColor.iconName = "logo-adobe-lightroom--color";

export default IconLogoAdobeLightroomColor;
