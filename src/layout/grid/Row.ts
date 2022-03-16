import styled from "styled-components";
import { Flex, FlexProps } from "./Flex";
import { GUTTER } from "../index";

export const Row = styled(Flex)<FlexProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -${GUTTER}px;
  margin-right: -${GUTTER}px;
  box-sizing: border-box;
`;
