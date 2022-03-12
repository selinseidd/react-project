
import About from '../components/about/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../scss/custom.scss"
import { Container } from "react-bootstrap";
import image from "../components/images/image.jpg"

function Home() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <Container>
                        <figure className="position-relative">
                            <img src={image} alt="library" className='img-fluid' />
                            <figcaption>
                                Book Store
                            </figcaption>
                        </figure>

                    </Container>

                </div>
                <div className="row">
                    <About />
                </div>
            </div>
        </>
    );
}

export default Home;