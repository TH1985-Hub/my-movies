// class OMDBApi {
//     constructor(apiKey) {
//         this.apiKey = apiKey;
//         this.baseURL = "http://www.omdbapi.com/";

//     }


// async fetchByID(id) {
    

//     try {
//         const response = await fetch(
//             `${this.baseURL}?i=${id}&apikey=${this.apiKey}`
//         );
//         const data = await response.json();
//         return {
//             success: data.Response === "True",
//             data,
//             error: data.Response === "True" ? null : data.Error,
//         };
//     }catch (error) {
//         return {success: false, data: null, error: error.message};

//     }
    
// }

// async fetchMoviesBySearch(query, page = 1) {
//     try 
    
//     {
//         const response = await fetch (
//             `${this.baseURL}?s=${encodeURIComponent(query)}&page=${page}&apikey=${
//                 this.apiKey
//             }`
//         );
//         const data = await response.json();
//         return {
//             success: data.Response === "True",
//             data: data,
//             error: data.Response === "True" ? null : data.Error,
//         };
//     } catch (error) {
//         return {success: false, data: [], error: error.message};
//     }

// }

// }

// export const omdbApi = new OMDBApi( "8df2f100");

class OMDBApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = "https://www.omdbapi.com/";  // Updated to HTTPS
    }

    async fetchByID(id) {
        try {
            const response = await fetch(
                `${this.baseURL}?i=${id}&apikey=${this.apiKey}`
            );
            const data = await response.json();
            return {
                success: data.Response === "True",
                data,
                error: data.Response === "True" ? null : data.Error,
            };
        } catch (error) {
            return { success: false, data: null, error: error.message };
        }
    }

    async fetchMoviesBySearch(query, page = 1) {
        try {
            const response = await fetch(
                `${this.baseURL}?s=${encodeURIComponent(query)}&page=${page}&apikey=${this.apiKey}`
            );
            const data = await response.json();
            return {
                success: data.Response === "True",
                data: data,
                error: data.Response === "True" ? null : data.Error,
            };
        } catch (error) {
            return { success: false, data: [], error: error.message };
        }
    }
}

// Use environment variable for the API key
const apiKey = process.env.REACT_APP_OMDB_API_KEY || '8df2f100';
export const omdbApi = new OMDBApi(apiKey);



