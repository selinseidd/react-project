import BookListItem from './BookListItem';
import BookGridItem from './BookGridItem';
import { useBook } from '../books/BookContext';
import NoResult from './NoResult';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';

function BookList(props) {

    const { books, listView, setListView } = useBook();

    const renderBooks = () => {
        if (!books.length) {
            return <NoResult />
        }
        return listView ? getBookListItems() : getBookGridItems();

    }

    function getBookListItems() {
        return books.map(book => {
            return <BookListItem
                key={book.id}
                title={book.title}
                date={book.release_date}
                overview={book.overview}
                poster={book.poster_path}
                rating={book.vote_average}
            >
            </BookListItem>
        })
    }

    function getBookGridItems() {
        return books.map(book => {
            return <BookGridItem
                key={book.id}
                title={book.title}
                date={book.release_date}
                overview={book.overview}
                poster={book.poster_path}
                rating={book.vote_average}
            >
            </BookGridItem>
        })
    }


    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <Card.Title>Резултати:</Card.Title>
                    <ButtonGroup aria-label="List switch">
                        <Button variant={listView ? 'primary' : 'outline-primary'}
                            onClick={() => setListView(true)}>
                            <FontAwesomeIcon icon={faThList} />
                        </Button>
                        <Button variant={listView ? 'outline-primary' : 'primary'}
                            onClick={() => setListView(false)}>
                            <FontAwesomeIcon icon={faGripHorizontal} />
                        </Button>
                    </ButtonGroup>

                </div>
                <hr />
                <div className="row">
                    {renderBooks()}
                </div>

            </Card.Body>
        </Card>
    )
}
export default BookList;