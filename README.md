# Prompt
You are tasked with developing a robust REST API using Node.js for managing a collection of books. The API should support CRUD operations (Create, Read, Update, Delete) for books. Below are the required endpoints and their functionalities:

1. GET /books: Retrieve a list of all books. Implement pagination to limit the number of books returned per request.
2. GET /books/{id}: Retrieve details of a specific book by ID.
3. POST /books: Add a new book to the collection. Implement input validation to ensure all required fields are provided (`title`, `author`, `publicationYear`), and `publicationYear` should be a valid year in the past.
4. PUT /books/{id}: Update details of a specific book by ID. Allow partial updates, and ensure validation is applied to the input data.
5. DELETE /books/{id}: Delete a specific book by ID.
6. GET /books/search?q={query}: Implement search functionality to allow users to search for books by title or author.
7. GET /books/stats: Provide statistics about the collection of books, including the total number of books, the earliest and latest publication years, and any other relevant metrics you think are appropriate.

Each book should have the following attributes:
- `id` (unique identifier)
- `title`
- `author`
- `publicationYear`

# Data
You can structure the data in a MySQL or MongoDB database. Here's an example of how the data might look:

```javascript
const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publicationYear: 1960 },
  { id: 3, title: '1984', author: 'George Orwell', publicationYear: 1949 }
];
```

# Output Requirements
- The API should be RESTful and follow best practices.
- Implement pagination for listing books.
- Implement proper input validation for POST and PUT endpoints.
- Implement search functionality using query parameters.
- Include comprehensive error handling and appropriate status codes.
- Write clean, well-structured, and maintainable code.
- Include thorough documentation and comments.

# Evaluation Criteria
- Correctness and completeness of API implementation.
- Implementation of pagination, search, and statistics functionality.
- Quality of code (readability, maintainability, efficiency).
- Adherence to RESTful principles and best practices.
- Error handling, input validation, and edge cases handling.
- Documentation quality and completeness.

# Submission
- The candidate should deliver the completed project via email the next day.
- The submission should be a compressed folder containing the project files.
- Include a README file with instructions on how to run the application locally.
- Ensure the project is well-organized and easy to understand.
Database dump file

# Additional Notes
- Utilize asynchronous programming paradigms where appropriate.
- Implement unit tests to ensure the reliability of the API.
- Consider scalability and performance optimizations.
- You can include any additional features or improvements you think are appropriate to showcase your skills.
