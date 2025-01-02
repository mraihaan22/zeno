const axios = require('axios');

async function igdl(url) {
    try {
        const response = await axios.post('https://shinoa.us.kg/api/download/igdl', {
            text: url
        }, {
            headers: {
                'accept': '*/*',
                'api_key': 'kyuurzy',
                'Content-Type': 'application/json'
            }
        });
        
        return response.data;
    } catch (error) {
        console.error('Error downloading Instagram content:', error);
    }
}

module.exports = { igdl }