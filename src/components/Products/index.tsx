// @ts-nocheck
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Table, Button, Stack } from "react-bootstrap";
const Products: React.FC = () => {
  const [products, setProducts] = React.useState<any>({});

  const URL =
    "https://newdemostock.gopos.pl/ajax/219/products?f=&include=category%2C%20custom_fields&page=0&search=&size=20&sort=name";
  const AUTHORIZATION = {
    headers: {
      Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
    },
  };

  const getProducts = React.useCallback(async () => {
    try {
      const { data } = await axios.get(URL, AUTHORIZATION);
      setProducts(data);
    } catch (err) {
      throw new Error("Unable to get data.");
    }
  }, []);

  React.useEffect(() => {
    getProducts();
  }, []);

  console.log(products["data"]);

  return (
    <div>
      <Container>
        {products["data"] && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {products["data"].map((item: any, index: number) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <th>
                      {/* {item.name} <Button variant="secondary">Edit</Button>
                       */}
                      <Stack direction="horizontal" gap={3}>
                        <div>{item.name}</div>
                        <div className="bg-light border ms-auto"></div>
                        <div className="bg-light border">
                          <Button
                            variant="secondary"
                            as={Link}
                            to={`/products/edit/${item.id}`}>
                            Edit
                          </Button>
                        </div>
                      </Stack>
                    </th>
                    <th>{item.category.name}</th>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </Container>
    </div>
  );
};

export default Products;
