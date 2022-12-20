import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

const DisplaySection = () => {
  const container = useRef(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);

  useLayoutEffect(() => {
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=500 top",
          end: "bottom top",
          scrub: 1,
        },
      })
      .fromTo(textOne.current, { x: 0 }, { x: "-20%" }, "key1")
      .fromTo(textTwo.current, { x: 0 }, { x: "20%" }, "key1");

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <Section>
      <MainTitle>
        Immersive <br /> Display
      </MainTitle>

      <TextBlockRight>
        <Title>Super Ratine XDR Display</Title>
        <Text>
          The Super Retina and Super Retina XDR displays have incredible
          contrast, high brightness, and a cinema standard wide color gamut
        </Text>
      </TextBlockRight>

      <TextBlockLeft ref={container}>
        <Title>Big is better</Title>
        <Text>
          The screen size of a mobile device is directly proportional to the
          amount of time a user spends on the phone.
        </Text>
      </TextBlockLeft>

      <TextContainer>
        <MovingText ref={textOne}>Tougher then ever!</MovingText>
        <MovingText ref={textTwo}>Every touch matters.</MovingText>
      </TextContainer>
    </Section>
  );
};

export default DisplaySection;

/* --------------------------------- styled --------------------------------- */
const Section = styled.section`
  width: 100vw;
  height: 200vh;
  position: relative;

  display: flex;
  justify-content: space-around;
  flex-direction: column;

  background-color: var(--dark);
  color: var(--white);

  & > *:nth-child(even) {
    margin-right: 4rem;
    align-self: flex-end;
    text-align: right;

    @media screen and (max-width: 48em) {
      margin-right: 1rem;
    }
  }

  & > *:nth-child(odd) {
    margin-left: 4rem;

    @media screen and (max-width: 48em) {
      margin-left: 1rem;
    }
  }
`;

const MainTitle = styled.h2`
  font-size: var(--fontBig);
  font-family: var(--fontL);

  background-image: linear-gradient(-45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }

  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }

  @media screen and (max-width: 48em) {
    font-size: var(--fontxl);
  }

  @media screen and (max-width: 40em) {
    font-size: var(--fontlg);
  }
`;

const TextBlockRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
`;

const TextBlockLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;

const Title = styled.div`
  font-size: var(--fontlg);
  margin-bottom: 1rem;

  @media screen and (max-width: 64em) {
    font-size: var(--fontmd);
  }
`;

const Text = styled.div`
  font-size: var(--fontxs);
  color: var(--greyLight);
  margin-bottom: 0.5rem;
  width: 55%;

  @media screen and (max-width: 64em) {
    width: 70%;
  }

  @media screen and (max-width: 48em) {
    width: 100%;
    font-size: var(--fontxxs);
  }
`;

const MovingText = styled.h2`
  font-size: var(--fontBig);
  font-family: var(--fontL);

  background-image: linear-gradient(-45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }

  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }

  @media screen and (max-width: 48em) {
    font-size: var(--fontxl);
  }

  @media screen and (max-width: 40em) {
    font-size: var(--fontlg);
  }

  @media screen and (max-width: 30em) {
    font-size: var(--fontmd);
  }
`;

const TextContainer = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  transform: rotate(-25deg);
  z-index: 1;
  margin-bottom: 4rem;
`;
