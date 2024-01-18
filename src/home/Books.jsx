import { useState } from "react";
import booksData from "../assets/data.json";
import BookAction from "./BookActions";
import BookCards from "./BookCards";
import NoBooksFount from "./NoBooksFount";

export default function Books() {
    const data = booksData;
    const [books, setBooks] = useState(data);
    const [sortedBooks, setSortedBooks] = useState(data);

    const handleSearch = (searchTerm) => {
        const newBooks = data.filter((book) =>
            book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setBooks(newBooks);
        setSortedBooks(newBooks);
    };

    const handleSort = (e) => {
        const sortBy = e.target.value;

        const newBooks = [...books];

        if (sortBy === "") {
            setBooks(sortedBooks);
            return;
        }
        if (sortBy === "name_asc") {
            newBooks.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));
        }
        if (sortBy === "name_desc") {
            newBooks.sort((a, b) => b.bookTitle.localeCompare(a.bookTitle));
        }
        if (sortBy === "year_asc") {
            newBooks.sort((a, b) => a.publishYear - b.publishYear);
        }
        if (sortBy === "year_desc") {
            newBooks.sort((a, b) => b.publishYear - a.publishYear);
        }
        setBooks(newBooks);
    };

    const handleFavorite = (bookId) => {
        const newBooks = books.map((book) => {
            if (book.id === bookId) {
                return {
                    ...book,
                    isFavorite: !book.isFavorite,
                };
            }
            return book;
        });
        setBooks(newBooks);
    };
    return (
        <main className="my-10 lg:my-14">
            <BookAction onSearch={handleSearch} onSort={handleSort} />
            {books.length > 0 ? (
                <BookCards books={books} onFavorite={handleFavorite} />
            ) : (
                <NoBooksFount />
            )}
        </main>
    );
}
