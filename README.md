# 📚 BookHaven - Your Personal Book Library

**BookHaven** is a personal and cozy **MERN Stack web application** that lets you create, manage, and cherish your own collection of favorite books — like a private, digital bookshelf designed just for you.

> _"BookHaven is your peaceful corner to store and cherish the books you love."_  

---

## ✨ Why BookHaven?

The name **BookHaven** comes from the word **Haven**, meaning a safe, peaceful place.  
So BookHaven is your personal space to:
- Add books you love
- Write your thoughts or why you like them
- View, edit, or delete them anytime
- Revisit your reading memories!

I created this project because I love reading fiction, and I wanted a simple, custom place to remember books that inspired me.

---

## 🌟 Features

| Feature             | Description                       |
|---------------------|-----------------------------------|
| 📖 **Add Book**      | Add Book ID, Title, Author, Cover Image (via URL), and Description |
| 📋 **View Books**    | View all books in a beautiful **card view** |
| 🔎 **View Details**  | See detailed info with full cover, author, and description |
| ✏️ **Edit Book**     | Update any book's info easily |
| ❌ **Delete Book**   | Delete a book with SweetAlert confirmation |
| 🏠 **Home Page**     | Welcoming UI with inspiring messages and **Explore Books** |
| ℹ️ **About Page**    | Learn about the project and its purpose, with a signature animation |
| 🎨 **Dark Elegant Theme** | With custom CSS & sweet alerts for feedback |

---

## 🛠️ Tech Stack

**Frontend:**  
- React.js
- Axios
- React Router v6
- SweetAlert
- Custom CSS

**Backend:**  
- Node.js
- Express.js
- MongoDB (via Mongoose)

---

## 📂 Pages Overview

1. **Home Page:**  
Introductory view with a warm welcome and **Explore Books** button.

2. **Add Book Page:**  
Form to add new books with validation and error messages.

3. **Book List Page:**  
All added books displayed as cards — like a digital shelf.

4. **Book Detail Page:**  
View complete details with options to **Edit** or **Delete**.

5. **About Page:**  
Explains the story behind BookHaven with floating bubble animations.

---

## 🗂️ Folder Structure

- **Backend/**: Contains the **Node.js + Express** server code.
  - `model/` holds the **Mongoose schema (schema.js)** for book data.
  - `index.js` is the **main backend entry point**.
  
- **Frontend/bookhaven/**: Contains the **React.js frontend application**.
  - `src/pages/`: Includes all the main pages like **Home, About, AddBook, Book List, Book Detail**.
  - `src/styles/`: CSS files for styling each page separately.
  - `src/img/`: Stores images or icons used.
  - `App.js`: The **root component** of the React app.
  - `Layout.js`: Defines the **common layout structure** like header, footer.
  - `api.js`: Handles **API calls** to the backend using Axios.
  
- **public/**: Public assets and entry point for React.

- `package.json`: Both frontend and backend have separate package.json files to manage dependencies.
