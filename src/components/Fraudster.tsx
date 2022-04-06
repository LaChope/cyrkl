import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinnerIcon from "../styles/icons/LoadindSpinnerIcon";
import { CustomerInterface, ProductInterface } from "../../utils/Interfaces";
import ProductList from "./ProductList";
import CustomerList from "./CustomerList";

import styles from "./Fraudster.module.scss";

const Fraudster = () => {
  const [isLoading1, setIsLoading1] = useState<boolean>(false);
  const [errorMessage1, setErrorMessage1] = useState<string>("");
  const [isLoading2, setIsLoading2] = useState<boolean>(false);
  const [errorMessage2, setErrorMessage2] = useState<string>("");
  const [productList, setProductList] = useState<Array<ProductInterface>>([]);
  const [customerList, setCustomerList] = useState<Array<CustomerInterface>>(
    []
  );
  const [update, setUpdate] = useState<boolean>(false);
  const [page, setPage] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading1(true);
      setUpdate(false);
      const { data } = await axios.get("https://api.cyrkl.com/cdi/products");
      setProductList([...data]);
      console.log(data);
    };
    fetchProducts().then(() => {
      setIsLoading1(false);
    });
    fetchProducts().catch((error) => {
      setErrorMessage1(error.toString());
    });
  }, [update]);

  useEffect(() => {
    const fetchCustomers = async () => {
      setIsLoading2(true);
      setUpdate(false);
      const { data } = await axios.get("https://api.cyrkl.com/cdi/customers");
      setCustomerList([...data]);
      console.log(data);
    };
    fetchCustomers().then(() => {
      setIsLoading2(false);
    });
    fetchCustomers().catch((error) => {
      setErrorMessage2(error.toString());
    });
  }, [update]);

  useEffect(() => {
    setErrorMessage2("");
  }, []);

  const handleUpdateClick = () => {
    setUpdate(true);
  };

  const handleChangePageClick = () => {
    setPage(!page);
  };

  const renderProductList = () => {
    return (
      <React.Fragment>
        {isLoading1 && errorMessage1 && <p>{errorMessage1}</p>}
        {isLoading1 && !errorMessage1 && <LoadingSpinnerIcon />}
        {!isLoading1 && <ProductList productList={productList} />}
      </React.Fragment>
    );
  };

  const renderCustomerList = () => {
    return (
      <React.Fragment>
        {isLoading2 && errorMessage2 && <p>{errorMessage2}</p>}
        {isLoading2 && !errorMessage2 && <LoadingSpinnerIcon />}
        {!isLoading2 && <CustomerList />}
      </React.Fragment>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Cyrkl Fraudster Detector</h1>
      </div>
      <div className={styles.dashboard}>
        <button className={styles.button} onClick={handleChangePageClick}>
          Change page
        </button>
        {page ? renderProductList() : renderCustomerList()}
        <button className={styles.button} onClick={handleUpdateClick}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Fraudster;
