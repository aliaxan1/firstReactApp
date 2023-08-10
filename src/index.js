import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



const books = [
    {
        title: 'The Five Wishes of Mr. Murray McBride',
        author: 'Joe Siple',
        img: 'https://m.media-amazon.com/images/P/1684330408.01._SCLZZZZZZZ_SX500_.jpg'
    },
    {
        title: 'Until I Get You',
        author: 'Claire Contreras',
        img: 'https://m.media-amazon.com/images/P/1733041109.01._SCLZZZZZZZ_SX500_.jpg'
    },
    {
        title: 'Ruin: A Novel of Flyfishing in Bankruptcy',
        author: ' Leigh Seippel',
        img: 'https://m.media-amazon.com/images/P/1947951602.01._SCLZZZZZZZ_SX500_.jpg'
    },
];

const BookList = () => {
    return (
        <section className='booklist'>
            {books.map((book) => { <Book {...Book} /> })};
        </section>
    );
};

const Book = (props) => {
    const { img, title, author } = props;
    console.log(props);
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h1>{title}</h1>
            <h4>{author}</h4>
        </article>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
