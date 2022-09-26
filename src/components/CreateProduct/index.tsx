// @ts-nocheck

import React from "react";
import { Container, Button } from "react-bootstrap";
import { AUTHORIZATION } from "../../redux/API";

const newProduct = {
  id: 0,
  uid: "222555",
  name: "UserProduct",
  components: [
    {
      id: 0,
      product_id: 0,
      product_name: "string",
      product_cost_money: {
        amount: 0,
        currency: "string",
        negative: true,
        zero: true,
        positive: true,
      },
      product_cost_gross_money: {
        amount: 0,
        currency: "string",
        negative: true,
        zero: true,
        positive: true,
      },
      unit_product_cost_money: {
        amount: 0,
        currency: "string",
        negative: true,
        zero: true,
        positive: true,
      },
      unit_product_cost_gross_money: {
        amount: 0,
        currency: "string",
        negative: true,
        zero: true,
        positive: true,
      },
      amount: 0,
      recipe_amount: 0,
      sub_product_type: "BASIC",
      measure_type: "sztuka",
      sub_product: {
        id: 0,
        uid: "string",
        name: "string",
      },
      category_name: "string",
    },
  ],
  default_volume: 0,
  critical_amount_level: 0,
  optimal_amount_level: 0,
  recipe_amount: 0,
  type: "BASIC",
  status: "ENABLED",
  measure_type: "sztuka",
  category: {
    id: 0,
    uid: "string",
    name: "string",
    updated_at: "2022-09-26T15:02:02.284Z",
    status: "ENABLED",
  },
  category_id: 0,
  tax: {
    id: 0,
    name: "string",
    code: "string",
    amount: 0,
    updated_at: "2022-09-26T15:02:02.284Z",
    status: "ENABLED",
  },
  tax_id: 0,
  updated_at: "2022-09-26T15:02:02.284Z",
  connections: [
    {
      id: 0,
      package_uid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "string",
      barcodes: [
        {
          barcode: "string",
          volume: 0,
        },
      ],
      generic_dto: {
        id: 0,
        packageUid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        name: "string",
      },
    },
  ],
  custom_ids: [
    {
      id: 0,
      value: "string",
      type: "string",
    },
  ],
  default_price_net_money: {
    amount: 0,
    currency: "string",
  },
  last_price_money: {
    amount: 0,
    currency: "string",
    negative: true,
    zero: true,
    positive: true,
  },
  max_price_money: {
    amount: 0,
    currency: "string",
    negative: true,
    zero: true,
    positive: true,
  },
  cost_price_money: {
    amount: 0,
    currency: "string",
    negative: true,
    zero: true,
    positive: true,
  },
  cost_price_gross_money: {
    amount: 0,
    currency: "string",
    negative: true,
    zero: true,
    positive: true,
  },
  description: "string",
  sale_price_net_money: {
    amount: 0,
    currency: "string",
    negative: true,
    zero: true,
    positive: true,
  },
  state: {
    in_stock_amount: 0,
    commited_amount: 0,
    incoming_amount: 0,
    available_amount: 0,
  },
  weight: 0,
  image: {
    default_image: true,
    file_path_small: "string",
    id: 0,
    type: "string",
    image_data: "string",
    uid: "string",
    file_path: "string",
    created_at: "2022-09-26T15:02:02.284Z",
  },
  image_link: {
    default_link: "string",
    small: "string",
    default_as_base64: "string",
    small_as_base64: "string",
    default: "string",
  },
  sku: "string",
  open_linkeds: true,
  custom_fields: [
    {
      id: "string",
      slug: "string",
      value: "string",
    },
  ],
};

const CreateProduct = () => {
  const plusProduct = React.useCallback(async () => {
    //     try {
    //       const { data } = await axios.post(
    //         `https://newdemostock.gopos.pl/219/products`,
    //         newProduct,
    //         AUTHORIZATION
    //       );
    //       console.log(data);
    //     } catch (err) {
    //       console.log(err);
    //     }
    fetch("https://newdemostock.gopos.pl/ajax/219/products", {
      headers: {
        accept: "application/json",
        "accept-language":
          "en,ru-RU;q=0.9,ru;q=0.8,en-US;q=0.7,uk;q=0.6,pl;q=0.5",
        "content-type": "application/json; charset=UTF-8",
        "sec-ch-ua":
          '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
      },
      referrer: "https://newdemostock.gopos.pl/a/219/product/new",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: '{"name":"UserProduct234","remove":false,"default_volume":null,"critical_amount_level":null,"recipe_amount":"1","type":"BASIC","category_id":560,"tax_id":4,"updated_at":null,"default_price_net_money":{"amount":"","currency":"PLN"},"sale_price_net_money":{"amount":"","currency":"PLN"},"product_components_empty":false,"measure_type":"KILOGRAM","category":null,"tax":{"id":"4","name":"0%","code":"D","amount":0,"lastEditDate":null,"deleted":false},"components":[],"custom_ids":[],"connections":[],"image":null,"custom_fields":[]}',
      method: "POST",
      mode: "cors",
      credentials: "include",
    }).then((res) => {
      console.log(res);
    });
  });

  return (
    <Container>
      <Button onClick={plusProduct}>Plus product</Button>
    </Container>
  );
};

export default CreateProduct;
