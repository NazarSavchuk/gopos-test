import React, { useState } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";

const Categories: React.FC = () => {
  const [categoriesList, setCategoriesList] = useState([]);

  const URL =
    "https://newdemostock.gopos.pl/ajax/219/product_categories?f=&page=0&search=&size=20&sort=";
  const AUTHORIZATION = {
    headers: {
      Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
    },
  };

  const getCategoriesList = React.useCallback(async () => {
    try {
      const { data } = await axios.get(URL, AUTHORIZATION);
      setCategoriesList(data.data);
    } catch (err) {
      throw new Error("Unable to get data.");
    }
  }, []);

  React.useEffect(() => {
    getCategoriesList();
  }, []);

  console.log(categoriesList);
  return (
    <Container>
      {categoriesList && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {categoriesList.map((item: any, index: number) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <th>{item.name}</th>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Categories;

// fetch("https://newdemostock.gopos.pl/ajax/219/products", {
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
//   referrer: "https://newdemostock.gopos.pl/a/219/product",
//   referrerPolicy: "strict-origin-when-cross-origin",
//   body: '{"remove":false,"default_volume":null,"critical_amount_level":null,"recipe_amount":"1","type":"BASIC","category_id":null,"tax_id":null,"updated_at":null,"default_price_net_money":{"amount":"","currency":"PLN"},"sale_price_net_money":{"amount":"","currency":"PLN"},"product_components_empty":false,"category":null,"tax":null,"components":[],"custom_ids":[],"connections":[],"image":null,"custom_fields":[]}',
//   method: "POST",
//   mode: "cors",
//   credentials: "include",
// });

// fetch("https://newdemostock.gopos.pl/ajax/219/products", {
//   "headers": {
//     "accept": "application/json",
//     "accept-language": "en,ru-RU;q=0.9,ru;q=0.8,en-US;q=0.7,uk;q=0.6,pl;q=0.5",
//     "content-type": "application/json; charset=UTF-8",
//     "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-requested-with": "XMLHttpRequest"
//   },
//   "referrer": "https://newdemostock.gopos.pl/a/219/product",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "{\"name\":\"GTA VI\",\"remove\":false,\"default_volume\":null,\"critical_amount_level\":null,\"recipe_amount\":\"1\",\"type\":\"BASIC\",\"category_id\":575,\"tax_id\":4,\"updated_at\":null,\"default_price_net_money\":{\"amount\":\"5\",\"currency\":\"PLN\"},\"sale_price_net_money\":{\"amount\":\"6\",\"currency\":\"PLN\"},\"product_components_empty\":false,\"measure_type\":\"KILOGRAM\",\"category\":null,\"tax\":{\"id\":\"4\",\"name\":\"0%\",\"code\":\"D\",\"amount\":0,\"lastEditDate\":null,\"deleted\":false},\"components\":[],\"custom_ids\":[],\"connections\":[],\"image\":null,\"custom_fields\":[]}",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "include"
// });
