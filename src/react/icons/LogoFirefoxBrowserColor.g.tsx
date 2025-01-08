import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoFirefoxBrowserColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="url(#prefix__a)"
				d="M21.28 8.261c-.436-1.046-1.317-2.177-2.01-2.534.564 1.105.89 2.212 1.015 3.04l.002.016c-1.132-2.822-3.052-3.96-4.62-6.438-.08-.125-.159-.25-.236-.383a3 3 0 0 1-.11-.207 1.8 1.8 0 0 1-.15-.397.026.026 0 0 0-.023-.026.04.04 0 0 0-.019 0l-.005.002-.007.004.004-.005c-2.516 1.473-3.369 4.198-3.447 5.561a5 5 0 0 0-2.756 1.062 3 3 0 0 0-.26-.196 4.64 4.64 0 0 1-.028-2.447c-1.028.469-1.828 1.21-2.41 1.863h-.005c-.397-.503-.368-2.161-.346-2.508-.004-.02-.296.152-.334.177q-.526.375-.979.839a9 9 0 0 0-.935 1.121v.002-.002a8.5 8.5 0 0 0-1.344 3.033l-.013.067c-.019.088-.086.529-.098.625l-.002.021A9.6 9.6 0 0 0 2 11.933L2 11.985c0 5.53 4.483 10.012 10.014 10.012 4.952 0 9.065-3.596 9.87-8.318q.024-.193.045-.386c.2-1.718-.022-3.522-.65-5.032M9.738 16.1c.047.022.091.046.14.068l.006.004zm10.55-7.314-.002-.01.002.012z"
			/>
			<path
				fill="url(#prefix__b)"
				d="M21.28 8.261c-.436-1.046-1.317-2.177-2.01-2.534.564 1.105.89 2.212 1.015 3.04l.001.009.002.01c.945 2.562.43 5.167-.312 6.758-1.147 2.463-3.925 4.986-8.274 4.863-4.698-.132-8.837-3.619-9.61-8.184-.14-.72 0-1.086.071-1.67-.086.45-.119.58-.162 1.382l-.001.05c0 5.53 4.483 10.013 10.014 10.013 4.952 0 9.065-3.596 9.87-8.318q.024-.192.045-.386c.2-1.717-.022-3.522-.65-5.032"
			/>
			<path
				fill="url(#prefix__c)"
				d="M21.28 8.261c-.436-1.046-1.317-2.177-2.01-2.534.564 1.105.89 2.212 1.015 3.04l.001.009.002.01c.945 2.562.43 5.167-.312 6.758-1.147 2.463-3.925 4.986-8.274 4.863-4.698-.132-8.837-3.619-9.61-8.184-.14-.72 0-1.086.071-1.67-.086.45-.119.58-.162 1.382l-.001.05c0 5.53 4.483 10.013 10.014 10.013 4.952 0 9.065-3.596 9.87-8.318q.024-.192.045-.386c.2-1.717-.022-3.522-.65-5.032"
			/>
			<path
				fill="url(#prefix__d)"
				d="m16.413 9.438.063.046a5.5 5.5 0 0 0-.93-1.213c-3.113-3.112-.816-6.749-.43-6.933l.005-.006c-2.516 1.473-3.369 4.198-3.447 5.562.117-.008.233-.018.351-.018a5.05 5.05 0 0 1 4.388 2.562"
			/>
			<path
				fill="url(#prefix__e)"
				d="M12.032 10.06c-.016.249-.896 1.108-1.204 1.108-2.847 0-3.31 1.722-3.31 1.722.127 1.45 1.136 2.645 2.36 3.277q.083.042.168.08.146.064.294.12c.42.149.859.234 1.303.252 4.991.234 5.958-5.966 2.356-7.767.923-.16 1.88.21 2.415.586a5.05 5.05 0 0 0-4.388-2.562c-.118 0-.235.01-.351.018a5 5 0 0 0-2.756 1.062c.152.13.325.302.688.66.68.67 2.422 1.363 2.426 1.444"
			/>
			<path
				fill="url(#prefix__f)"
				d="M12.032 10.06c-.016.249-.896 1.108-1.204 1.108-2.847 0-3.31 1.722-3.31 1.722.127 1.45 1.136 2.645 2.36 3.277q.083.042.168.08.146.064.294.12c.42.149.859.234 1.303.252 4.991.234 5.958-5.966 2.356-7.767.923-.16 1.88.21 2.415.586a5.05 5.05 0 0 0-4.388-2.562c-.118 0-.235.01-.351.018a5 5 0 0 0-2.756 1.062c.152.13.325.302.688.66.68.67 2.422 1.363 2.426 1.444"
			/>
			<path
				fill="url(#prefix__g)"
				d="M8.452 7.623q.104.067.207.137a4.64 4.64 0 0 1-.028-2.447c-1.029.469-1.829 1.21-2.41 1.863.048-.001 1.5-.028 2.23.447"
			/>
			<path
				fill="url(#prefix__h)"
				d="M2.093 12.222c.772 4.566 4.911 8.052 9.61 8.185 4.348.123 7.126-2.401 8.273-4.864.742-1.591 1.257-4.195.312-6.757v-.001l-.002-.01-.001-.01.002.017c.355 2.32-.825 4.566-2.669 6.085l-.005.013c-3.594 2.926-7.032 1.765-7.729 1.29l-.146-.072c-2.095-1.001-2.96-2.91-2.775-4.547-1.769 0-2.372-1.492-2.372-1.492s1.589-1.132 3.682-.147c1.939.912 3.76.147 3.76.147-.004-.081-1.747-.774-2.426-1.444-.363-.357-.536-.53-.688-.66a3 3 0 0 0-.26-.195l-.207-.138c-.73-.474-2.183-.448-2.231-.447h-.005c-.397-.503-.369-2.162-.346-2.508-.004-.021-.296.151-.334.177q-.526.375-.979.839a9 9 0 0 0-.935 1.121v.002-.002a8.5 8.5 0 0 0-1.344 3.034c-.004.021-.36 1.576-.185 2.383z"
			/>
			<path
				fill="url(#prefix__i)"
				d="M15.546 8.271c.366.359.679.767.93 1.213q.084.062.15.123c2.27 2.092 1.081 5.05.992 5.26 1.845-1.518 3.025-3.765 2.67-6.084-1.133-2.822-3.053-3.96-4.62-6.438-.08-.125-.16-.25-.237-.383a3 3 0 0 1-.11-.207 1.8 1.8 0 0 1-.15-.397.026.026 0 0 0-.022-.026.04.04 0 0 0-.02 0l-.004.002-.008.004c-.387.185-2.684 3.82.43 6.933"
			/>
			<path
				fill="url(#prefix__j)"
				d="M16.627 9.607a2 2 0 0 0-.213-.169c-.534-.375-1.492-.746-2.414-.586 3.601 1.8 2.635 8.001-2.356 7.767a4.5 4.5 0 0 1-1.303-.251 6 6 0 0 1-.463-.2l.007.003c.696.475 4.135 1.636 7.728-1.29l.005-.013c.09-.21 1.278-3.17-.992-5.26"
			/>
			<path
				fill="url(#prefix__k)"
				d="M7.518 12.89s.462-1.722 3.31-1.722c.308 0 1.188-.86 1.204-1.108s-1.82.765-3.76-.148c-2.093-.985-3.681.148-3.681.148s.603 1.492 2.372 1.492c-.186 1.637.68 3.546 2.775 4.547.047.022.09.046.139.068-1.223-.632-2.233-1.826-2.36-3.277z"
			/>
			<path
				fill="url(#prefix__l)"
				d="M21.28 8.261c-.436-1.046-1.318-2.177-2.01-2.534.564 1.105.89 2.212 1.014 3.04l.002.016c-1.132-2.822-3.052-3.96-4.62-6.438-.079-.125-.158-.25-.236-.383a3 3 0 0 1-.11-.207 1.8 1.8 0 0 1-.15-.397.026.026 0 0 0-.022-.026.04.04 0 0 0-.02 0l-.004.002-.008.004.004-.005c-2.515 1.473-3.368 4.198-3.447 5.561.117-.008.233-.018.352-.018a5.05 5.05 0 0 1 4.388 2.562c-.535-.375-1.493-.747-2.415-.586 3.602 1.8 2.635 8-2.356 7.767a4.5 4.5 0 0 1-1.303-.252 6 6 0 0 1-.463-.2l.007.004-.146-.073c.047.023.09.047.139.069-1.223-.632-2.233-1.827-2.359-3.277 0 0 .462-1.722 3.31-1.722.308 0 1.188-.86 1.204-1.108-.004-.081-1.747-.775-2.426-1.444-.363-.358-.535-.53-.688-.66a3 3 0 0 0-.26-.196 4.64 4.64 0 0 1-.027-2.447c-1.03.469-1.83 1.21-2.41 1.863h-.005c-.397-.503-.37-2.161-.347-2.508-.004-.02-.296.152-.334.177q-.526.375-.979.839a9 9 0 0 0-.934 1.121v.002-.002A8.5 8.5 0 0 0 2.277 9.84l-.013.066c-.019.088-.104.535-.116.632 0 .007.001-.008 0 0q-.115.693-.147 1.397L2 11.985c0 5.53 4.483 10.012 10.013 10.012 4.953 0 9.065-3.595 9.87-8.318q.024-.192.046-.386c.199-1.717-.022-3.522-.65-5.031m-.994.514.002.011v-.001z"
			/>
			<defs>
				<radialGradient
					id="prefix__b"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(20.48 0 0 20.8251 19.619 5.701)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.13} stopColor="#FFBD4F" />
					<stop offset={0.28} stopColor="#FF980E" />
					<stop offset={0.47} stopColor="#FF3750" />
					<stop offset={0.78} stopColor="#EB0878" />
					<stop offset={0.86} stopColor="#E50080" />
				</radialGradient>
				<radialGradient
					id="prefix__c"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(20.992 0 0 20.8251 11.83 12.225)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.3} stopColor="#960E18" />
					<stop offset={0.35} stopColor="#B11927" stopOpacity={0.74} />
					<stop offset={0.43} stopColor="#DB293D" stopOpacity={0.34} />
					<stop offset={0.5} stopColor="#F5334B" stopOpacity={0.09} />
					<stop offset={0.53} stopColor="#FF3750" stopOpacity={0} />
				</radialGradient>
				<radialGradient
					id="prefix__d"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(6.72233 0 0 11.4123 13.972 .394)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.13} stopColor="#FFF44F" />
					<stop offset={0.53} stopColor="#FF980E" />
				</radialGradient>
				<radialGradient
					id="prefix__e"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(8.895 0 0 9.74917 9.541 17.642)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.35} stopColor="#3A8EE6" />
					<stop offset={0.67} stopColor="#9059FF" />
					<stop offset={1} stopColor="#C139E6" />
				</radialGradient>
				<radialGradient
					id="prefix__f"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(4.7232 0 0 5.75201 11.702 10.135)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.21} stopColor="#9059FF" stopOpacity={0} />
					<stop offset={0.97} stopColor="#6E008B" stopOpacity={0.6} />
				</radialGradient>
				<radialGradient
					id="prefix__g"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(7.07117 0 0 7.09654 11.349 2.925)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.1} stopColor="#FFE226" />
					<stop offset={0.79} stopColor="#FF7139" />
				</radialGradient>
				<radialGradient
					id="prefix__h"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(33.7613 0 0 28.341 17.759 -1.774)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.11} stopColor="#FFF44F" />
					<stop offset={0.46} stopColor="#FF980E" />
					<stop offset={0.72} stopColor="#FF3647" />
					<stop offset={0.9} stopColor="#E31587" />
				</radialGradient>
				<radialGradient
					id="prefix__i"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="rotate(83.95 11.592 3.755)scale(22.208 22.3738)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FFF44F" />
					<stop offset={0.3} stopColor="#FF980E" />
					<stop offset={0.57} stopColor="#FF3647" />
					<stop offset={0.74} stopColor="#E31587" />
				</radialGradient>
				<radialGradient
					id="prefix__j"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(19.3514 0 0 19.0112 11.386 5.511)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.14} stopColor="#FFF44F" />
					<stop offset={0.48} stopColor="#FF980E" />
					<stop offset={0.66} stopColor="#FF3647" />
					<stop offset={0.9} stopColor="#E31587" />
				</radialGradient>
				<radialGradient
					id="prefix__k"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(23.2911 0 0 20.8367 16.445 6.595)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.09} stopColor="#FFF44F" />
					<stop offset={0.63} stopColor="#FF980E" />
				</radialGradient>
				<linearGradient id="prefix__a" x1={19.489} x2={3.385} y1={4.569} y2={19.954} gradientUnits="userSpaceOnUse">
					<stop offset={0.05} stopColor="#FFF44F" />
					<stop offset={0.37} stopColor="#FF980E" />
					<stop offset={0.53} stopColor="#FF3647" />
					<stop offset={0.7} stopColor="#E31587" />
				</linearGradient>
				<linearGradient id="prefix__l" x1={18.478} x2={5.621} y1={4.569} y2={18.617} gradientUnits="userSpaceOnUse">
					<stop offset={0.17} stopColor="#FFF44F" stopOpacity={0.8} />
					<stop offset={0.6} stopColor="#FFF44F" stopOpacity={0} />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoFirefoxBrowserColor.iconName = "logo-firefox-browser--color";

export default IconLogoFirefoxBrowserColor;
