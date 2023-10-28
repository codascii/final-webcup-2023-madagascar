import Feature from "@/components/common/Feature";
import Banner from "@/components/services/Banner";
import { useCallback, useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import CustomMarker from "/public/img/markers/vent.gif";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import Preloader from "@/components/preloader/Preloader";
import FooterFour from "@/components/footer/FooterFour";
import NavBar from "@/components/navBar/NavBar";

const DesastreInfo = () => {
	return <div className="desastre-info-container">teyteyt</div>;
};

export default function Maps() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
	});
	const [data, setData] = useState([]);

	const fetchData = useCallback(() => {
		fetch("https://www.webcup.fr/24hAPI/disater2.php", {
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
			{/*Banner section */}
			{/* <Banner /> */}

			{/* Map */}
			<GoogleMap
				zoom={3}
				center={{ lat: -18.907136, lng: 47.5234304 }}
				mapContainerClassName="map-container-page"
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
							{/* <Image src={CustomMarker} alt="icon" /> */}
						</Marker>
					))}
			</GoogleMap>

			<DesastreInfo />

			{/*Feature section */}
			{/* <Feature /> */}
		</>
	);
}

Maps.getLayout = function getLayout(page) {
	return (
		<>
			{/* Preloader */}
			<Preloader />

			{/* NavBar */}
			<NavBar inMapsPage={true} />
			{page}
			{/* Footer */}
			<FooterFour />

			{/* Scroll To Top */}
			<ScrollToTop />
		</>
	);
};
