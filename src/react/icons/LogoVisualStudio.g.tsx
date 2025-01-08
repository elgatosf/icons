import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoVisualStudio = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M21.629 5.47q.042.03.08.063zM21.71 5.533a.8.8 0 0 1 .19.24zM21.9 5.773a.8.8 0 0 1 .094.3zM21.994 6.072l.005.069zM21.999 6.14v.027zM21.999 6.167v11.667z" />
			<path
				fillRule="evenodd"
				d="m21.629 5.47-5.013-3.332A.84.84 0 0 0 16.157 2h-.004a.82.82 0 0 0-.629.292l-5.32 6.179-3.405-3.263-.058-.058a.8.8 0 0 0-.575-.233.84.84 0 0 0-.5.166l-3.32 2.491-.014.01.013-.01.006-.004-.018.013A.83.83 0 0 0 2 8.25v7.505a.83.83 0 0 0 .333.662l.007.005.012.009 3.314 2.486a.84.84 0 0 0 .81.107q.151-.062.265-.174l.058-.058 3.404-3.263 5.33 6.183a.84.84 0 0 0 1.095.15l5-3.333a.84.84 0 0 0 .267-.29l.006-.011.023-.046a.8.8 0 0 0 .075-.348V6.166a1 1 0 0 0-.005-.094.84.84 0 0 0-.366-.601m-4.63 9.517V9.013L13.883 12zm-11.561-.984v-4.01l1.728 2.003z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoVisualStudio.iconName = "logo-visual-studio";

export default IconLogoVisualStudio;
