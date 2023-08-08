import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const BookList = () => {
    return (
        <section>
            <Book />
            <Book />
            <Book />
        </section>
    );
};

const Book = () => {
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    );
}

const Image = () => {
    return (
        <img
            src='https://m.media-amazon.com/images/P/1684330408.01._SCLZZZZZZZ_SX500_.jpg'
            alt='The Five Wishes of Mr. Murray McBride'
        />
    );
}

const Title = () => {
    return (
        <h1>The Five Wishes of Mr. Murray McBride</h1>
    );
}

const Author = () => {
    return (
        <h4>Joe Siple</h4>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
