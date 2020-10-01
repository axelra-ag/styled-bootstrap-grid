import React from "react";
import styled from "styled-components";
import { SPACING } from "../index";

const getSpacing = (
  x1?: boolean | string,
  x2?: boolean | string,
  x3?: boolean | string,
  x4?: boolean | string,
  x5?: boolean | string,
  x6?: boolean | string,
  x7?: boolean | string,
  x8?: boolean | string,
  x9?: boolean | string,
  x10?: boolean | string
) => {
  if (x1) return SPACING;
  if (x2) return SPACING * 2;
  if (x3) return SPACING * 3;
  if (x4) return SPACING * 4;
  if (x5) return SPACING * 5;
  if (x6) return SPACING * 6;
  if (x7) return SPACING * 7;
  if (x8) return SPACING * 8;
  if (x9) return SPACING * 9;
  if (x10) return SPACING * 10;
  return SPACING;
};

type SpacerProps = {
  x1?: boolean;
  x2?: boolean;
  x3?: boolean;
  x4?: boolean;
  x5?: boolean;
  x6?: boolean;
  x7?: boolean;
  x8?: boolean;
  x9?: boolean;
  x10?: boolean;
};

const InnerSpacer = styled.div<{
  x1?: string;
  x2?: string;
  x3?: string;
  x4?: string;
  x5?: string;
  x6?: string;
  x7?: string;
  x8?: string;
  x9?: string;
  x10?: string;
}>`
  min-width: ${props =>
    getSpacing(
      props.x1,
      props.x2,
      props.x3,
      props.x4,
      props.x5,
      props.x6,
      props.x7,
      props.x8,
      props.x9,
      props.x10
    )}px;
  min-height: ${props =>
    getSpacing(
      props.x1,
      props.x2,
      props.x3,
      props.x4,
      props.x5,
      props.x6,
      props.x7,
      props.x8,
      props.x9,
      props.x10
    )}px;
  display: flex;
  position: relative;
`;

export const Spacer: React.FC<SpacerProps> = ({
  x1,
  x2,
  x3,
  x4,
  x5,
  x6,
  x7,
  x8,
  x9,
  x10,
  ...props
}) => {
  // Avoiding styled components warning
  // Writing to DOM
  return (
    <InnerSpacer
      x1={x1 ? "true" : undefined}
      x2={x2 ? "true" : undefined}
      x3={x3 ? "true" : undefined}
      x4={x4 ? "true" : undefined}
      x5={x5 ? "true" : undefined}
      x6={x6 ? "true" : undefined}
      x7={x7 ? "true" : undefined}
      x8={x8 ? "true" : undefined}
      x9={x9 ? "true" : undefined}
      x10={x10 ? "true" : undefined}
      {...props}
    />
  );
};
