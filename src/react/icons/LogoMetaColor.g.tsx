import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMetaColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M16.587 5c-1.728 0-3.078 1.301-4.3 2.954C10.607 5.815 9.202 5 7.52 5c-3.428 0-6.054 4.46-6.054 9.182C1.467 17.137 2.897 19 5.29 19c1.723 0 2.963-.812 5.166-4.663l1.55-2.74q.331.537.7 1.156l1.033 1.738C15.75 17.859 16.872 19 18.904 19c2.332 0 3.63-1.889 3.63-4.905C22.534 9.152 19.85 5 16.587 5m-7.811 8.294c-1.786 2.8-2.404 3.427-3.399 3.427-1.023 0-1.632-.898-1.632-2.5 0-3.428 1.71-6.933 3.747-6.933 1.103 0 2.025.637 3.437 2.66-1.341 2.056-2.153 3.346-2.153 3.346m6.741-.353-1.235-2.06a43 43 0 0 0-.964-1.501c1.114-1.718 2.032-2.574 3.124-2.574 2.269 0 4.084 3.34 4.084 7.444 0 1.564-.512 2.471-1.574 2.471-1.017 0-1.503-.672-3.435-3.78" />
			<path
				fill="url(#prefix__a)"
				d="M14.282 10.881C11.604 6.526 9.82 5 7.52 5l-.03 2.288c1.507 0 2.675 1.188 5.214 5.465l.155.26z"
			/>
			<defs>
				<linearGradient id="prefix__a" x1={13.584} x2={7.754} y1={12.461} y2={4.822} gradientUnits="userSpaceOnUse">
					<stop offset={0.134} stopColor="#0869E1" />
					<stop offset={0.873} stopColor="#0064E0" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoMetaColor.iconName = "logo-meta--color";

export default IconLogoMetaColor;
