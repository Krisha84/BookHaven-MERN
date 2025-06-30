import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3008/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('❌ Axios Error:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>📚 BookHaven - Book List</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
