import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import styled from "styled-components";

function ProductDescription() {
  const [description, setDescription] = useState("");
  const { id } = useParams();

  useEffect(() => {
    // Replace with your actual API URL
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDescription(data.description);  // Assuming 'description' is a key in the API response
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setDescription("No description available");
      });
  }, []); // Empty dependency array ensures the API is fetched only once

  return (
    <>
      <Wrapper>
        <DescrptionContainer>
          <Container>
            <BlueBlock></BlueBlock>
            <Heading>Product Description</Heading>
          </Container>
          <NavigationHeadingContainer>
            <DiscriptionNav>
            <NavigationHeading>Description</NavigationHeading>
            <TextContainer>
            <Text>{description || "No description available"}</Text>
          </TextContainer>
            </DiscriptionNav>
            <NavigationHeading>User comments</NavigationHeading>
            <CommentBlock>21</CommentBlock>
            <NavigationHeading>Question & Answer</NavigationHeading>
            <Question>4</Question>
          </NavigationHeadingContainer>
        </DescrptionContainer>
        <TableWrapper>
          <ProductDetails>
            <DetailItem>
              <Category>
                <p style={{ marginTop: "0" }}>Fabric</p>
              </Category>
              <Value>
                <p style={{ margin: "0" }}>Bio-washed Cotton</p>
              </Value>
            </DetailItem>
            <DetailItem>
              <Category>
                <p style={{ marginTop: "0" }}>Pattern</p>
              </Category>
              <Value>
                <p style={{ margin: "0" }}>Printed</p>
              </Value>
            </DetailItem>
            <DetailItem>
              <Category>
                <p style={{ marginTop: "0" }}>Fit</p>
              </Category>
              <Value>
                <p style={{ margin: "0" }}>Regular-fit</p>
              </Value>
            </DetailItem>
            <DetailItem>
              <Category>
                <p style={{ marginTop: "0" }}>Neck</p>
              </Category>
              <Value>
                <p style={{ margin: "0" }}>Round Neck</p>
              </Value>
            </DetailItem>
            <DetailItem>
              <Category>
                <p style={{ marginTop: "0" }}>Sleeve</p>
              </Category>
              <Value>
                <p style={{ margin: "0" }}>Half-sleeves</p>
              </Value>
            </DetailItem>
            <DetailItem>
              <Category>
                <p style={{ marginTop: "0" }}>Style</p>
              </Category>
              <Value>
                <p style={{ margin: "0" }}>Casual Wear</p>
              </Value>
            </DetailItem>
          </ProductDetails>
        </TableWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  padding: 60px 0;
  display: flex;
  gap: 30px;
  @media (max-width: 1400px) {
    flex-direction: column;
  }
  @media (max-width: 680px) {
    padding-top: 55px;
  }
`;

const Container = styled.div`
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  gap: 15px;
`;
const BlueBlock = styled.div`
  width: 6px;
  height: 30px;
  border-radius: 10px;
  background-color: #8a33fd;
`;
const Heading = styled.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 33.5px;
  letter-spacing: 0.32px;
  color: #3c4242;
`;
const DescrptionContainer = styled.div`
`;

const NavigationHeadingContainer = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const NavigationHeading = styled.div`
  margin-bottom: 20px;
  font-weight: 500;
  line-height: 21.6px;
  font-size: 18px;
`;

const CommentBlock = styled.div`
  background-color: blueviolet;
  width: 20px;
  height: 20px;
  border-radius: 6px;
  text-align: center;
  font-size: 10px;
  color: #ffffff;
  line-height: 18px;
  font-family: 500;
`;

const Question = styled.div`
  background-color: #3c4242;
  width: 20px;
  height: 20px;
  border-radius: 6px;
  text-align: center;
  font-size: 10px;
  color: #ffffff;
  line-height: 18px;
  font-family: 500;
`;

const TextContainer = styled.div``;
const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.02em;
  color: #807d7e;
`;

const TableWrapper = styled.div`
  margin: 0 auto;
`;

const ProductDetails = styled.div`
  width: 632px;
  background-color: #f6f6f6;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 12px;
  @media (max-width: 820px) {
    flex-direction: column;
  }
  @media (max-width: 660px) {
    width:100%;
  }
`;

const DetailItem = styled.div`
  flex: 1 1 calc(33.33% - 10px);
  padding: 20px 40px;
  box-sizing: border-box;
  border-right: 1px solid #bebcbd;
  border-bottom: 1px solid #bebcbd;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #807d7e;
`;

const Value = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #3c4242;
`;
const DiscriptionNav = styled.div``;

export default ProductDescription;
