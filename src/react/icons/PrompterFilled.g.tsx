import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPrompterFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4.33124 2C3.10547 2 2.16811 3.0926 2.3545 4.30411L3.73911 13.3041C3.88921 14.2798 4.72871 15 5.71586 15H7.00002V17H5.1324C4.42987 17 3.77886 17.3686 3.41741 17.971L2.81741 18.971C2.01758 20.3041 2.97781 22 4.5324 22H19.4676C21.0222 22 21.9825 20.3041 21.1826 18.971L20.5826 17.971C20.2212 17.3686 19.5702 17 18.8676 17H17V15H18.2842C19.2713 15 20.1108 14.2798 20.2609 13.3041L21.6455 4.30411C21.8319 3.0926 20.8946 2 19.6688 2H4.33124ZM17 13.5H7.00002C6.72388 13.5 6.50002 13.2761 6.50002 13V7C6.50002 6.72386 6.72388 6.5 7.00002 6.5H17C17.2762 6.5 17.5 6.72386 17.5 7V13C17.5 13.2761 17.2762 13.5 17 13.5Z"
			/>
		</svg>
	);
};

IconPrompterFilled.iconName = "prompter--filled";

export default IconPrompterFilled;
