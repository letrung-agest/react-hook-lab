// no using usecallback
// export default function ProductDetail({ onClick }) {
//     console.log("ProductDetail render");
//     return <button onClick={onClick}>Buy Btn from ProductDetail</button>;
// }

// using memo
import { memo } from "react";

function ProductDetail({ onClick }) {
    console.log("ProductDetail render");
    return <button onClick={onClick}>Buy Btn from ProductDetail</button>;
}

export default memo(ProductDetail);