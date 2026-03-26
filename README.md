#  Backend Authentication

This is a Node.js/Express/MongoDB backend API for user authentication and protected content access. It supports user registration with JWT-based cookie authentication and a protected post endpoint.

## 🚀 Features
- User registration with email uniqueness check
- JWT token generation and cookie storage
- Protected routes (e.g., create post) requiring valid auth token
- MongoDB with Mongoose ODM
- RESTful API design

## 📁 Project Structure
```
.
├── .gitignore                # Ignores .env and node_modules
├── package.json              # Dependencies and scripts
├── package-lock.json         # Locked dependency versions
├── server.js                 # Entry point: connects DB and starts server on port 3000
├── src/
│   ├── app.js                # Express app setup, middleware, route mounting
│   ├── controllers/
│   │   └── auth.controller.js # Handles user registration logic (create user, JWT sign, cookie set)
│   ├── db/
│   │   └── db.js             # MongoDB connection using Mongoose
│   ├── models/
│   │   └── user.model.js     # Mongoose User schema (username, email unique, password)
│   └── routes/
│       ├── auth.route.js     # POST /api/auth/register -> registerUser
│       └── post.route.js     # POST /api/create/post (protected: verifies JWT from cookie)
```

## 🛠️ Prerequisites
- Node.js (v18+ recommended)
- MongoDB (local or Atlas with MONGO_URI)
- npm or yarn

## 📦 Setup & Installation
1. Clone the repo or navigate to project directory:
   ```
   cd d:/YT_backend/Authentication
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create `.env` file in root:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key (e.g., a_very_long_random_secret)
   ```

4. Run the server:
   ```
   node server.js
   ```
   Server starts on `http://localhost:3000`

## 📖 API Endpoints

| Method | Endpoint              | Description                  | Auth Required | Body                          |
|--------|-----------------------|------------------------------|---------------|-------------------------------|
| POST   | `/api/auth/register`  | Register new user            | No            | `{ username, email, password }` |
| POST   | `/api/create/post`    | Protected post (token check) | Yes (cookie)  | -                             |

### Example Requests
**Register:**
```
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"test","email":"test@example.com","password":"123"}'
```
Response: User data + JWT cookie set.

**Protected Post:**
```
curl -X POST http://localhost:3000/api/create/post \
  -H "Cookie: token=your_jwt_token"
```
Response: User data if valid token.

## ⚠️ Security Notes & TODOs
- **Password hashing missing**: Add bcryptjs before production.
- **No login endpoint**: Implement login for existing users.
- **Express 5.x beta**: Consider stable version (4.x).
- **Input validation**: Add joi/zod.
- **Error handling**: Improve global error middleware.
- **Rate limiting**: Add express-rate-limit.
- Tests: Add using Jest/Supertest.

## 🐛 Troubleshooting
- **DB connection fail**: Check MONGO_URI.
- **JWT errors**: Verify JWT_SECRET in .env.
- **Port in use**: Change `app.listen(3000)` in server.js.

## Contributing
Feel free to fork and submit PRs!

## License
ISC

