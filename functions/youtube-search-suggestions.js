const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const query = event.queryStringParameters.q; // Get search query from the query string
  
  if (!query) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing search query" }),
    };
  }

  const YOUTUBE_SEARCH_SUGGESTION_API = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`;

  try {
    const response = await fetch(YOUTUBE_SEARCH_SUGGESTION_API);
    const suggestions = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(suggestions),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch YouTube suggestions" }),
    };
  }
};
