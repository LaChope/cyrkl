import React, { useEffect, useState } from "react";
import axios from "axios";
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
    const fetchProducts = async () => {
      setIsLoading(true);
      setUpdate(false);
      const { data } = await axios.get("https://api.cyrkl.com/cdi/products");
      setProductList([...data]);
    };
    fetchProducts().then(() => {
      setIsLoading(false);
    });
    fetchProducts().catch((error) => {
      setErrorMessage(error.toString());
    });
  }, [update]);

  useEffect(() => {
    setErrorMessage("");
  }, []);

  const handleUpdateClick = () => {
    setUpdate(true);
  };

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
      <div className={styles.dashboard}>
        {renderProductList()}
        <button className={styles.button} onClick={handleUpdateClick}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Fraudster;
