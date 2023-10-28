import AboutAIOne from "@/components/common/AboutAIOne";
import Efective from "@/components/common/Efective";
import Plan from "@/components/common/Plan";
import Qualified from "@/components/common/Qualified";
import Testimonial from "@/components/common/Testimonial";
import Footer from "@/components/footer/Footer";
import Banner from "@/components/home/Banner";
import Capabilities from "@/components/home/Capabilities";
import Feature from "@/components/home/Feature";
import Newsletter from "@/components/home/Newsletter";
import NavBar from "@/components/navBar/NavBar";
import { useCallback, useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Image from "next/image";

import CustomMarker from "../public/img/markers/vent.gif";
// import CustomMarker from "/public/img/markers/vent.gif";

export default function TestMap() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
	});
	const [data, setData] = useState([]);
	const fetchData = useCallback(() => {
		fetch("http://api.houmadev.com/test/get-webcup-data", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((d) => {
				// code
				setData(d);
			})
			.catch((error) => {
				console.error("Err : ", error);
			});
	}, []);

	// Appeler fetchData() immédiatement
	useEffect(() => {
		fetchData();
	}, [fetchData]);

	useEffect(() => {
		// 5 min = 300 000 ms
		const intervalId = setInterval(fetchData, 300000);

		return () => {
			clearInterval(intervalId);
		};
	});

	if (!isLoaded) return <div>Chargement</div>;
	return (
		<>
			{/* NavBar section */}
			<NavBar />

			{/* Banner section */}
			<Banner />
			<GoogleMap
				zoom={10}
				center={{ lat: -18.907136, lng: 47.5234304 }}
				mapContainerClassName="map-container"
			>
				{data.length > 0 &&
					data.map((d, index) => (
						<Marker
							key={index}
							position={{
								lat: parseInt(d.latitude),
								lng: parseInt(d.longitude),
							}}
							clickable
							icon={{
								url: CustomMarker,
								scaledSize: new window.google.maps.Size(30, 30),
							}}
						>
							<div>
								<h2>TEST</h2>
							</div>
							{/* <Image src={CustomMarker} alt="icon" /> */}
						</Marker>
					))}
			</GoogleMap>

			{/* Footer section */}
			<Footer />
		</>
	);
}

TestMap.getLayout = function getLayout(page) {
	return <>{page}</>;
};
