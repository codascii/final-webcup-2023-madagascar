import { useCallback } from "react";

import Image from "next/image";
import { getImageUrl } from "@/utils";
import alertImage from "/public/img/markers/alerte.gif";

const LeftNav = ({ disastres, map, desastreHistory }) => {

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
					// backgroundColor: "#4acace",
					padding: "10px 20px",
					textAlign: 'center'
				}}
			>
				<Image
					src={alertImage}
					alt={"Alerte"}
					width={150}
					height={150}
					// className="desastre-info-icon"
				/>
				<p style={{ fontWeight: 'bold', color: 'red', borderBottom: '1px solid #555555', paddingBottom: 10}}>
					Alerte imminent !
				</p>
				{/* {JSON.stringify(desastreHistory)} */}
			</div>
			<div className="desastre-list" style={{overflowY: 'scroll'}}>
			{desastreHistory.length > 0
				? desastreHistory.map((d) => {
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
				: null}</div>
		</div>
	);
};

export default LeftNav;