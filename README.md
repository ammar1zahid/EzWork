# EzWork - A Fiverr Clone

EzWork is a full-stack web application that replicates the core functionalities of Fiverr, providing users with a platform to buy and sell services (gigs). The app is built using modern web technologies, including Node.js, Express, MongoDB, and React.js.

## Features

- **Express Server**: Backend API built with Express.js.
- **MongoDB Connection**: Robust database connection to MongoDB.
- **Database Design**: Well-structured MongoDB database schema.
- **User Authentication**: Secure authentication using JWT and cookies.
- **Error Handling**: Comprehensive error handling on the backend.
- **User Operations**: Register, login, logout, and profile management.
- **Gig Management**: Create, update, and filter gigs.
- **Image Upload**: Image uploads to Cloudinary.
- **Search and Filters**: Search gigs with advanced filtering using query parameters.
- **Review System**: Rate and review gigs.
- **Order Management**: Create and fetch orders with a seamless workflow.
- **Chat Functionality**: Real-time chat using Node.js and MongoDB.
- **State Management**: Implemented with React Query and useReducer for managing global state.

## Project Structure

### Backend Directory Structure
```
Backend/
├── Routes.js
├── package-lock.json
├── package.json
├── server.js
├── .env
├── config/
│   ├── cors.js
│   └── db.js
├── controller/
│   ├── auth.controller.js
│   ├── conversation.controller.js
│   ├── gig.controller.js
│   ├── message.controller.js
│   ├── order.controller.js
│   ├── review.controller.js
│   └── user.controller.js
├── middleware/
│   └── jwt.js
├── models/
│   ├── ConversationModel.js
│   ├── GigModel.js
│   ├── MessageModel.js
│   ├── OrderModel.js
│   ├── ReviewModel.js
│   └── UserModel.js
├── routes/
│   ├── auth.route.js
│   ├── conversation.route.js
│   ├── gig.route.js
│   ├── message.route.js
│   ├── order.route.js
│   ├── review.route.js
│   └── user.route.js
└── utils/
    └── createError.js
```

### Frontend Directory Structure
```
Frontend/
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
├── .gitignore
├── public/
│   └── img/
└── src/
    ├── App.jsx
    ├── app.scss
    ├── data.js
    ├── main.jsx
    ├── components/
    │   ├── catCard/
    │   ├── featured/
    │   ├── footer/
    │   ├── gigCard/
    │   ├── navbar/
    │   ├── projectCard/
    │   ├── review/
    │   ├── reviews/
    │   ├── slide/
    │   └── trustedBy/
    ├── pages/
    │   ├── add/
    │   ├── gigs/
    │   ├── home/
    │   ├── login/
    │   ├── messages/
    │   ├── myGigs/
    │   ├── orders/
    │   ├── register/
    │   ├── singleGig/
    │   └── singleMessage/
    ├── reducers/
    └── utils/
```

## Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB
- Cloudinary account for image hosting

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ammar1zahid/ezwork.git
   cd ezwork
   ```

2. Set up the backend:
   ```bash
   cd Backend
   npm install
   ```

3. Set up the frontend:
   ```bash
   cd ../Frontend
   npm install
   ```

4. Create a `.env` file in the `Backend/` directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_url
   JWT_KEY=your_jwt_secret_key
   ```

5. Start the development servers:
   - Backend:
     ```bash
     cd Backend
     npm run dev
     ```
   - Frontend:
     ```bash
     cd ../Frontend
     npm run dev
     ```

6. Open the app in your browser at `http://localhost:3000`.

## Key Technologies

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Stripe for payments

### Frontend
- React.js
- React Query for data fetching and caching
- Cloudinary for image hosting
- SCSS for styling

## Contributing
Feel free to submit issues or pull requests for any features or bug fixes.

## License
This project is open-source and available under the [MIT License](LICENSE).



