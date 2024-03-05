const assert = require('assert');
const request = require('supertest');
const app = require('../src/server'); // Import the server
const chai = require('chai');
const expect = chai.expect;

describe('Testing API Endpoints', () => {

    // 1. Test GET /books: 
    describe('GET /books', () => {
        it('should retrieve a list of all books. Implement pagination to limit the number of books returned per request.', async () => {
            expect();
        });
    });
    // 2. Test GET /books/{id}: 
    describe('GET /books/:id', () => {
        it('should retrieve details of a specific book by ID', async () => {
            expect();
        });
    });

    // 3. Test POST /books: 
    describe('POST /books', () => {
        it('should add a new book to the collection, and use input validation to ensure all required fields are provided (`title`, `author`, `publicationYear`), and `publicationYear` should be a valid year in the past.', async () => {
            expect();
        });
    });

    // 4. Test PUT /books/{id}: 
    describe('PUT /books/:id', () => {
        it('should update details of a specific book by ID, and should partial updates, and ensure validation is applied to the input data.', async () => {
            expect();
        });
    });

    // 5. Test DELETE /books/{id}: 
    describe('DELETE /books/:id', () => {
        it('should delete a specific book by ID', async () => {
            expect();
        });
    });

    // 6. Test GET /books/search?q={query}: 
    describe('GET /books/search', () => {
        it('should allow users to search for books by title or author', async () => {
            expect();
        });
    });

    // 7. Test GET /books/stats: 
    describe('GET /books/stats', () => {
        it('should provide statistics about the collection of books, including the total number of books, the earliest and latest publication years, and any other relevant metrics you think are appropriate.', async () => {
            expect();
        });
    });

})
