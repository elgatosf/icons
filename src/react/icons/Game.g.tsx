import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconGame = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
					<path d="M8.75 8.5a.75.75 0 0 0-1.5 0v.75H6.5a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 0 0 1.5 0v-.75h.75a.75.75 0 0 0 0-1.5h-.75zM16 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
					<path
						fillRule="evenodd"
						d="M17.136 17.849 15 15H9l-2.136 2.849a2.879 2.879 0 0 1-5.118-2.33L3.661 6.58A2 2 0 0 1 5.617 5h12.766a2 2 0 0 1 1.956 1.58l1.915 8.938a2.879 2.879 0 0 1-5.118 2.33M8.25 13.5l-2.586 3.449a1.379 1.379 0 0 1-2.451-1.116l1.915-8.938a.5.5 0 0 1 .489-.395h12.766a.5.5 0 0 1 .49.395l1.914 8.938a1.379 1.379 0 0 1-2.45 1.116L15.75 13.5z"
						clipRule="evenodd"
					/>
				</svg>
			);
		case "s":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
					<path
						fillRule="evenodd"
						d="m11.877 13.003-1.583-2.533a1 1 0 0 0-.848-.47H6.554a1 1 0 0 0-.848.47l-1.583 2.533a2.122 2.122 0 0 1-3.91-1.324C1.04 2.855 1.527 2 8 2s6.96.855 7.788 9.68a2.122 2.122 0 0 1-3.91 1.323m-.735-3.063 1.583 2.533a1.122 1.122 0 0 0 2.067-.7c-.207-2.212-.39-3.87-.64-5.133-.254-1.272-.557-2.02-.928-2.492-.339-.431-.804-.719-1.613-.9C10.763 3.055 9.622 3 8 3c-1.62 0-2.763.056-3.611.247-.81.182-1.274.47-1.613.901-.371.472-.674 1.22-.927 2.492-.252 1.262-.433 2.92-.64 5.133a1.122 1.122 0 0 0 2.067.7L4.857 9.94A2 2 0 0 1 6.554 9h2.892a2 2 0 0 1 1.696.94"
						clipRule="evenodd"
					/>
				</svg>
			);
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M9 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
						clipRule="evenodd"
					/>
					<path d="M12 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2M15 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
					<path
						fillRule="evenodd"
						d="m12.794 13.47 1.484 2.375A2.46 2.46 0 0 0 16.362 17a2.44 2.44 0 0 0 2.435-2.635C17.839 3 16.53 3 10 3S2.161 3 1.203 14.365A2.44 2.44 0 0 0 3.638 17c.847 0 1.635-.436 2.084-1.155l1.484-2.375a1 1 0 0 1 .848-.47h3.892a1 1 0 0 1 .848.47m2.332 1.845-1.484-2.375a2 2 0 0 0-1.696-.94H8.054a2 2 0 0 0-1.696.94l-1.484 2.375A1.46 1.46 0 0 1 3.638 16 1.44 1.44 0 0 1 2.2 14.449c.239-2.834.496-4.908.84-6.435.345-1.537.755-2.406 1.22-2.929.433-.487.999-.768 1.911-.921C7.126 4.004 8.337 4 10 4s2.874.003 3.829.164c.912.153 1.478.434 1.912.921.464.523.874 1.392 1.22 2.929.343 1.527.6 3.6.84 6.435.07.83-.592 1.551-1.44 1.551-.502 0-.969-.259-1.235-.685"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconGame.iconName = "game";

export default IconGame;
