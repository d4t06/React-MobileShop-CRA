import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ProductItem from "../components/ProductItem";

function DetailPage() {
   const { id } = useParams();
   // const { data, loading, error } = useFetch("http://localhost:1337/api/products/" + id);
   // if (loading) return <h1>Loading</h1>;
   // if (error) return <h1>Error</h1>;
   // console.log(data);

   return (
      <div className="row">
         <h1>DetailPage {id}</h1>
         {/* <ProductItem data={data} /> */}
      </div>
   );
}
export default DetailPage;
