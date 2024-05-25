export const getComments = async () => {
    try {
        const response = await fetch('http://localhost:3000/comments', {
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