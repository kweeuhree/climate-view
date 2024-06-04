export const getComments = async () => {
    try {
        const response = await fetch('https://climate-view.onrender.com/comments', {
            method: 'GET',
            headers:  {
                Accept: 'application/json',
                'Content-Type': 'application/json',
          }
        })
        const data = await response.json();
        // console.log(data, ' data inside getComments.js');

        return data;
    } catch (error) {
        console.log('failed inside getComments.js: ', error);
    }
}