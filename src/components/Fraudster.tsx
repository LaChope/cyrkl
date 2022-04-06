import React, { useEffect, useState } from "react";
import products from "../assets/api.cyrkl.com/cdi/products.json";
import LoadingSpinnerIcon from "../styles/icons/LoadindSpinnerIcon";
import { ProductInterface } from "../../utils/Interfaces";
import ProductList from "./ProductList";

import styles from "./Fraudster.module.scss";

const Fraudster = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [productList, setProductList] = useState<Array<ProductInterface>>(
    []
  );
  const [update, setUpdate] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = products;
    fetchData && setIsLoading(false);
    !fetchData && setErrorMessage("error");
    setProductList([...fetchData]);
  }, [update]);

  useEffect(() => {
    setErrorMessage("");
  }, []);

  const renderProductList = () => {
    return (
      <React.Fragment>
        {isLoading && errorMessage && <p>{errorMessage}</p>}
        {isLoading && !errorMessage && <LoadingSpinnerIcon />}
        {!isLoading && <ProductList productList={productList} />}
      </React.Fragment>
    );
  };
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h1>Cyrkl Fraudster Detector</h1>
            <h2>Products potentially fraudulent:</h2>
        </div>
      <React.Fragment>{renderProductList()}</React.Fragment>
    </div>
  );
};

export default Fraudster;
