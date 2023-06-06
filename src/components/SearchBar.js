// import React from 'react'

// const SearchBar = () => {

//     const SearchBar = () => {
//         const [movie, setMovie] = useState([]);
//         const [result, setResult] = useState([]);
      
      
//         function handleChange(event) {
//           const movie = event.target.value;
//           setMovie(movie);
//         }
      
//         function handleCLick(event) {
//           event.preventDefault();
//           Axios.get(
//             "https://api.tvmaze.com/search/shows?q" +
//               book +
//               "&maxResults=100"
//           ).then((response) => {
//             console.log(response);
//             setResult(response.data.items);
//           });
//         }
      
//         function handleKeyDown(event){
//           if (event.key === 'Enter') {
//             Axios.get(
//                 "https://api.tvmaze.com/search/shows?q" +
//                 book +
//                 "&maxResults=100"
//             ).then((response) => {
//               console.log(response);
//               setResult(response.data.items);
//             });
//           }
//         }
//     }
//   return (
//     <div>SearchBar</div>
//   )
// }

// export default SearchBar