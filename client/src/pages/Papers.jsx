import Card from "../components/UI/Card";

const Papers = () => {
	return (
		<section className=" my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6   lg:mx-auto relative  lg:px-32 ">
			<Card name={"2024"} paper={"View"} notes={"Download"}  />
			<Card name={"2023"} paper={"View"} notes={"Download"}  />
			<Card name={"2022"} paper={"View"} notes={"Download"}  />
		</section>
	);
};

export default Papers;
