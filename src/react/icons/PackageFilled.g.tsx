import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const PackageFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
	const iconSize = sizeMap[size];
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			width={iconSize}
			height={iconSize}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M12.9713 2.53977C12.3672 2.20419 11.6328 2.20419 11.0287 2.53977L8.80527 3.77502L16.885 8.39199L20.1616 6.54887C20.1009 6.50556 20.0374 6.46539 19.9713 6.42866L12.9713 2.53977Z" /><path d="M20.9673 7.81669L16.9696 10.0654L16.9254 10.1427L16.8791 10.1163L12.75 12.4389V21.5663C12.8253 21.5358 12.8992 21.5006 12.9713 21.4606L19.9713 17.5717C20.6062 17.2189 21 16.5497 21 15.8234V8.17697C21 8.05485 20.9889 7.93435 20.9673 7.81669Z" /><path d="M11.25 21.5663V12.4389L3.03267 7.81666C3.01113 7.93433 3 8.05485 3 8.17697V15.8234C3 16.5497 3.39378 17.2189 4.02871 17.5717L11.0287 21.4606C11.1008 21.5006 11.1747 21.5359 11.25 21.5663Z" /><path d="M3.83838 6.54886L12 11.1398L15.3614 9.249L7.2723 4.62667L4.02871 6.42866C3.9626 6.46539 3.8991 6.50555 3.83838 6.54886Z" />
		</svg>
	);
};

PackageFilled.iconName = "package--filled";

export default PackageFilled;