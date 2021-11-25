import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { getAllProducts,getProductsbyCat } from "../actions/product";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat,filters,sort}) => {
 
  const products = useSelector(state =>state.products.products)
  
  
  const [filteredProducts,setFilteredProducts]=useState([])
  const distpatch=useDispatch()


  useEffect(() => {
    if(cat){
      distpatch(getProductsbyCat(cat))
    } else{
      distpatch(getAllProducts())
    }
   
  }, [cat,distpatch])

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);



  return (
    <Container>
       {cat
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
