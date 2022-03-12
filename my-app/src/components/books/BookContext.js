import React, { useContext, useState } from "react";
import axios from 'axios';
import constants from "../../constants";
import moment from "moment";

const BookContext = React.createContext();

export function useBook() {

    return useContext(BookContext);

}

export function BookProvider(props) {

    const startFrom = moment().subtract(1, 'years').toDate();

    const [startDate, setStartDate] = useState(startFrom);
    const [endDate, setEndDate] = useState(new Date());

    const [selectedSortBy, setSelectedSortBy] = useState("popularity.desc");

    const [checkedState, setCheckedState] = useState(
        new Array(4).fill(false)
    );

    const [books, setBooks] = useState([]);

    const [listView, setListView] = useState()

    const fetchBooks = (path, params) => {
        axios.get(`${constants.baseUrl}${path}`, {
            params: { ...params, api_key: constants.apiKey }
        })
            .then(response => {
                setBooks(response.data.results);
            })
    }


    return (
        <BookContext.Provider
            value={{
                startDate, setStartDate,
                endDate, setEndDate,
                selectedSortBy, setSelectedSortBy,
                checkedState, setCheckedState,
                books, setBooks,
                fetchBooks,
                listView, setListView,
            }}>
            {props.children}
        </BookContext.Provider>
    )
}