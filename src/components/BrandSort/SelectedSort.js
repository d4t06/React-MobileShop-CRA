
function SelectedSort({ data, handleFilter }) {
   return (
      <>
         {data &&
            data.map((item, index) => {
               return <span key={index}>{item}</span>;
            })}
         <button
         onClick={() => handleFilter([], 'brand')}
         >Xoa tat ca</button>
      </>
   );
}

export default SelectedSort;
