import React, {useState, useEffect} from 'react'
import { fetchCategory } from '../../services/Api.js';

const Category = ({category}) => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const booksData = await fetchCategory(category);
            setBooks(booksData);
        };

        getBooks();
    }, []);

return (
    <div className="feature-container">
        <div className="feature-wrapper">

        <div className="title-container">
            <h1>{category}</h1>
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
  )
}

export default Category