import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import '../styles/AddBook.css';
import axios from 'axios';

function AddBook() {
    const [data, setData] = useState({
        bookID: "",
        bookTitle: "",
        authorName: "",
        avatar: "",
        description: ""
    });

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.book) {
            setData(location.state.book);
        }
    }, [location.state]);

    const handleSubmit = async () => {
        const { bookID, bookTitle, authorName, avatar } = data;

        if (!bookID || !bookTitle || !authorName || !avatar) {
            Swal.fire({
                icon: 'error',
                title: 'Missing Fields',
                text: 'Please fill in all required fields!',
                confirmButtonColor: '#0e4475'
            });
            return;
        }

        const apiUrl = location.state?.book
            ? `http://localhost:3008/books/${data.bookID}`
            : "http://localhost:3008/books";

        try {
            await axios({
                method: location.state?.book ? "put" : "post",
                url: apiUrl,
                data,
                headers: { "Content-Type": "application/json" }
            });

            Swal.fire({
                icon: 'success',
                title: location.state?.book ? 'Updated!' : 'Submitted!',
                text: location.state?.book
                    ? 'Book details updated successfully!'
                    : 'Book added successfully!',
                confirmButtonColor: '#0e4475'
            }).then(() => {
                navigate('/book');
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong. Please try again.',
                confirmButtonColor: '#0e4475'
            });
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const form = e.target.form;
            const index = Array.prototype.indexOf.call(form, e.target);
            form.elements[index + 1]?.focus();
            e.preventDefault();
        }
    };

    return (
        <div className="addbook-page">
            <Link to="/" className="back-button">← Back to Home</Link>
            <div className="addbook-card">
                <h2>{location.state?.book ? "Edit Book Details" : "Add New Book"}</h2>

                <form className="addbook-form">
                    <div className="form-group">
                        <label>Book ID</label>
                        <input
                            type="text"
                            placeholder="Enter Book ID"
                            value={data.bookID}
                            onChange={(e) => setData({ ...data, bookID: e.target.value })}
                            onKeyDown={handleKeyDown}
                        />
                    </div>

                    <div className="form-group">
                        <label>Book Title</label>
                        <input
                            type="text"
                            placeholder="Enter Book Title"
                            value={data.bookTitle}
                            onChange={(e) => setData({ ...data, bookTitle: e.target.value })}
                            onKeyDown={handleKeyDown}
                        />
                    </div>

                    <div className="form-group">
                        <label>Author Name</label>
                        <input
                            type="text"
                            placeholder="Enter Author Name"
                            value={data.authorName}
                            onChange={(e) => setData({ ...data, authorName: e.target.value })}
                            onKeyDown={handleKeyDown}
                        />
                    </div>

                    <div className="form-group">
                        <label>Image URL</label>
                        <input
                            type="text"
                            placeholder="Paste image URL"
                            value={data.avatar}
                            onChange={(e) => setData({ ...data, avatar: e.target.value })}
                            onKeyDown={handleKeyDown}
                        />
                        {data.avatar && (
                            <img src={data.avatar} alt="Preview" className="image-preview" />
                        )}
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            placeholder="Write a short description"
                            value={data.description}
                            onChange={(e) => setData({ ...data, description: e.target.value })}
                        />
                    </div>

                    <button
                        type="button"
                        className="submit-button"
                        onClick={handleSubmit}
                    >
                        {location.state?.book ? "Update Book" : "Submit Book"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;
