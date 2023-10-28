import Feature from "@/components/common/Feature";
import Banner from "@/components/services/Banner";
import { useCallback, useEffect, useRef, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import CustomMarker from "/public/img/markers/vent.gif";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import Preloader from "@/components/preloader/Preloader";
import FooterFour from "@/components/footer/FooterFour";
import NavBar from "@/components/navBar/NavBar";
import Image from "next/image";
import FeuIcon from "/public/img/markers/feu.gif";
import TempeteIcon from "/public/img/markers/tempete.gif";
import TornadeIcon from "/public/img/markers/tornade.gif";
import TourbillonIcon from "/public/img/markers/tourbillon.gif";
import VagueIcon from "/public/img/markers/vague.gif";
import VentIcon from "/public/img/markers/vent.gif";
import VolcanIcon from "/public/img/markers/volcan.gif";
import TremblementIcon from "/public/img/markers/planete-terre.gif";
import InondationIcon from "/public/img/markers/inondations.gif";
import LeftNav from "@/components/maps/LeftNav";
import { getImageUrl, postDisaster } from "@/utils";
// import CustomMarker from "/public/img/markers/feu.gif";

const DesastreInfo = ({ disastre }) => {
	let imageName = getImageUrl(disastre.type_disaster);

	return (
		<div className="desastre-info-container">
			<div className="desastre-info">
				<div style={{ display: "flex", alignItems: "center" }}>
					<Image
						src={imageName}
						alt="test"
						width={80}
						height={80}
						className="desastre-info-icon"
						style={{
							marginBottom: 20,
							marginRight: 20,
						}}
					/>
					<p>{disastre.type_disaster}</p>
				</div>
				<div className="line">
					<p className="label">Nom de la catastrophe :</p>
					<p className="value">{disastre.name}</p>
				</div>
				<div className="line">
					<p className="label">Localisation :</p>
					<p className="value">{disastre.location}</p>
				</div>
				{/* <div className="line">
					<p className="label">Longitude :</p>
					<p className="value">{disastre.longitude}</p>
				</div>
				<div className="line">
					<p className="label">Latitude :</p>
					<p className="value">{disastre.latitude}</p>
				</div> */}
				<div className="line">
					<p className="label">Élevation :</p>
					<p className="value">{disastre.elevation}</p>
				</div>
				<div className="line">
					<p className="label">Magnitude :</p>
					<p className="value">{disastre.magnitude}</p>
				</div>
			</div>
		</div>
	);
};

export default function Maps() {
	const [map, setMap] = useState(/** @type google.maps.Map */ null);
	const [setselectedDesastre, setSelectedDesastre] = useState(null);
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
	});

	const [data, setData] = useState([]);
	const [mapCenter, setMapCenter] = useState({
		lat: -18.907136,
		lng: 47.5234304,
	});
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

				// Envoie des données dans firebase
				postDisaster(d);
			})
			.catch((error) => {
				console.error("Err : ", error);
			});
	}, []);

	// Appeler fetchData() immédiatement
	useEffect(() => {
		fetchData();
		fetch("https://ipapi.co/json")
			.then((res) => res.json())
			.then((data) =>
				setMapCenter({ lat: data.latitude, lng: data.longitude })
			)
			.catch((err) => console.log(err));
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
			<div style={{ display: "flex" }}>
				{/*Banner section */}
				{/* <Banner /> */}
				<LeftNav
					disastres={data}
					map={map}
					setSelectedDesastre={setSelectedDesastre}
				/>

				<div style={{ position: "relative" }}>
					{/* Map */}
					<GoogleMap
						zoom={6}
						center={mapCenter}
						mapContainerClassName="map-container-page"
						options={{
							mapTypeControl: false,
							streetViewControl: false,
							mapId: "264594e53bcfbb0d",
						}}
						onLoad={(_map) => setMap(_map)}
						// mapTypeId="264594e53bcfbb0d"
					>
						{data.length > 0 &&
							data.map((d, index) => {
								let imageName = getImageUrl(d.type_disaster);

								return (
									<Marker
										key={index}
										position={{
											lat: parseInt(d.latitude),
											lng: parseInt(d.longitude),
										}}
										clickable
										icon={{
											url: imageName,
											scaledSize:
												new window.google.maps.Size(
													50,
													50
												),
										}}
										// options={{ icon: <VolcanIcon /> }}
										onClick={(event) => {
											map.panTo({
												lat: parseFloat(d.latitude),
												lng: parseFloat(d.longitude),
											});
											setSelectedDesastre(d);
										}}
									>
										<Image
											src={InondationIcon}
											alt="icon"
										/>
									</Marker>
								);
							})}
					</GoogleMap>

					{setselectedDesastre ? (
						<DesastreInfo disastre={setselectedDesastre} />
					) : null}
				</div>
			</div>

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
			{/* <FooterFour /> */}

			{/* Scroll To Top */}
			{/* <ScrollToTop /> */}
		</>
	);
};
