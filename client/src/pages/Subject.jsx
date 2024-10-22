import Card from "../components/UI/Card";
import { Link } from "react-router-dom";
import {CircleChevronLeft} from "lucide-react"
const Subject = () => {
	return (
		<section className=" mt-10  lg:px-32 lg:mx-auto relative">
			
			<div className=" sticky z-10 top-0 p-2 bg-gradient-to-r from-gray-50 to-cyan-50 ">
			<Link to={'/'} >
			<CircleChevronLeft />
			</Link>
			</div>
			
          <Link to={'/lab_manual/1'} >
		  <button className="btnHover px-4 py-2  text-lg text-white block  rounded-md bg-indigo-500" > Click here for Lab Manuals</button></Link>
              <h2 className=" py-4 text-2xl" >Subjects :</h2>
			{/* SUBJECTS CARD SECTION */}
			<div className=" grid grid-cols-1    sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6  ">
				<Card
					name={"Aspirations and course Book Paper-1"}
					paper={"Paper"}
					notes={"Notes"}
					paper_Path={'/subject/papers'} notes_path={'/subject/notes'}
				/>
				<Card name={"Kannada Manujamatha-1"} paper={"Paper"} notes={"Notes"} paper_Path={'/subject/papers'} notes_path={'/subject/notes'} />
				<Card
					name={"Fundamentals Of Computer"}
					paper={"Paper"}
					notes={"Notes"}
				/>
				<Card name={"Subject 4"} paper={"Paper"} notes={"Notes"} />
				<Card name={"Subject 2"} paper={"Paper"} notes={"Notes"} />
				<Card name={"Subject 3"} paper={"Paper"} notes={"Notes"} />
				<Card name={"Subject 4"} paper={"Paper"} notes={"Notes"} />
			</div>
		
			
		</section>
	);
};

export default Subject;
