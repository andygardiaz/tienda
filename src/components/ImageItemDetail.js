import styled from "@emotion/styled";
import React from "react";

const Img = styled.img`
  width: ${(props) => props.width};
  height: auto;
  aspect-ratio: 4/3;
`;

export const ImageItemDetail = ({ src, alt, width }) => {
  return <Img width={width} src={src} alt={alt} />;
};
