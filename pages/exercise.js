// pages/about.js

import Link from "next/link";
import { useRouter } from 'next/router';
import NavBarLogin from "../components/NavbarLogin";
import OffCanvas from "../components/OffCanvas";
import Footer from "../components/Footer";
function Dashboard() {
    const router = useRouter();
    const handleImageClick = () => {
        // Navigate to a different page or URL when the image is clicked
        router.push('/exercise2'); // Replace '/new-page' with your desired destination
    };

    return (
        <div className="wrapper" id="wrapper">
            <NavBarLogin />
            <div className="learning">
                <div className="container-fluid">
                    <div className="outline-btn-row">
                        <a href="" className="btn btn-brand btn-48">Outline</a>
                    </div>

                    <div className="top-bar">
                        <a href="">Lessons</a>
                        <a href="">Instructions</a>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-col">
                                <img  className="img-fluid mb-3" src="/assets/images/learning-media-img.jpg" alt=""/>
                                    <h5 className="mb-3"><b>Understanding Database Relationships</b></h5>
                                    <p>Understanding database relationships is crucial for designing efficient and
                                        organized databases. Relationships are established through keys: primary keys
                                        uniquely identify records in a table, while foreign keys link one table&apos;s
                                        primary key to another table&apos;s column. The three main types of relationships are
                                        one-to-one, one-to-many, and many-to-many. By grasping these relationships,
                                        you&apos;ll be able to create well-structured databases that accurately represent
                                        real-world data interactions.</p>
                            <br/>
                            <p>Understanding database relationships is crucial for designing efficient and
                                organized databases. Relationships are established through keys: primary keys
                                uniquely identify records in a table, while foreign keys link one table&apos;s
                                primary key to another table&apos;s column. The three main types of relationships are
                                one-to-one, one-to-many, and many-to-many. By grasping these relationships,
                                you&apos;ll be able to create well-structured databases that accurately represent
                                real-world data interactions.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-col">
                                <img onClick={handleImageClick} className="img-fluid" src="/assets/images/code-img-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    );
}

export default Dashboard;
