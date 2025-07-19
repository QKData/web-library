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
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        
        bookCard.innerHTML = `
            <div class="book-title">${book.title}</div>
            <div class="book-author">by ${book.author}</div>
            <div class="book-id">ID: ${book.id}</div>
            <button class="remove-book" data-book-id="${book.id}" data-index="${index}">Remove</button>
        `;
        
        libraryContainer.appendChild(bookCard);
    });
    
    // Add event listeners to all remove buttons
    setupRemoveButtons();
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
document.addEventListener('DOMContentLoaded', function() {
    initializeLibrary();
    // displayLibrary();
    setupFormHandlers();
});

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
            addBookToLibrary(newBook);
            
            // Refresh the display
            displayLibrary();
            
            // Hide form and reset
            formContainer.style.display = 'none';
            bookForm.reset();
        }
    });
}

function setupRemoveButtons() {
    const removeButtons = document.querySelectorAll('.remove-book');
    
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const bookId = this.getAttribute('data-book-id');
            removeBookFromLibrary(bookId);
        });
    });
}

function removeBookFromLibrary(bookId) {
    // Find the index of the book with the given ID
    const bookIndex = myLibrary.findIndex(book => book.id === bookId);
    
    if (bookIndex !== -1) {
        // Remove the book from the array
        myLibrary.splice(bookIndex, 1);
        
        // Refresh the display
        displayLibrary();
    }
}