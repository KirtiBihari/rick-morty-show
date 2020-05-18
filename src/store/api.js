export const fetchData = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character/');
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
};  