// @ts-nocheck
import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../redux/Slices/getCategories";
import { CHANGABLE_PRODUCT_URL } from "../../redux/API";
import { Link, useParams } from "react-router-dom";
import { AUTHORIZATION } from "../../redux/API";
import axios from "axios";
const Edit = () => {
  const { id } = useParams();

  const [changeableCategory, setChangeableCategory] = React.useState("");
  const [changeableName, setChangeableName] = React.useState("");
  const [changeableProduct, setChangeableProduct] = React.useState({});

  const dispatch = useDispatch();

  const fetchChangeableProduct = React.useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${CHANGABLE_PRODUCT_URL}${id}`,
        AUTHORIZATION
      );
      setChangeableProduct(data.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const changeProduct = React.useCallback(async () => {
    try {
      const { data } = await axios.put(
        `${CHANGABLE_PRODUCT_URL}${id}`,
        changeableProduct,
        AUTHORIZATION
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  });

  React.useEffect(() => {
    dispatch(fetchCategories());
    fetchChangeableProduct(id);
  }, []);

  const categories = useSelector((state) => state.getCategories.categories);

  const defaultCategory = () => {
    if (changeableProduct.name) {
      return categories.find(({ id }) => id === changeableProduct.category_id)
        .name;
    }
    return "Loading";
  };

  const putChangeProduct = () => {
    console.log(changeableName, changeableCategory);

    setChangeableProduct({
      name: changeableName,
      category: {
        name: changeableCategory,
      },
    });
    console.log(changeableProduct);

    changeProduct();
    fetchChangeableProduct(id);
  };

  const canLoadContent = () => {
    return changeableProduct.name !== undefined && categories.length !== 0;
  };

  return (
    <Container>
      {canLoadContent() === true ? (
        <>
          <Form.Group className="mb-3 mt-3">
            <Form.Label>Product name</Form.Label>
            <Form.Control
              defaultValue={changeableProduct.name}
              onChange={(e) => setChangeableName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              className="mb-4"
              defaultValue={defaultCategory()}
              onChange={(e) => setChangeableCategory(e.target.value)}>
              {categories.map((category, index) => {
                return <option key={index}>{category.name}</option>;
              })}
            </Form.Select>
          </Form.Group>
          <Button variant="primary" onClick={putChangeProduct}>
            Change
          </Button>
        </>
      ) : (
        <div>Loading</div>
      )}
    </Container>
  );
};

export default Edit;
