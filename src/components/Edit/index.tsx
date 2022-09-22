//@ts-nocheck
import React from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../redux/Slices/getCategories";

import { useParams } from "react-router-dom";
const Edit: React.FC = () => {
  const categories = useSelector((state) => state.getCategories.categories);
  const dispatch = useDispatch();
  const [changebleProduct, setChangebleProduct] = React.useState({});

  const { id } = useParams();
  const CHANGABLE_PRODUCT_URL = `https://newdemostock.gopos.pl/ajax/219/products/${id}`;
  const AUTHORIZATION = {
    headers: {
      Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
    },
  };

  const getChangebleProduct = React.useCallback(async () => {
    try {
      const { data } = await axios.get(CHANGABLE_PRODUCT_URL, AUTHORIZATION);
      setChangebleProduct(data.data);
      console.log(data.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  React.useEffect(() => {
    getChangebleProduct();
  }, []);

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <Container>
      {changebleProduct ? (
        <>
          <Form.Group className="mb-3 mt-3">
            <Form.Label>Product name</Form.Label>
            <Form.Control defaultValue={changebleProduct.name} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            {categories.length !== 0 ? (
              <Form.Select className="mb-4">
                {categories.map((category, index) => {
                  <option key={index}>{category.name}</option>;
                })}
              </Form.Select>
            ) : (
              <div>loading</div>
            )}
          </Form.Group>
          <Button variant="primary">Change</Button>
        </>
      ) : (
        <div>Loading</div>
      )}
    </Container>
  );
};

export default Edit;

// fetch("https://newdemostock.gopos.pl/ajax/219/products/546", {
//   headers: {
//     accept: "application/json",
//     "accept-language": "en,ru-RU;q=0.9,ru;q=0.8,en-US;q=0.7,uk;q=0.6,pl;q=0.5",
//     "content-type": "application/json; charset=UTF-8",
//     "sec-ch-ua":
//       '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": '"Windows"',
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-requested-with": "XMLHttpRequest",
//   },
//   referrer: "https://newdemostock.gopos.pl/a/219/product/546",
//   referrerPolicy: "strict-origin-when-cross-origin",
//   body: '{"uid":"d18b7cf6-61c4-4574-b8ba-0087307d550d","name":"GTA VI","remove":false,"default_volume":null,"critical_amount_level":null,"recipe_amount":"1","type":"BASIC","category_id":560,"tax_id":4,"updated_at":"2022-09-21T13:39:09","default_price_net_money":{"amount":"5","currency":"PLN"},"sale_price_net_money":{"amount":6,"currency":"PLN"},"cost_price_money":{"amount":5,"currency":"PLN"},"product_components_empty":false,"state":{"in_stock_amount":0,"commited_amount":0,"incoming_amount":0,"available_amount":0},"measure_type":"KILOGRAM","status":"ENABLED","open_linkeds":false,"cost_price_gross_money":{"amount":5,"currency":"PLN"},"category":{"id":"575","name":"akacje","updated_at":"2022-09-20T18:24:44","deleted":false,"status":"ENABLED"},"tax":{"id":"4","name":"0%","code":"D","amount":0,"lastEditDate":null,"deleted":false},"components":[],"custom_ids":[],"connections":[],"image":null,"custom_fields":[]}',
//   method: "PUT",
//   mode: "cors",
//   credentials: "include",
// });
// fetch("https://newdemostock.gopos.pl/ajax/219/products/550?include=ALL", {
//   headers: {
//     accept: "application/json",
//     "accept-language": "en,ru-RU;q=0.9,ru;q=0.8,en-US;q=0.7,uk;q=0.6,pl;q=0.5",
//     "sec-ch-ua":
//       '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": '"Windows"',
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-requested-with": "XMLHttpRequest",
//   },
//   referrer: "https://newdemostock.gopos.pl/a/219/product",
//   referrerPolicy: "strict-origin-when-cross-origin",
//   body: null,
//   method: "GET",
//   mode: "cors",
//   credentials: "include",
// });
