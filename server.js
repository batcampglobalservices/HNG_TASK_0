require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Route: GET /me
app.get('/me', async (req, res) => {
  try {
    // Fetch cat fact with timeout (best practice)
    const response = await axios.get('https://catfact.ninja/fact', { timeout: 5000 });

    // Build response JSON
    const result = {
      status: "success",
      user: {
        email: "batombaribakpo@example.com",
        name: "Batombari Bakpo",
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(),
      fact: response.data.fact
    };

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json(result);

  } catch (error) {
    console.error("Cat Fact API failed:", error.message);

    return res.status(502).json({
      status: "error",
      message: "Failed to fetch cat fact. Please try again later.",
      timestamp: new Date().toISOString()
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server live at http://localhost:${PORT}/me`);
});
