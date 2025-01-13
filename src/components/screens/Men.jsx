import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Men() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data); // Set the fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Limit products to 4 or 6 (adjust as needed)
  const limitedProducts = data.slice(0, 8); // Change '6' to the desired number of products

  return (
    <Wrapper>
      <MenContainer>
        <SubContainer>
          <BlueBlock></BlueBlock>
          <Heading>Categories For Men</Heading>
        </SubContainer>
        <CategoriesContainer>
          {limitedProducts.map((item) => (
            <CategoriesItems key={item.id} to={`/products/${item.id}`}>
              <CategoriesImg>
                <img src={item.image} alt={item.title} />
              </CategoriesImg>
              <Contents>
                <Left>
                  <CategoriesItemsName>{item.title}</CategoriesItemsName>
                  <Text>${item.price}</Text>
                </Left>
                <ArrowContainer>
                  <Arrow
                    src={require("../../assets/images/arrow-right.svg").default}
                  />
                </ArrowContainer>
              </Contents>
            </CategoriesItems>
          ))}
        </CategoriesContainer>
      </MenContainer>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  width: 90%;
  max-width: 1280px;
  margin-inline: auto;
`;
const MenContainer = styled.div`
   
`;
const SubContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const BlueBlock = styled.div`
  background-color: #8a33fd;
  width: 6px;
  height: 30px;
  border-radius: 10px;
  line-height: 33.5px;
`;
const Heading = styled.h2`
  color: #3c4242;
  font-size: 34px;
  font-weight: 600;
  line-height: 33.5px;
  letter-spacing: 0.32px;
  @media all and (max-width: 480px) {
    font-size: 25px;
  }
`;
const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  @media all and (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media all and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media all and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const CategoriesItems = styled(Link)`
  border-radius: 10px;
  width: 200px;
  height: 300px;
  margin-top: 40px;
  text-decoration: none;
  color: #2a2f2f;
`;
const CategoriesImg = styled.div`
  display: block;
  width: 100%;
  img {
    width: 100%;
    height: 200px;
  }
  text-decoration: none;
  color: #000;
`;
const Contents = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div``;
const CategoriesItemsName = styled.p`
  font-weight: 700;
  font-size: 17.88px;
  line-height: 27.93px;
  letter-spacing: -0.64px;
  color: #2a2f2f;
  margin: 0;
  margin-bottom: 3px;
  display: block;
  margin-top: 20px;
`;
const Text = styled.p`
  font-size: 13.41px;
  font-weight: 500;
  line-height: 27.93px;
  letter-spacing: -0.64px;
  color: #7f7f7f;
  margin: 0;
`;
const ArrowContainer = styled.div`
  width: 15px;
`;
const Arrow = styled.img`
  display: block;
  width: 100%;
`;

export default Men;
