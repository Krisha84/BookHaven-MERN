import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Book.css';
import axios from 'axios';

function Book() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:3008/books');
                setData(response.data);
            } catch (error) {
                console.error("Failed to fetch books:", error);
            }
        };
        fetchBooks();
    }, []);

    return (
        <div className="book-page">
            <div className="book-header">
                <Link to="/" className="back-button">Back to Home</Link>
            </div>
            <div className="book-grid">
                {data.length === 0 ? (
                    <p className="no-books">No books found.</p>
                ) : (
                    data.map((book) => (
                        <div className='book-card' key={book.bookID}>
                            <div className="card shadow">
                                <img src={book.avatar} alt="Book cover" className="card-img" />
                                <div className="card-body">
                                    <h5 className="card-title">{book.bookTitle}</h5>
                                    <p className="card-author">by {book.authorName}</p>
                                    <Link className="btn view-button" to={`/book/${book.bookID}`}>Read More</Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Book;
