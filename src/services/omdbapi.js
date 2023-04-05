export const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=b6f734e0&t=${searchTerm}`
        );
        const data = await response.json();
        return data
    } catch (e) {
      console.error(e);
    }
  };