const myLibrary = [];

function Book(title, author) {
  // the constructor...
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
}

function addBookToLibrary(bookData) {
  // take params, create a book then store it in the array
    myLibrary.push(bookData);
    return bookData;
}

function displayLibrary() {
    const libraryContainer = document.getElementById('library-container');
    
    // Clear existing content
    libraryContainer.innerHTML = '';
    
    // Check if library is empty
    if (myLibrary.length === 0) {
        libraryContainer.innerHTML = '<div class="no-books">No books in your library yet!</div>';
        return;
    }
    
    // Loop through each book and create a card
    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        
        bookCard.innerHTML = `
            <div class="book-title">${book.title}</div>
            <div class="book-author">by ${book.author}</div>
            <div class="book-id">ID: ${book.id}</div>
        `;
        
        libraryContainer.appendChild(bookCard);
    });
}

// Example usage - add some sample books and display them
function initializeLibrary() {
    // Add some sample books
    const book1 = new Book("To Kill a Mockingbird", "Harper Lee");
    const book2 = new Book("1984", "George Orwell");
    const book3 = new Book("Pride and Prejudice", "Jane Austen");
    
    addBookToLibrary(book1);
    addBookToLibrary(book2);
    addBookToLibrary(book3);
    
    // Display the library
    displayLibrary();
}

// Initialize the library when the page loads
document.addEventListener('DOMContentLoaded', initializeLibrary);
