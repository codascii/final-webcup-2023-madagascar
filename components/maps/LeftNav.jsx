import { useCallback } from "react";

import Image from "next/image";
import { getImageUrl } from "@/utils";

const LeftNav = ({ disastres, map }) => {
	const handleAlertClick = useCallback(
		(value) => {
			map.panTo({
				lat: parseFloat(value.latitude),
				lng: parseFloat(value.longitude),
			});
		},
		[map]
	);

	return (
		<div className="left-nav">
			<div
				style={{
					backgroundColor: "#4acace",
					padding: "10px 20px",
				}}
			>
				<p style={{ color: "white", fontSize: 12 }}>
					Prédictions des catastrophes natuelles imminent...
				</p>
			</div>
			{disastres.length > 0
				? disastres.map((d) => {
						let imageName = getImageUrl(d.type_disaster);

						return (
							<div
								key={d.id}
								className="left-desastre"
								onClick={() => {
									// setSelectedDesastre(d);
									handleAlertClick(d);
								}}
                                data-type={d.type_disaster}
							>
								<div className="icon">
									<Image
										src={imageName}
										alt={d.name || d.location}
										width={200}
										height={200}
										className="desastre-info-icon"
									/>
								</div>
								<div>
									{d.location} - {d.name}
								</div>
							</div>
						);
				  })
				: null}
		</div>
	);
};

export default LeftNav;