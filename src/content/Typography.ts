import styled, {css} from "styled-components";
import {SPACING} from "../layout";


/**
 * -------------- Headings --------------
 */
const HeadingRoot = css`
  font-weight: 500;
  line-height: 1.2;
  margin: ${SPACING}px 0;
`;

export const H1 = styled.span`
  ${HeadingRoot};
  font-size: 40px;
`;

export const H2 = styled.span`
  ${HeadingRoot};
  font-size: 32px;
`;

export const H3 = styled.span`
  ${HeadingRoot};
  font-size: 28px;
`;

export const H4 = styled.span`
  ${HeadingRoot};
  font-size: 24px;
`;

export const H5 = styled.span`
  ${HeadingRoot};
  font-size: 20px;
`;

export const H6 = styled.span`
  ${HeadingRoot};
  font-size: 16px;
`;

/**
 * -------------- Displays --------------
 */
const DisplayRoot = css`
  font-weight: 300;
  line-height: 1.2;
`;
export const Display1 = styled.span`
  ${DisplayRoot};
  font-size: 96px;
`;
export const Display2 = styled.span`
  ${DisplayRoot};
  font-size: 88px;
`;
export const Display3 = styled.span`
  ${DisplayRoot};
  font-size: 72px;
`;
export const Display4 = styled.span`
  ${DisplayRoot};
  font-size: 56px;
`;

/**
 * -------------- Paragraphs --------------
 */
const ParagraphRoot = css`
  font-size: 16px;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: ${SPACING * 2}px;
`;
export const P = styled.p`
  ${ParagraphRoot};
`;
