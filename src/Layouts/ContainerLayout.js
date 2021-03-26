import styled from "styled-components";

const ContainerLayout = styled.div`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  padding-left: ${(props) => props.paddingX || 0.5}em;
  padding-right: ${(props) => props.paddingX || 0.5}em;
  padding-top: ${(props) => props.paddingY || 0.5}em;
  padding-bottom: ${(props) => props.paddingY || 0.5}em;
  margin-left: ${(props) => props.marginX || 2}em;
  margin-right: ${(props) => props.marginX || 2}em;
  margin-top: ${(props) => props.marginY || 2}em;
  margin-bottom: ${(props) => props.marginY || 2}em;

  box-shadow: ${(props) => props.boxShadow || '0px 3px 5px 6px rgba (2,13,29,0,2)'};
  @media (max-width: 425px){
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-botton: 0;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

export default ContainerLayout;
