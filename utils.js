import {
	collection,
	addDoc,
	updateDoc,
	doc,
	deleteDoc,
	query,
	where,
	getDocs,
	serverTimestamp,
} from "firebase/firestore";
import db from "./firebase";

export const postDisaster = async (data) => {
	const collectionRef = collection(db, "disasters");

	data.forEach(async (payload) => {
		const docRef = await addDoc(collectionRef, {
			...payload,
			timestamp: serverTimestamp(),
		});
		console.log("The new ID is: " + docRef.id);
	});
};

export function getImageUrl(type) {
	let imageName = "";

	switch (type) {
		case "tremblements de terre":
			imageName =
				"https://dorade-shops-content.s3.eu-north-1.amazonaws.com/markers-icon/planete-terre.gif";
			break;
		case "éruption volcanique":
			imageName =
				"https://dorade-shops-content.s3.eu-north-1.amazonaws.com/markers-icon/volcan.gif";
			break;
		case "Cyclone":
			imageName =
				"https://dorade-shops-content.s3.eu-north-1.amazonaws.com/markers-icon/vent.gif";
			break;
		case "Mégafeu":
			imageName =
				"https://dorade-shops-content.s3.eu-north-1.amazonaws.com/markers-icon/feu.gif";
			break;
		case "Ouragan ":
			imageName =
				"https://dorade-shops-content.s3.eu-north-1.amazonaws.com/markers-icon/tempete.gif";
			break;
		case "Ouragan":
			imageName =
				"https://dorade-shops-content.s3.eu-north-1.amazonaws.com/markers-icon/tempete.gif";
			break;
		case "Typhon":
			imageName =
				"https://dorade-shops-content.s3.eu-north-1.amazonaws.com/markers-icon/vent.gif";
			break;
		case "Inondations":
			imageName =
				"https://dorade-shops-content.s3.eu-north-1.amazonaws.com/markers-icon/innondation.gif";
			break;
		case "Tsunami":
			imageName =
				"https://dorade-shops-content.s3.eu-north-1.amazonaws.com/markers-icon/vague.gif";
			break;

		default:
			break;
	}

	return imageName;
}
