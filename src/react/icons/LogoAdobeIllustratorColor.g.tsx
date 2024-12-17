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
				d="M6.039 3h11.923a3.267 3.267 0 0 1 3.27 3.27v11.46a3.267 3.267 0 0 1-3.27 3.27H6.039a3.266 3.266 0 0 1-3.27-3.27V6.27A3.266 3.266 0 0 1 6.04 3"
			/>
			<path
				fill="#FF9A00"
				d="M11.692 13.77H8.831l-.585 1.807a.135.135 0 0 1-.146.107H6.654c-.085 0-.108-.046-.085-.138l2.477-7.13q.032-.116.077-.255.046-.243.046-.5c-.008-.038.023-.076.062-.084h1.992q.09.002.1.061l2.807 7.923c.024.085 0 .123-.076.123h-1.608c-.054.008-.108-.03-.123-.084zm-2.415-1.562h1.954a11 11 0 0 0-.177-.554q-.105-.314-.208-.662c-.077-.238-.146-.469-.223-.708a17 17 0 0 1-.208-.684c-.061-.216-.115-.416-.17-.6h-.014c-.07.33-.154.661-.262.992-.115.37-.23.754-.354 1.139a15 15 0 0 1-.338 1.077m6.569-3.285a.95.95 0 0 1-.685-.27 1 1 0 0 1-.261-.707.9.9 0 0 1 .277-.685.99.99 0 0 1 .684-.269c.3 0 .531.093.7.27.17.184.262.43.254.684a.97.97 0 0 1-.27.708.9.9 0 0 1-.7.269m-.862 6.677V9.677c0-.077.031-.108.1-.108h1.523c.07 0 .1.039.1.108V15.6c0 .085-.03.123-.1.123H15.1c-.077 0-.116-.046-.116-.123"
			/>
		</svg>
	);
};

IconLogoAdobeIllustratorColor.iconName = "logo-adobe-illustrator--color";

export default IconLogoAdobeIllustratorColor;
