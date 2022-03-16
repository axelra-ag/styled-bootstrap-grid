import styled from "styled-components";
import { Flex } from "./Flex";
import { GUTTER } from "../index";

export const Row = styled(Flex)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -${GUTTER}px;
  margin-right: -${GUTTER}px;
`;
