
import axios from 'axios';

const URL = 'http://localhost:4000';



export const addExpense = async (data) => {
  try {
    console.log(data,'dataaa');
      return await axios.post(`${URL}/add-expense`, data, {
          headers: {
              'content-type': 'application/json'
          }
      });
  } catch (error) {
      console.log('Error while calling addExpense API', error)
  }
}



export const getAllCategories = async () => {
  try {
      return await axios.get(`${URL}/get-all-category`);
  } catch (error) {
      console.log('Error while calling getcategory API', error);
  }
}


























// const Categories = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');   

//   useEffect(() => {



//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/add');
//         setCategories(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError('An error occurred while fetching data.');
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>Categories</h1>
//       <ul>
//         {categories.map(category => (
//           <li key={category.id}>{category.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Categories;
