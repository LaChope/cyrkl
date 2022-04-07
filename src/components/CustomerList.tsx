import React from "react";
import { CustomerInterface } from "../../utils/Interfaces";
import classNames from "classnames/bind";
import styles from "./ItemList.module.scss";

interface Props {
  customerList: Array<CustomerInterface>;
}

const cn = classNames.bind(styles);

const CustomerList = ({ customerList }: Props) => {
  const applyThreatLevelClass = (customer: CustomerInterface) => {
    if (customer.threat_level > 0 && customer.threat_level < 2) {
      return "item-threat-medium";
    }
    if (customer.threat_level > 1) {
      return "item-threat-high";
    }
    return "item-threat-low";
  };

  const applyThreatLevel = (groupedCustomers: Array<CustomerInterface>) => {
    for (let i = 0; i < groupedCustomers.length; i++) {
      const customer = groupedCustomers[i];
      const firstname = customer.first_name;
      const surname = customer.last_name;
      const email = customer.email;
      const company = customer.company;
      const firstnameRegex = new RegExp(firstname, "idu");
      const surnameRegex = new RegExp(surname, "idu");
      const companyRegex = new RegExp(company, "idu");
      customer.threat_level = 0;

      if (
        !surnameRegex.test(email) &&
        !firstnameRegex.test(email) &&
        !companyRegex.test(email)
      ) {
        customer.threat_level++;
        customer.threat_email = true;
      }

      if (!customer.company) {
        customer.threat_level++;
        customer.threat_no_company = true;
      }

      if (customer.first_name.includes("test")) {
        customer.threat_level = customer.threat_level + 2;
      }
    }
  };

  applyThreatLevel(customerList);
  return (
    <ul className={styles.items}>
      {customerList.map((customer: CustomerInterface, index: number) => (
        <li
          key={index}
          className={cn(styles.item, applyThreatLevelClass(customer))}
        >
          - {customer.first_name} {customer.last_name}
          <p>
            Customer: #{customer.id} --- Threat level:
            {customer.threat_level}/3 ---{" "}
            {customer.threat_email && "Email not according to name"} ---{" "}
            {customer.threat_no_company && "No company mentioned"}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default CustomerList;
