import styled from "@emotion/styled";
import React from "react";

const Img = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 4/3;
  object-fit: cover;
  ${(props) => props.style && props.style};
  @media screen and (min-width: 993px) {
    width: ${(props) => props.width};
  }
`;

export const ImageItemDetail = ({ src, alt, width, style }) => {
  return <Img width={width} src={src} alt={alt} style={style} />;
};
