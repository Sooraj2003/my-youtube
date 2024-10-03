import fetch from 'node-fetch'; // Use 'import' instead of 'require'

export const handler = async (event, context) => {
  const query = event.queryStringParameters.q;

  if (!query) {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins for CORS
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: "Missing search query" }),
    };
  }

  // Ensure this URL uses HTTPS
  const YOUTUBE_SEARCH_SUGGESTION_API = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(YOUTUBE_SEARCH_SUGGESTION_API);
    
    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const suggestions = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins for CORS
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(suggestions),
    };
  } catch (error) {
    console.error("Error fetching YouTube suggestions:", error); // Log the error for debugging
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins for CORS
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: "Failed to fetch YouTube suggestions" }),
    };
  }
};
