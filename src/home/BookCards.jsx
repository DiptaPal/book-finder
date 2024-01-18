/* eslint-disable react/prop-types */
import Card from "./Card";

export default function BookCards({ books, onFavorite }) {
    return (
        <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book) => (
                <Card key={book.id} book={book} onFavorite={onFavorite} />
            ))}
        </div>
    );
}
