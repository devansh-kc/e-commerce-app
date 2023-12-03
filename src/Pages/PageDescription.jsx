import React from "react";
import { useParams } from "react-router-dom";
import { ProductDescription } from "../Components/ProductDescription";
import { data } from "../assets/data";

function PageDescription() {
  const { id } = useParams();
  const jsonId = Number(id);

  const quantityUpdate = data.map((item) => {
    return { ...item, quantity: 1 };
  });
  const filteredData = quantityUpdate.filter((item) => item.id === jsonId);

  const jsonData = filteredData[0];
  return <ProductDescription productData={jsonData} />;
}

export default PageDescription;
