// booksService.js

const formatBookData = (book) => ({
    id: book.id,
    title: book.volumeInfo?.title || 'No title',
    subtitle: book.volumeInfo?.subtitle || '',
    authors: book.volumeInfo?.authors || ['Unknown'],
    publisher: book.volumeInfo?.publisher || 'Unknown',
    publishedDate: book.volumeInfo?.publishedDate || 'Unknown',
    description: book.volumeInfo?.description || 'No description',
    categories: book.volumeInfo?.categories || ['Uncategorized'],
    pageCount: book.volumeInfo?.pageCount || 'N/A',
    language: book.volumeInfo?.language || 'N/A',
    image: book.volumeInfo?.imageLinks?.thumbnail || '',
    infoLink: book.volumeInfo?.infoLink || '',
});

export const fetchBooks = async () => {
    try {
        const response = await fetch(
            'https://www.googleapis.com/books/v1/volumes?q=bestseller+2025&maxResults=5'
        );
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();

        return data.items?.map(formatBookData) || [];
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};

export const fetchCategory = async (category) => {
    try {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&orderBy=relevance&filter=full&maxResults=5`
        );
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();

        return data.items?.map(formatBookData) || [];
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};


