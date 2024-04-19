// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Parse XML data
    fetch('dtd.xml')
        .then(response => response.text())
        .then(xmlData => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlData, "text/xml");
            const books = xmlDoc.querySelectorAll('book');

            // Populate table with XML data
            const bookList = document.getElementById('book-list');
            books.forEach(book => {
                const title = book.querySelector('title').textContent;
                const author = book.querySelector('author').textContent;
                const genre = book.querySelector('genre').textContent;
                const publicationYear = book.querySelector('publication_year').textContent;

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${title}</td>
                    <td>${author}</td>
                    <td>${genre}</td>
                    <td>${publicationYear}</td>
                `;
                bookList.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching XML data:', error));
});
