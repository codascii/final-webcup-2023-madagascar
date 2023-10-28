import Banner from "@/components/aboutTwo/Banner";
import AboutAITwo from "@/components/common/AboutAITwo";
import EfectiveTwo from "@/components/common/EfectiveTwo";
import QualifiedTwo from "@/components/common/QualifiedTwo";
import TestimonialTwo from "@/components/common/TestimonialTwo";
import Feature from "@/components/home/Feature";
import Newsletter from "@/components/homeThree/Newsletter";

export default function AboutTwo() {
	return (
		<>
			{/*Banner Section */}
			<Banner />

			{/*AboutAITwo Section */}
			<AboutAITwo />

			
			{/* Feature section */}
			<Feature />


			{/*TestimonialTwo Section */}
			<TestimonialTwo />

			{/*QualifiedTwo Section */}
			<QualifiedTwo />

			{/*Newsletter Section */}
			<Newsletter />
		</>
	);
}
