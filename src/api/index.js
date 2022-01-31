const apiKey = process.env.REACT_APP_API_KEY;
export const apiUrl = process.env.REACT_APP_API_URL;

export const createHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
    }
}

