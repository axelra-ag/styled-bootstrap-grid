# Axelra Styled Bootstrap Grid
This library is a re-implementation of the bootstrap grid layout system. It uses styled-components as basic components for styling your web layout.

--- 

## Docs
https://lucas-pelloni.gitbook.io/styled-bootstrap-grid/

## Get Started
You can install the library using either yarn or npm. 
```
$ yarn add axelra-styled-bootstrap-grid 
```

Since this library has been built from skratch, you can simply re-styling all components defined on it. For instance, if you want to create a basic grid layout you can do the following: 

```jsx
import React from "react"; 
import styled from "styled-components"; 
import {Col, Container, Row, Spacer} from "axelra-styled-bootstrap-grid";

const MyContainer = styled(Container)`
  margin-top: 10px;
`;

const Column = styled(Col)`
    display: flex; 
`;

export const Example = () => {
  return (
    <MyContainer fluid>
      <Spacer x10 />
      <Row>
        <Column md={5}>asfasf</Column>
      </Row>
    </MyContainer>
  );
};
```
