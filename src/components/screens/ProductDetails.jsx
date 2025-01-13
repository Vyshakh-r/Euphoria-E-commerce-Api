import React from 'react';
import styled from 'styled-components';
import Arrow from '../../assets/images/right-arrow-light.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowRight from '../../assets/images/arrowup.svg';

function ProductDetails({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };


  return (
    <Wrapper>
      <MainContainer>
      <SliderContainer>
  <Slider>
    {data?.image ? (
      <SliderImageDiv key={0}>
        <img
          src={data.image}
          alt="image"
          style={{ display: 'block', width: '70px', height: '70px' }}
        />
      </SliderImageDiv>
    ) : (
      <p>No images available</p>
    )}
  </Slider>
  </SliderContainer>



        <MainImageContainer>
          <BannerImageContainer>
            <BannerImage>
              <img src={data.image} alt="image" style={{ display: 'block', width: '100%' }} />
            </BannerImage>
          </BannerImageContainer>

          <RightSideSection>
            <NavContainer>
              <Items>Shop</Items>
              <Items>
                <img src={Arrow} alt="image" style={{ display: 'block', width: '100%' }} />
              </Items>
              <Items>{data.category}</Items>
              <Items>
                <img src={Arrow} alt="image" style={{ display: 'block', width: '100%' }} />
              </Items>
              <Items>{data.title}</Items>
            </NavContainer>

            <HeadingContainer>{data.title}</HeadingContainer>

            <RatingDiv>
              <RatingImgContainer>
                <RatingImg src={require('../../assets/images/review5.svg').default} />
              </RatingImgContainer>
              <RatingSpan>{data.rating.rate}</RatingSpan>
              <CommentImgContainer>
                <CommentImg src={require('../../assets/images/message.svg').default} />
              </CommentImgContainer>
              <CommentSpan>{data.rating.count} comment</CommentSpan>
            </RatingDiv>

            <SizeContainer>
              <SizeSubDiv>
                <SelectSize>Select Size</SelectSize>
                <SelectGuide>Select Guide</SelectGuide>
                <RightArrowDiv>
                  <RightArrow src={require('../../assets/images/arrow-right.svg').default} />
                </RightArrowDiv>
              </SizeSubDiv>
              <SelectionSize>
                 {data?.sizes?.length > 0 ? (
                  data.sizes.map((item, index) => (
                  <Sizes key={index}>
                   <Size>{item}</Size>
                  </Sizes>
                   ))
                 ) : (
                  <p>No sizes available</p> // Fallback UI for missing sizes
                 )}                
                </SelectionSize>
            </SizeContainer>

            <ColorsContainer>
              <ColorsAvailableText>Colours Available</ColorsAvailableText>
              <Colors>
                {['#3f4646', '#edd146', '#eb84b0', '#9c1f35'].map((color, index) => (
                  <BlackContainer key={index} style={{ backgroundColor: color }}></BlackContainer>
                ))}
              </Colors>
            </ColorsContainer>

            <BuyContainer>
              <AddCartDiv>
                <CartContainer>
                  <CartImgContainer>
                    <CartImg src={require('../../assets/images/cart-1.svg').default} />
                  </CartImgContainer>
                  <CartText>Add to cart</CartText>
                </CartContainer>
              </AddCartDiv>
              <PriceDiv>${data.price}</PriceDiv>
            </BuyContainer>

            <Divider></Divider>

            <DetailsDiv>
              <PaymentandSize>
                <PaymentContainer>
                  <PaymentImgContainer>
                    <PaymetImg src={require('../../assets/images/credit card.svg').default} />
                  </PaymentImgContainer>
                  <PaymentText>Secure payment</PaymentText>
                </PaymentContainer>
                <SizeFitContainer>
                  <SizeImgContainer>
                    <SizeImg src={require('../../assets/images/Size&Fit.svg').default} />
                  </SizeImgContainer>
                  <PaymentText>Size & Fit</PaymentText>
                </SizeFitContainer>
              </PaymentandSize>

              <ShippingandReturn>
                <ShippingContainer>
                  <ShippingsImgContainer>
                    <ShippingsImg src={require('../../assets/images/truck.svg').default} />
                  </ShippingsImgContainer>
                  <PaymentText>Free shipping</PaymentText>
                </ShippingContainer>
                <ReturnsContain>
                  <ReturnsImgContainer>
                    <ReturnsImg src={require('../../assets/images/Free-Shipping&Returns.svg').default} />
                  </ReturnsImgContainer>
                  <PaymentText>Free Shipping & Returns</PaymentText>
                </ReturnsContain>
              </ShippingandReturn>
            </DetailsDiv>
          </RightSideSection>
        </MainImageContainer>
      </MainContainer>
    </Wrapper>
  );
}

const SampleNextArrow = ({ onClick }) => (
  <ArrowContainer onClick={onClick}>
    <Arrowimg src={ArrowRight} />
  </ArrowContainer>
);

const SamplePrevArrow = ({ onClick }) => (
  <ArrowContainerup onClick={onClick}>
    <Arrowimg src={ArrowRight} />
  </ArrowContainerup>
);

const Arrowimg = styled.img``;

const ArrowContainer = styled.div`
  box-shadow: 0.76px 0.76px 3.02px 0px #0000000a;
  background: gray;
  padding: 10px;
  border-radius: 50%;
  width: 21.17px;
  height: 21.17px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  top: 50px;
  left: 100px;
  @media all and (max-width: 1280px) {
    left: 40px;
  }
  @media all and (max-width: 1080px) {
    left: 136px;
  }
  @media (max-width: 860px) {
    left: 103px;
    display: none;
  }
`;

const ArrowContainerup = styled.div`
  box-shadow: 0.76px 0.76px 3.02px 0px #0000000a;
  background-color: white;
  padding: 10px;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  top: 284px;
  left: 100px;
  transform: rotate(180deg);
  @media all and (max-width: 1280px) {
    left: 40px;
  }
  @media all and (max-width: 1080px) {
    left: 136px;
  }
  @media (max-width: 860px) {
    left: 103px;
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  margin-inline: auto;
  @media all and (max-width: 1280px) {
    margin-top: 30px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  @media all and (max-width: 768px) {
    margin-top: 30px;
    display: block;
  }
`;

const MainImageContainer = styled.div`
  display: flex;
  @media all and (max-width: 1080px) {
    flex-direction: column;
  }
`;

const SliderContainer = styled.div`
  width: 281px;
  height: 784px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media all and (max-width: 1180px) {
    display: none;
  }
  @media all and (max-width: 860px) {
    background-color: white;
    width: 40%;
    display: none;
  }
`;

const SliderImageDiv = styled.div`
  width: 51%;
  margin: 8px auto;
  display: block;
  img {
    width: 57%;
    height: 100%;
    display: block;
    border-radius: 20px;
  }
`;

const BannerImageContainer = styled.div`
  width: 520px;
  height: 784px;
  @media all and (max-width: 1080px) {
    width:100%;
    height: 100%;
  }
  @media all and (max-width: 480px) {
    width: 300px;
  }
`;

const BannerImage = styled.div`
  display: block;
  @media all and (max-width: 480px) {
    width: 300px;
  }
`;

const RightSideSection = styled.div`
  margin-left: 22px;
  @media all and (max-width: 1080px) {
    display:block;
    margin-top: 15px;
  }
  @media all and (max-width: 480px) {
    width: 100%;
  }
`;

const NavContainer = styled.div`
  display: flex;
  gap: 10px;
  font-size: 10px;
  font-weight: 300;
  color: #626262;
`;

const Items = styled.div``;

const HeadingContainer = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: #2b2a29;
  margin: 20px 0;
  @media all and (max-width: 768px) {
    font-size: 23px;
  }
`;

const RatingDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media all and (max-width:480px){
  flex-wrap:wrap;
  }
`;

const RatingImgContainer = styled.div`
  `;

const RatingImg = styled.img`
`;

const RatingSpan = styled.span`
  font-size: 12px;
  color: #515151;
`;

const CommentImgContainer = styled.div``;

const CommentImg = styled.img`
  width: 16px;
  height: 16px;
`;

const CommentSpan = styled.span`
  font-size: 12px;
  color: #515151;
`;

const SizeContainer = styled.div`
`;

const SizeSubDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media all and (max-width:480px){
   display: block;
  }
`;

const SelectSize = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #2b2a29;
`;

const SelectGuide = styled.div`
  font-size: 12px;
  color: #979797;
`;

const RightArrowDiv = styled.div``;

const RightArrow = styled.img``;

const SelectionSize = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Sizes = styled.div`
  width: 60px;
  height: 60px;
  background-color: #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
`;

const Size = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const ColorsContainer = styled.div`
  margin-top: 30px;
`;

const ColorsAvailableText = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #2b2a29;
`;

const Colors = styled.div`
  display: flex;
  gap: 10px;
`;

const BlackContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const BuyContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddCartDiv = styled.div`
  width: 180px;
  height: 50px;
  background-color: #8A33FD;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  gap: 5px;
`;

const CartImgContainer = styled.div`
`;

const CartImg = styled.img``;

const CartText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF;
`;

const PriceDiv = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #ff5050;
  width:100px;
  border-radius:8px;
  border:1px solid #3C4242;
  display:flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Divider = styled.div`
  height: 2px;
  background-color: #e7e7e7;
  margin-top: 30px;
`;

const DetailsDiv = styled.div``;

const PaymentandSize = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PaymentContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const PaymentImgContainer = styled.div``;

const PaymetImg = styled.img``;

const PaymentText = styled.div`
  font-size: 14px;
  color: #8a8a8a;
`;

const SizeFitContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const SizeImgContainer = styled.div``;

const SizeImg = styled.img``;

const ShippingandReturn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ShippingContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const ShippingsImgContainer = styled.div``;

const ShippingsImg = styled.img``;

const ReturnsContain = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const ReturnsImgContainer = styled.div``;

const ReturnsImg = styled.img``;

export default ProductDetails;
