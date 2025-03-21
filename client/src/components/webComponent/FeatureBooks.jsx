import React, {useState, useEffect} from 'react'
import "../styles/FeatureBooks.css"
import { fetchBooks } from '../../services/Api';

const FeatureBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const booksData = await fetchBooks();
            setBooks(booksData);
        };

        getBooks();
    }, []);

    return (
        <div className="feature-container">
            <div className="feature-wrapper">

            <div className="title-container">
                <h1>Best Selling of 2025</h1>
            </div>

            <hr />

            <div className="book-list-container">         
                <ul className='book-list'>
                    {books.map((book, index) => (
                    <li key={index} className='book-list-item'>
                        {book.image && <img src={book.image} alt={book.title} />}
                        <p>{book.title}</p>
                    </li>
                    ))}
                </ul>
            </div> 

            

          </div>
        </div>
    );
}

export default FeatureBooks