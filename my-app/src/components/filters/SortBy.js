import { FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import { useBook } from '../books/BookContext';

function SortBy(props) {

    const { selectedSortBy, setSelectedSortBy } = useBook();

    const options = [
        {
            value: "popularity.desc",
            title: "Най-популярни",
        },
        {
            value: "release_date.desc",
            title: "Най-нови",
        },
        {
            value: "vote_average.desc",
            title: "Най-висок рейтинг",
        },
    ]

    function getOptions() {
        return options.map(option => {
            return <option
                key={option.value}
                value={option.value}>
                {option.title}</option>
        })
    }

    return (
        <FormGroup className="mb-3" controlId="filterForm.ControlSelect1">
            <FormLabel>Подреди по:</FormLabel>
            <FormSelect
                value={selectedSortBy}
                onChange={e => setSelectedSortBy(e.target.value)}>
                {getOptions()}
            </FormSelect>
        </FormGroup>
    )
}
export default SortBy;