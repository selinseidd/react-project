import moment from "moment";
import constants from "../../constants";

function BookGridItem({ title, date, overview, poster, rating }) {

    //title = { book.title }
    //date = { book.release_date }
    //description = { book.overview }
    //image = { book.image_path }
    //rating = { book.vote_average }

    function getImage() {
        return `${constants.imageBaseUrl}${poster}`
    }

    function getDate() {
        return moment(date).format("MMM Do YY");
    }

    return (
        <>

            <div className="col-md-4">
                <div className="grid-movie-container img-thumbnail mb-3">
                    <div className="d-flex">
                        <img className="movie-poster w-50" src={getImage()} />
                        <div className="px-2 w">
                            <div className="movie-vote badge rounded-pill bg-primary">{rating}</div>
                            <div className="fw-bold movie-title py-1">{title}</div>
                            <div className="movie-release-date">{getDate()}</div>
                        </div>
                    </div>
                    <div className="movie-overview pt-3">{overview}</div>
                </div>
            </div>
        </>
    )
}
export default BookGridItem;