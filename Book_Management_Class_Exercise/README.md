
---

# **Book Management REST API**

A Node.js REST API for managing a collection of books stored in a JSON file. Built with **Express.js**, uses **fs/promises** for non-blocking file operations, and implements **EventEmitter** for logging book actions.

---

## **📂 Folder Structure**

```
book-api/
├── data/books.json
├── services/bookService.js
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

## **⚙️ Setup Instructions**

### **1. Clone the Repository**

```bash
git clone <your-repo-url>
cd book-api
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Create `.env` File**

```env
PORT=3000
PATH_TO_BOOKS_JSON=./data/books.json
```

### **4. Ensure Initial Data File Exists**

Create a `data/books.json` file with an empty array:

```json
[]
```

### **5. Run the Server**

```bash
npm start
```

This will run the server using **nodemon** (auto-restarts on changes).

---

## **📌 API Endpoints**

| Method     | Endpoint     | Description               | Request Body Example                                     | Response Example                                               |
| ---------- | ------------ | ------------------------- | -------------------------------------------------------- | -------------------------------------------------------------- |
| **GET**    | `/`          | Root route message        | –                                                        | `{ "message": "Welcome to Book Management API" }`              |
| **GET**    | `/books`     | Get all books             | –                                                        | `[ { "id": "1", "title": "Book Title", "author": "Author" } ]` |
| **GET**    | `/books/:id` | Get a single book by ID   | –                                                        | `{ "id": "1", "title": "Book Title", "author": "Author" }`     |
| **POST**   | `/books`     | Add a new book            | `{ "id": "2", "title": "New Book", "author": "Author" }` | `{ "id": "2", "title": "New Book", "author": "Author" }`       |
| **PUT**    | `/books/:id` | Update book details by ID | `{ "title": "Updated Book Title" }`                      | `{ "message": "Book updated successfully" }`                   |
| **DELETE** | `/books/:id` | Delete a book by ID       | –                                                        | `204 No Content`                                               |

---

## **🛠 Technologies Used**

* **Node.js** – Backend runtime
* **Express.js** – Web framework
* **fs/promises** – File system operations
* **EventEmitter** – Event logging
* **dotenv** – Environment variable management
* **nodemon** – Development auto-restart

---

## **📜 Features**

* Create, Read, Update, Delete books.
* Data persisted in `books.json`.
* Async/await file operations (non-blocking).
* Event logs for book additions, updates, deletions.
* Proper error handling with `try/catch`.

---

## **📋 Example Event Logs**

When performing CRUD actions, the console will log:

```
✅ Book Added
✏️ Book Updated
🗑️ Book Deleted
```


