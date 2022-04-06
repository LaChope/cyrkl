import React from "react";
import { ProductInterface } from "../../utils/Interfaces";
import classNames from "classnames/bind";

import styles from "./ProductList.module.scss";

interface Props {
  productList: Array<ProductInterface>;
}

const ProductList = ({ productList }: Props) => {
  const applyProgressStatusClass = (product: ProductInterface) => {
    return "";
  };

  const sortedProductListByFraudulence = (
    productList: Array<ProductInterface>
  ) => {
    let product: Array<ProductInterface> = [];
    for (let i = 0; i < productList.length; i++) {
        product.push()
    }
  };

  const renderProductList = (product: ProductInterface) => {
    return (
      <React.Fragment>
        <p>{"#" + product.id + " - " + product.name0} </p>
      </React.Fragment>
    );
  };

  const cn = classNames.bind(styles);

  return (
    <ul className={styles.productItems}>
      {productList.map((product: ProductInterface) => (
        <li
          key={product.id}
          className={cn("productItem", applyProgressStatusClass(product))}
        >
          {renderProductList(product)}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
