import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import '../styles/BookDetail.css';
import axios from 'axios';

function BookDetail() {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const apiUrl = `http://localhost:3008/books/${id}`;

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(apiUrl);
                setData(response.data);
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to load book details!',
                });
            }
        };
        fetchBook();
    }, [id]);

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(apiUrl);
                    Swal.fire('Deleted!', 'The book has been deleted.', 'success')
                        .then(() => navigate('/book'));
                } catch (error) {
                    Swal.fire('Error!', 'There was a problem deleting the book.', 'error');
                }
            }
        });
    };

    const handleEdit = () => {
        navigate('/addbook', {
            state: { book: data }
        });
    };

    return (
        <div className="detail-book-page">
            <div className="book-card-container">
                {/* Top buttons row */}
                <div className="top-buttons">
                    <Link to="/book" className="btn btn-info">← Back to List</Link>
                    <button className="btn btn-warning" onClick={handleEdit}>Edit</button>
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>

                {/* Card */}
                <div className="book-card shadow-lg">
                    <div className="book-content">
                        <div className="book-image-container">
                            <img src={data.avatar} alt="Book cover" className="book-image" />
                        </div>
                        <div className="book-details">
                            <p className="book-id">Book ID: {data.bookID}</p>
                            <h1 className="book-title">{data.bookTitle}</h1>
                            <h4 className="book-author">Author: {data.authorName}</h4>
                            <p className="book-description">{data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetail;
