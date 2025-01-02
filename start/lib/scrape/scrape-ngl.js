const axios = require('axios');
  
async function spamngl(username, text) {
  try {
    const response = await axios.post('https://shinoa.us.kg/api/tools/ngl', {
      text: text,
      url: `https://ngl.link/${username}`
    }, {
      headers: {
        'accept': '*/*',
        'api_key': 'kyuurzy',
        'Content-Type': 'application/json'
      }
    });

    return response.data;

  } catch (error) {
    console.error('Error:', error.message);
  }
}

module.exports = { spamngl }