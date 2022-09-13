const request = require('request');


const fetchMyIP = function(callback){
//    const res =  
   request(`https://api.ipify.org?format=json`, (error, response, body)=>{

         try {
            const data = JSON.parse(response.body)

            callback(null, data.ip)
            if (response.statusCode !== 200) {
                const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
                callback(Error(msg), null);
                return;
            }
         } catch (error) {
            if (error) {
                callback(error, null);
                return;
            }
         }
      
       
       
        
    })

}
module.exports = { fetchMyIP }