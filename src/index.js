const
  needle  = require('needle'),
  cheerio = require('cheerio');

const fbdown = async (link) => {
  try {
    let 
      token,
      getToken = await needle('get', 'https://www.getvid.io');
    
    try {
      const $ = cheerio.load(getToken.body);
      token = $('input[name="token"]').val();
    } catch (error) {
      return { error: true, phase: 1, reason: error }
    }
    
    const
      data = {
        url: link,
        token,
      },
      headers = {
        "Content-Type": "application/json"
      },
      response = await needle('post','https://www.getfvid.io/wp-json/aio-dl/video-data', data, headers);
  
    try {
      return response.body
    } catch (error) {
      return { error: true, phase: 2, reason: error}
    }

  } catch (error) {
    return { error: true, phase: 0, reason: error }
  }

};

module.exports = fbdown;