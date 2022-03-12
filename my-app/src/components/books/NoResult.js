import { Alert } from "react-bootstrap";

function noResult() {

    return (
        <Alert variant="info" className="p-5 text-center">
            <b>Няма намерени резултати!</b>
        </Alert>

    )
}
export default noResult;