# Web Library

A simple, interactive web-based library management system built with vanilla JavaScript, HTML, and CSS. Manage your personal book collection with an intuitive interface.

## Features

- ✅ **Add Books**: Create new book entries with title and author
- ✅ **View Library**: Display all books in an attractive card-based layout
- ✅ **Toggle Read Status**: Mark books as read/unread with visual indicators
- ✅ **Remove Books**: Delete books from your collection
- ✅ **Unique IDs**: Each book gets a unique UUID for reliable tracking
- ✅ **Responsive Design**: Works on desktop and mobile devices

## Getting Started

### Prerequisites

- Modern web browser with JavaScript enabled
- No additional dependencies required

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/web-library.git
```

2. Navigate to the project directory:
```bash
cd web-library
```

3. Open `index.html` in your web browser

## Usage

### Adding a Book

1. Click the **"New Book"** button
2. Fill in the book title and author
3. Click **"Add Book"** to save
4. The book will appear in your library with a unique ID

### Managing Books

- **Mark as Read/Unread**: Click the status button (red = unread, green = read)
- **Remove Book**: Click the "Remove" button to delete a book permanently

### Sample Data

The library comes pre-loaded with three classic books for demonstration:
- To Kill a Mockingbird by Harper Lee
- 1984 by George Orwell
- Pride and Prejudice by Jane Austen

## Project Structure

```
web-library/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## Technical Details

### Book Object Structure

Each book is created using a constructor function with the following properties:

```javascript
function Book(title, author) {
    this.id = crypto.randomUUID();    // Unique identifier
    this.title = title;               // Book title
    this.author = author;             // Author name
    this.read = false;                // Read status (default: false)
}
```

### Key Functions

- **`Book(title, author)`**: Constructor for creating new book objects
- **`addBookToLibrary(bookData)`**: Adds a book to the library array
- **`displayLibrary()`**: Renders all books in the DOM
- **`removeBookFromLibrary(bookId)`**: Removes a book by its unique ID
- **`toggleReadStatus(bookId)`**: Toggles the read/unread status

### Data Storage

Currently, the library uses in-memory storage (JavaScript array). Books are not persisted between browser sessions.

## Browser Compatibility

- ✅ Chrome 92+
- ✅ Firefox 90+
- ✅ Safari 15+
- ✅ Edge 92+

*Requires support for `crypto.randomUUID()` API*

## Future Enhancements

- [ ] Local storage persistence
- [ ] Book search and filtering
- [ ] Import/export functionality
- [ ] Book categories/genres
- [ ] Rating system
- [ ] Dark mode toggle
- [ ] Book cover images

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built as part of [The Odin Project](https://www.theodinproject.com/) curriculum
- Inspired by modern library management systems
- Uses vanilla JavaScript for maximum compatibility

**Happy Reading! 📚**