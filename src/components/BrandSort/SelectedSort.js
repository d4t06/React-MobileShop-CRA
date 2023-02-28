function SelectedSort({ data }) {
   return (
      <>
         {data.brand &&
            data.brand.map((item, index) => {
               return <span key={index}>{item}</span>;
            })}
      </>
   );
}

export default SelectedSort;
