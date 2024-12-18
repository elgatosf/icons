import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const VolumeFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M19.4853 3.51459C19.1924 3.2217 18.7175 3.2217 18.4246 3.51459C18.1317 3.80749 18.1317 4.28236 18.4246 4.57525C19.3996 5.55027 20.1731 6.70778 20.7007 7.9817C21.2284 9.25562 21.5 10.621 21.5 11.9999C21.5 13.3788 21.2284 14.7441 20.7007 16.018C20.1731 17.292 19.3996 18.4495 18.4246 19.4245C18.1317 19.7174 18.1317 20.1923 18.4246 20.4852C18.7175 20.778 19.1924 20.778 19.4853 20.4852C20.5996 19.3709 21.4835 18.048 22.0866 16.5921C22.6896 15.1362 23 13.5757 23 11.9999C23 10.424 22.6896 8.86358 22.0866 7.40767C21.4835 5.95176 20.5996 4.62889 19.4853 3.51459Z" /><path fillRule="evenodd" d="M9.29289 20.2928L5 15.9999H3C1.89543 15.9999 1 15.1044 1 13.9999V9.99987C1 8.8953 1.89543 7.99987 3 7.99987H5L9.29289 3.70698C9.92286 3.07702 11 3.52318 11 4.41409V19.5857C11 20.4766 9.92286 20.9227 9.29289 20.2928Z" clipRule="evenodd" /><path d="M15.9497 5.98947C16.2426 5.69657 16.7175 5.69657 17.0104 5.98947C17.7997 6.77876 18.4258 7.7158 18.853 8.74706C19.2801 9.77833 19.5 10.8836 19.5 11.9999C19.5 13.1161 19.2801 14.2214 18.853 15.2527C18.4258 16.284 17.7997 17.221 17.0104 18.0103C16.7175 18.3032 16.2426 18.3032 15.9497 18.0103C15.6569 17.7174 15.6569 17.2425 15.9497 16.9496C16.5998 16.2996 17.1154 15.5279 17.4672 14.6787C17.8189 13.8294 18 12.9191 18 11.9999C18 11.0806 17.8189 10.1704 17.4672 9.32109C17.1154 8.47181 16.5998 7.70014 15.9497 7.05013C15.6569 6.75723 15.6569 6.28236 15.9497 5.98947Z" /><path d="M14.5355 8.46434C14.2426 8.17145 13.7678 8.17145 13.4749 8.46434C13.182 8.75723 13.182 9.23211 13.4749 9.525C13.7999 9.85001 14.0577 10.2358 14.2336 10.6605C14.4095 11.0851 14.5 11.5402 14.5 11.9999C14.5 12.4595 14.4095 12.9146 14.2336 13.3393C14.0577 13.7639 13.7999 14.1497 13.4749 14.4747C13.182 14.7676 13.182 15.2425 13.4749 15.5354C13.7678 15.8283 14.2426 15.8283 14.5355 15.5354C14.9998 15.0711 15.3681 14.5199 15.6194 13.9133C15.8707 13.3067 16 12.6565 16 11.9999C16 11.3433 15.8707 10.6931 15.6194 10.0865C15.3681 9.47983 14.9998 8.92863 14.5355 8.46434Z" />
		</svg>
	);
};

VolumeFilled.iconName = "volume--filled";

export default VolumeFilled;