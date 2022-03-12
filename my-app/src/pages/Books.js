
import { Col } from 'react-bootstrap';
import BookList from '../components/books/BookList';
import BookFilters from '../components/filters/BookFilters';
import { BookProvider } from '../components/books/BookContext';


function Books(props) {


    return (
        <BookProvider>
            <Col>
                <BookList />
            </Col>
            <Col md={3}>
                <BookFilters />
            </Col>
        </BookProvider>
    )
}
export default Books;