import { Link } from 'react-router-dom';
import '../styles/Home.css';
import banner from '../img/books.jpeg'; // Make sure this is your good wide image

function Home() {
    return (
        <div className="home-container">
            <div className="home-left">
                <img src={banner} alt="Bookshelf Banner" className="home-image" />
            </div>

            <div className="home-right">
                <div className="home-text">
                    <h1>Welcome to <span>BookHaven</span> 📚</h1>
                    <p className="subtitle">Your personal book tracker and favorite list manager.</p>
                    <p className="description">
                        Whether you're an avid reader or building your private book game list, BookHaven helps you keep track of the books you love. Add, update, delete, and explore — it's your personal library, your way.
                    </p>

                    <div className="home-buttons">
                        <Link to="/book" className="btn primary">📘 View Books</Link>
                        <Link to="/addbook" className="btn secondary">➕ Add Book</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
