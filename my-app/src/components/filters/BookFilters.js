import SortByDate from "./SortByDate";
import Genre from "./Genre";
import SortBy from "./SortBy";
import { Button, Card, Form } from "react-bootstrap";
import { useBook } from '../books/BookContext';
import { useEffect } from "react";
import moment from "moment";


const checkboxes = [
    {
        value: 28,
        label: "Бизнес и икономика",
        id: "business",
    },
    {
        value: 35,
        label: "Компютърна литература",
        id: "computer",
    },
    {
        value: 12,
        label: "Художествена литература",
        id: "art",
    },
    {
        value: 80,
        label: "Детски книги",
        id: "children",
    }
]


function BookFilters(props) {

    const { selectedSortBy, startDate, endDate, checkedState, fetchBooks } = useBook();

    useEffect(() => {
        getBook();
    }, []);

    function filtersOnSubmit(event) {
        event.preventDefault();
        getBook();
    }

    function getBook() {

        fetchBooks('discover/movie', {
            "release_date.gte": getDate(startDate),
            "release_date.lte": getDate(endDate),
            "with_genres": getCheckedValue(),
            "sort_by": selectedSortBy,
        });
    }

    function getDate(date) {
        return moment(date).format('YYYY-MM-DD');
    }

    function getCheckedValue() {
        const checkedOptions = checkedState.reduce((acc, curr, index) => {
            if (curr) {
                return [...acc, checkboxes[index].value]
            }
            return acc
        }, [])
        return checkedOptions.toString();
    }

    return (
        <Card className="mt-2 mt-md-0">
            <Card.Body>
                <Card.Title className="mb-3">Филтри</Card.Title>
                <Form onSubmit={filtersOnSubmit}>
                    <SortByDate />
                    <Genre checkboxes={checkboxes} />
                    <SortBy />
                    <Button
                        variant="primary"
                        type="submit">
                        Търси
                    </Button>
                </Form>

            </Card.Body>
        </Card>
    )
}
export default BookFilters;