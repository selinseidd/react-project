import moment from "moment";
import constants from "../../constants";

function BookListItem({ title, date, overview, poster, rating }) {

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
            <div className="d-flex py-1">
                <img className="movie-poster" src={getImage()} />
                <div className="px-3 flex-grow-1">
                    <div className="d-flex align-items-start justify-content-between">
                        <div>
                            <div className="fw-bold movie-title">{title}</div>
                            <div className="movie-release-date">{getDate()}</div>
                        </div>
                        <span className="movie-vote badge rounded-pill bg-primary ms-auto">{rating}</span>
                    </div>
                    <div className="movie-overview pt-3">{overview}</div>
                </div>
            </div>
            <hr className="my-1"></hr>
        </>
    )
}
export default BookListItem;