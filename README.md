# my-youtube

## Overview

**my-youtube** is a video streaming application inspired by platforms like YouTube and Reddit. Developed by me, this project allows users to stream videos, search for content with debounced input to reduce API calls, engage in real-time live chat through API polling, and participate in discussions via an n-level nested comment system. Additionally, the application optimizes performance by caching API results and implementing various optimization techniques.

## Key Features

- **Video Streaming:**  
  Stream high-quality videos seamlessly with a user-friendly interface.

- **Debounced Search Functionality:**  
  Reduce unnecessary API calls by delaying search requests until the user has finished typing.

- **Live Chat Feed:**  
  Engage with other users in real time through a live chat feature implemented via API polling.

- **N-Level Nested Comments:**  
  Facilitate rich discussions with an infinitely nested comment system inspired by Reddit.

- **Cached API Results:**  
  Improve performance and reduce redundant network requests by caching frequently fetched data.

- **Performance Optimizations:**  
  Utilize code splitting, lazy loading, and memoization to ensure a fast, responsive experience.

## Technologies Used

### Frontend

- **React:**  
  For building a dynamic, component-based user interface.

- **Redux:**  
  For managing global state and caching API responses efficiently.

- **Tailwind CSS:**  
  A utility-first CSS framework used for rapid and consistent styling.

- **Debouncing:**  
  Integrated into the search functionality to optimize API calls.




## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/my-youtube.git
   cd my-youtube
   npm install

2. **Start the app:**

   ```bash
   npm start
