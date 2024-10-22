import Card from "../components/UI/Card";

const Notes = () => {
	return (
		<section className=" my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6   lg:mx-auto relative   lg:px-32 ">
			<Card name={"Chapter 1"} paper={"View"} notes={"Download"} />
			<Card name={"Chapter 2"} paper={"View"} notes={"Download"} />
			<Card name={"Chapter 3"} paper={"View"} notes={"Download"} />
		</section>
	);
};

export default Notes;
