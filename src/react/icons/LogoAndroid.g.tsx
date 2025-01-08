import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAndroid = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				d="M22.937 17.515a11 11 0 0 0-.19-.952 11 11 0 0 0-1.734-3.779A11.1 11.1 0 0 0 17.85 9.81l.006-.01.004-.007.002-.004.33-.57.004-.005.332-.574.651-1.123q.235-.402.468-.806.055-.096.088-.197A1.013 1.013 0 0 0 18.668 5.2a1.01 1.01 0 0 0-.77.498q-.235.402-.468.806l-.652 1.122q-.166.288-.333.575l-.333.574-.028.05-.045.076-.027-.01-.074-.03A11 11 0 0 0 12 8.14h-.113a11 11 0 0 0-3.906.752l-.068-.117-.337-.582-.329-.567-.651-1.123-.468-.806a1.02 1.02 0 0 0-.614-.47 1 1 0 0 0-.347-.03 1.005 1.005 0 0 0-.89.748 1.01 1.01 0 0 0 .103.767l.467.806.651 1.122.333.575.333.575.003.004.003.005a11.1 11.1 0 0 0-3.986 4.295 11 11 0 0 0-1.1 3.288l-.019.118-.002.016q-.037.24-.063.484h22a11 11 0 0 0-.064-.484zM17.72 14.96c.44-.293.504-.97.143-1.514-.361-.543-1.011-.745-1.451-.453-.44.293-.504.97-.143 1.514.361.543 1.011.745 1.451.453M7.603 12.995c.44.293.505.97.143 1.514-.361.543-1.01.745-1.45.453-.441-.293-.505-.97-.144-1.514.362-.543 1.011-.745 1.451-.453"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoAndroid.iconName = "logo-android";

export default IconLogoAndroid;
