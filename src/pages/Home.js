import useFetch from "../hooks/useFetch";
import ProductItem from "../components/ProductItem";
import { useLocation } from "react-router-dom";

function Home() {
   // const { page } = useQuer;
   const search = useLocation().search;
   const page = new URLSearchParams(search).get("_page");
   const { data, loading, error } = useFetch("http://localhost:3000/products?_page=" + page);
   if (loading) return <h1>Loading</h1>;
   if (error) return <h1>Error</h1>;

   // console.log(data);
   // if (data) products = data.data;
   // useEffect(() => {
   //    const fetch = async () => {
   //       const result = request.get("/products");
   //       console.log(result)
   //       setData(result);

   //    };
   //    fetch();
   // }, []);

   return (
      // <div className="row">
      <>{data && <ProductItem data={data} />}</>
      // </div>
   );
}

export default Home;
