import React, { useState } from "react";
import { ProductInterface } from "../../utils/Interfaces";
import classNames from "classnames/bind";

import styles from "./ProductList.module.scss";

interface Props {
  productList: Array<ProductInterface>;
}

const cn = classNames.bind(styles);

const ProductList = ({ productList }: Props) => {
  const applyThreatStatusClass = (products: Array<ProductInterface>) => {
    if (products[0].threat_level > 1 && products[0].threat_level < 3) {
      return "product-status-suspicious";
    }

    if (products[0].threat_level > 3) {
      return "product-status-fraudulent";
    }
    return "product-status-verified";
  };

  const applyThreatLevel = (groupedProducts: Array<ProductInterface>) => {
    for (let i = 0; i < groupedProducts.length; i++) {
      const product = groupedProducts[i];
      product.threat_level = 0;
      if (groupedProducts.length > 1) {
        product.threat_level = product.threat_level + 2;
        product.threat_similar_product = true;
      }
      if (/[0-9]/.test(product.perex0)) {
        product.threat_level++;
        product.threat_phone_number = true;
      }
      if (/@[a-zA-Z]+\.com/.test(product.perex0)) {
        product.threat_level++;
        product.threat_email = true;
      }
      if (/ve zprávě/.test(product.perex0)) {
        product.threat_level++;
        product.threat_contact = true;
      }
    }
  };

  const groupedProducts = (productList: Array<ProductInterface>) => {
    return Object.entries(groupBy(productList, "name0"));
  };

  const groupBy = (array: Array<any>, key: string) =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key];
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {});

  const renderProductList = (
    productName: string,
    products: Array<ProductInterface>
  ) => {
    applyThreatLevel(products);
    return productName;
  };

  const products = groupedProducts(productList);

  return (
    <ul className={styles.productItems}>
      {products.map((product: any, index: number) => (
        <li
          key={index}
          className={cn("productItem", applyThreatStatusClass(product[1]))}
        >
          {product[1].length + "x " + renderProductList(product[0], product[1])}
          <p>
            Product: #{product[1][0].id} --- Threat level :{" "}
            {product[1][0].threat_level}/5 ---{" "}
            {product[1][0].threat_email && "email detected"} ---{" "}
            {product[1][0].threat_contact && "contact asked"} ---{" "}
            {product[1][0].threat_phone_number && "phone number detected"}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
