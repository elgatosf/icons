import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAdobeIllustratorColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#300"
				d="M6.039 3h11.923a3.266 3.266 0 0 1 3.269 3.27v11.46A3.266 3.266 0 0 1 17.96 21H6.04a3.266 3.266 0 0 1-3.27-3.27V6.27A3.266 3.266 0 0 1 6.04 3"
			/>
			<path
				fill="#FF9A00"
				d="M11.692 13.77H8.83l-.584 1.807a.135.135 0 0 1-.146.108H6.653c-.084 0-.107-.046-.084-.139l2.477-7.13c.023-.078.046-.162.077-.254q.045-.245.046-.5c-.008-.039.023-.077.061-.085h1.993q.09.002.1.061l2.807 7.924c.023.084 0 .123-.077.123h-1.607c-.054.007-.108-.031-.123-.085zm-2.416-1.562h1.954a11 11 0 0 0-.177-.554q-.104-.313-.207-.662c-.077-.238-.146-.469-.223-.707a17 17 0 0 1-.208-.685c-.062-.215-.115-.415-.17-.6h-.015q-.102.496-.261.992c-.116.37-.231.754-.354 1.139-.108.392-.223.754-.339 1.077m6.57-3.285a.95.95 0 0 1-.685-.27 1 1 0 0 1-.261-.707.9.9 0 0 1 .276-.684.99.99 0 0 1 .685-.27c.3 0 .53.093.7.27a.97.97 0 0 1 .254.684.97.97 0 0 1-.27.708.9.9 0 0 1-.7.27m-.862 6.677V9.677c0-.077.03-.108.1-.108h1.523c.07 0 .1.039.1.108V15.6c0 .085-.03.123-.1.123H15.1c-.077 0-.116-.046-.116-.123"
			/>
		</svg>
	);
};

IconLogoAdobeIllustratorColor.iconName = "logo-adobe-illustrator--color";

export default IconLogoAdobeIllustratorColor;
