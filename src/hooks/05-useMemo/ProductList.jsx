import { memo } from "react";

// const ProductList = memo(function ProductList({ products }) {
//     console.log("ProductList render");

//     return (
//         <ul>
//             {products.map(
//                 p => (
//                     <li key={p.id}>{p.name}</li>
//                 )
//             )}
//         </ul>
//     );
// });
// export default ProductList;

const ProductList = ({ products }) => {
    console.log("ProductList render");
    // 
    return (
        <ul>
            {products.map(
                p => (
                    <li key={p.id}>{p.name}</li>
                )
            )}
        </ul>
    );
};
export default ProductList;