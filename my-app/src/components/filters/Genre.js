import { Form } from "react-bootstrap";
import { useBook } from "../books/BookContext"


function Genre(props) {



    const { checkedState, setCheckedState } = useBook();

    function handleChange(index) {
        checkedState[index] = !checkedState[index]
        setCheckedState(checkedState);
    }

    function getGenre() {
        return props.checkboxes.map((checkbox, index) => {
            return <Form.Group key={checkbox.value}
                controlId={checkbox.id}>
                <Form.Check
                    value={checkedState[index]}
                    onChange={() => handleChange(index)}
                    type="checkbox"
                    label={checkbox.label} />
            </Form.Group >

        })

    }
    return (
        <Form.Group className="mb-3" controlId="filterForm.ControlCheckboxes">
            <Form.Label>Изберете Жанр:</Form.Label>
            {getGenre()}
        </Form.Group>

    )
}
export default Genre;