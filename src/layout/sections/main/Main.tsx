import React from 'react';
import photo from '../../../assets/images/profile.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.Main id={'home'}>
            <Container>
          <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
              <div>
                  <S.SmallText>Hi There</S.SmallText>
                  <S.Name>I am <span>Svetlana Dyablo </span></S.Name>
                  {/*<S.MainTitle>A Web Developer. </S.MainTitle>*/}
                  <S.MainTitle>
                      <p>A Web Developer.</p>
                      <Typewriter
                          options={{
                              strings: ['A Web Developer.','A Frontend Developer'],
                              autoStart: true,
                              delay:100,
                              loop: true,
                          }}
                      />
                  </S.MainTitle>


              </div>

              <S.PhotoWrapper>
                  <Tilt>
              <S.Photo src={photo} alt=""/>
                  </Tilt>
              </S.PhotoWrapper>
          </FlexWrapper>
            </Container>
        </S.Main>
    );
};

