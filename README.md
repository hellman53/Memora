# Memora 📝

A modern, full-stack note-taking application built with React and Node.js. Memora allows you to create, read, update, and delete notes with a beautiful and intuitive user interface.

## 🌐 Live Demo

**Try Memora now:** [https://memora-zepx.onrender.com/](https://memora-zepx.onrender.com/)

## 🚀 Features

- ✨ **Modern UI/UX** - Built with React and styled using TailwindCSS and DaisyUI
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🔒 **Rate Limiting** - Built-in rate limiting using Upstash Redis for API protection
- ⚡ **Fast Performance** - Optimized with Vite for lightning-fast development and builds
- 🗄️ **MongoDB Integration** - Persistent data storage with MongoDB and Mongoose
- 🎯 **CRUD Operations** - Full Create, Read, Update, Delete functionality for notes
- 🚦 **Error Handling** - Comprehensive error handling with user-friendly notifications
- 🔄 **Hot Reload** - Development server with hot module replacement
- 🌍 **Deployed on Render** - Live production deployment

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern JavaScript library for building user interfaces
- **Vite** - Next-generation frontend tooling
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - Beautiful UI components for TailwindCSS
- **React Router** - Declarative routing for React
- **Axios** - Promise-based HTTP client
- **React Hot Toast** - Beautiful toast notifications
- **Lucide React** - Beautiful & consistent icons

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Upstash Redis** - Serverless Redis for rate limiting
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Deployment
- **Render** - Cloud platform for hosting the application
- **MongoDB Atlas** - Cloud database service

## 📋 Prerequisites

Before running this application locally, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Redis** (Upstash Redis account for rate limiting)

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/memora.git
   cd memora
   ```

2. **Install dependencies for both frontend and backend**
   ```bash
   npm run build
   ```
   
   Or install manually:
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   
   # Return to root directory
   cd ..
   ```

3. **Environment Setup**
   
   Create a `.env` file in the `backend` directory with your configuration. See the [Environment Variables](#-environment-variables) section below for detailed setup instructions.

4. **Database Setup**
   - Make sure MongoDB is running on your system
   - The application will automatically create the database and collections on first run

## 🔧 Environment Variables

Create a `.env` file in the `backend` directory and configure the following variables:

### Local Development Configuration
```env
# MongoDB Connection (Local)
MONGO_URL=mongodb://localhost:27017/memora

# Server Configuration
PORT=5001
NODE_ENV=development

# Upstash Redis Configuration (Required for rate limiting)
UPSTASH_REDIS_REST_URL=https://your-redis-instance.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

### Production/Atlas Configuration
```env
# MongoDB Atlas Connection
MONGO_URL=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/memora?retryWrites=true&w=majority

# Server Configuration
PORT=5001
NODE_ENV=production

# Upstash Redis Configuration
UPSTASH_REDIS_REST_URL=https://your-redis-instance.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

### How to Get Your Keys:

#### MongoDB Atlas Setup:
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account and cluster
3. Create a database user with read/write permissions
4. Whitelist your IP address (or use 0.0.0.0/0 for all IPs in development)
5. Get your connection string from "Connect" → "Connect your application"

#### Upstash Redis Setup:
1. Go to [Upstash Console](https://console.upstash.com/)
2. Create a free account
3. Create a new Redis database
4. Copy the REST URL and Token from the database details page

#### Local MongoDB Setup (Alternative):
If you prefer local MongoDB:
1. Install MongoDB locally
2. Start MongoDB service
3. Use `MONGO_URL=mongodb://localhost:27017/memora`

## 🚀 Running the Application

### Development Mode

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:5001`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

### Production Mode

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:5001`

## 📁 Project Structure

```
memora/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js          # MongoDB connection
│   │   │   └── upstash.js     # Upstash Redis configuration
│   │   ├── controllers/
│   │   │   └── notesController.js  # Notes CRUD operations
│   │   ├── middleware/
│   │   │   └── rateLimiter.js      # Rate limiting middleware
│   │   ├── models/
│   │   │   └── Note.js             # Note schema
│   │   ├── router/
│   │   │   └── notesRouter.js      # API routes
│   │   └── server.js               # Express server setup
│   ├── package.json
│   └── .env                        # Environment variables
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── NoteCard.jsx
│   │   │   ├── NotesNotFound.jsx
│   │   │   └── RateLimitedUI.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── CreatePage.jsx
│   │   │   └── NoteDetailPage.jsx
│   │   ├── lib/
│   │   │   └── axios.js        # Axios configuration
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
├── package.json
├── .gitignore
├── .env.example                    # Environment variables template
└── README.md
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/notes` | Get all notes |
| POST   | `/api/notes` | Create a new note |
| GET    | `/api/notes/:id` | Get a specific note |
| PUT    | `/api/notes/:id` | Update a specific note |
| DELETE | `/api/notes/:id` | Delete a specific note |

## 🎯 Usage

1. **Creating Notes**: Click the "+" button or navigate to `/create` to add new notes
2. **Viewing Notes**: All notes are displayed on the home page in a responsive grid
3. **Editing Notes**: Click on any note card to view and edit the note
4. **Deleting Notes**: Use the delete button on note cards to remove notes
5. **Rate Limiting**: The app includes built-in rate limiting to prevent API abuse

## 🌐 Deployment

The application is deployed on Render and can be accessed at:
**[https://memora-zepx.onrender.com/](https://memora-zepx.onrender.com/)**

### Deployment Configuration

- **Platform**: Render
- **Database**: MongoDB Atlas
- **Redis**: Upstash Redis
- **Build Command**: `npm run build`
- **Start Command**: `npm start`

### Deploy Your Own Instance

1. Fork this repository
2. Create accounts for MongoDB Atlas and Upstash Redis
3. Set up your environment variables in your deployment platform
4. Deploy to your preferred platform (Render, Vercel, Heroku, etc.)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Troubleshooting

### Common Issues:

1. **MongoDB Connection Error**
   - Verify your MongoDB URL is correct
   - Check if MongoDB service is running (for local setup)
   - Ensure IP whitelist includes your IP (for Atlas)

2. **Rate Limiting Not Working**
   - Verify Upstash Redis credentials
   - Check if Redis instance is active

3. **Frontend Not Loading**
   - Make sure backend is running on the correct port
   - Check CORS configuration for development

4. **Render Deployment Issues**
   - Ensure all environment variables are set in Render dashboard
   - Check build and start commands are correct

## 📸 Screenshots

![https://github.com/hellman53/Todo-extension/blob/e9f3bfa44826f56fe1708b332cfa3fae8867bbf8/public/snapshot.png](https://github.com/hellman53/Memora/blob/81358c6e2e863206cb55e32587b3b8a837fba7ff/frontend/public/app_view.png)

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Created with ❤️ by [Your Name]

---

**Happy Note-Taking! 📝✨**

🔗 **Live Demo**: [https://memora-zepx.onrender.com/](https://memora-zepx.onrender.com/)
