class Book {
    constructor(title, author) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.read = false;
    }
}

class Library {
    constructor() {
        this.books = [];
    }
    
    addBook(book) {
        this.books.push(book);
        return book;
    }
    
    removeBook(bookId) {
        const bookIndex = this.books.findIndex(book => book.id === bookId);
        if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);
            this.displayLibrary();
        }
    }
    
    toggleReadStatus(bookId) {
        const book = this.books.find(book => book.id === bookId);
        if (book) {
            book.read = !book.read;
            this.displayLibrary();
        }
    }
    
    displayLibrary() {
        const libraryContainer = document.getElementById('library-container');
        
        // Clear existing content
        libraryContainer.innerHTML = '';
        
        // Check if library is empty
        if (this.books.length === 0) {
            libraryContainer.innerHTML = '<div class="no-books">No books in your library yet!</div>';
            return;
        }
        
        // Loop through each book and create a card
        this.books.forEach((book, index) => {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            
            bookCard.innerHTML = `
                <div class="book-title">${book.title}</div>
                <div class="book-author">by ${book.author}</div>
                <div class="book-id">ID: ${book.id}</div>
                <button class="read-status ${book.read ? 'read' : 'unread'}" data-book-id="${book.id}">
                    ${book.read ? 'Read' : 'Unread'}
                </button>
                <button class="remove-book" data-book-id="${book.id}" data-index="${index}">Remove</button>
            `;
            
            libraryContainer.appendChild(bookCard);
        });
        
        // Add event listeners to all remove buttons
        this.setupRemoveButtons();
        // Add event listeners to all read status buttons
        this.setupReadButtons();
    }
    
    setupRemoveButtons() {
        const removeButtons = document.querySelectorAll('.remove-book');
        
        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const bookId = button.getAttribute('data-book-id');
                this.removeBook(bookId);
            });
        });
    }
    
    setupReadButtons() {
        const readButtons = document.querySelectorAll('.read-status');
        
        readButtons.forEach(button => {
            button.addEventListener('click', () => {
                const bookId = button.getAttribute('data-book-id');
                this.toggleReadStatus(bookId);
            });
        });
    }
    
    initializeWithSampleBooks() {
        const book1 = new Book("To Kill a Mockingbird", "Harper Lee");
        const book2 = new Book("1984", "George Orwell");
        const book3 = new Book("Pride and Prejudice", "Jane Austen");
        
        this.addBook(book1);
        this.addBook(book2);
        this.addBook(book3);
        
        this.displayLibrary();
    }
}

// Create a global library instance
const myLibrary = new Library();

function setupFormHandlers() {
    const newBookBtn = document.getElementById('new-book');
    const formContainer = document.getElementById('book-form-container');
    const bookForm = document.getElementById('book-form');
    const cancelBtn = document.getElementById('cancel-form');
    
    // Show form when "New Book" button is clicked
    newBookBtn.addEventListener('click', function() {
        formContainer.style.display = 'block';
        document.getElementById('book-title').focus();
    });
    
    // Hide form when "Cancel" button is clicked
    cancelBtn.addEventListener('click', function() {
        formContainer.style.display = 'none';
        bookForm.reset(); // Clear form fields
    });
    
    // Handle form submission
    bookForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        const title = document.getElementById('book-title').value.trim();
        const author = document.getElementById('book-author').value.trim();
        
        if (title && author) {
            // Create new book and add to library
            const newBook = new Book(title, author);
            myLibrary.addBook(newBook);
            
            // Refresh the display
            myLibrary.displayLibrary();
            
            // Hide form and reset
            formContainer.style.display = 'none';
            bookForm.reset();
        }
    });
}

// Initialize the library when the page loads
document.addEventListener('DOMContentLoaded', function() {
    myLibrary.initializeWithSampleBooks();
    setupFormHandlers();
});