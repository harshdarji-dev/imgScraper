const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

async function getDuckDuckGoImages(query, num) {
  try {
    // Step 1: Get the HTML page to extract `vqd`
    const searchPage = await axios.get(`https://duckduckgo.com/?q=${encodeURIComponent(query)}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });

    const match = searchPage.data.match(/&vqd=[^&]+&/);
    if (!match) throw new Error('vqd token not found');

    // Step 3: Use the token to fetch image results
    const imageApiUrl = `https://duckduckgo.com/i.js?o=json&q=${encodeURIComponent(query)}${match}l=wt-wt&p=1`;

    const imageResponse = await axios.get(imageApiUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });

    // Step 4: Show results
    console.log(`Images for "${query}":`);
    let images = [];
    imageResponse.data.results.forEach((img, i) => {
        console.log(img)
      images.push(img.image);
    });

    console.log(images.slice(0, num || 10));
    return images.slice(0, num || 10);

  } catch (err) {
    console.error('Error:', err.message);
    throw err;
  }
}

// API Endpoints
app.get('/api/images', async (req, res) => {
  try {
    const { query, limit } = req.query;

    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }

    const images = await getDuckDuckGoImages(query, parseInt(limit) || 10);
    res.json({ success: true, images });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
