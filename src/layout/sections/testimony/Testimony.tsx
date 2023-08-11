import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "../skills/Skills_Styles";
import {Container} from "../../../components/Container";
import {ST} from './Testimony_Styles'

export const Testimony: React.FC = () => {
    return (
        <ST.Testimony id={'testimony'}>
            <Container>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.IconWrapper>
                <Icon iconId={"quote"} />
                </S.IconWrapper>
                <Slider/>
            </FlexWrapper>
            </Container>
        </ST.Testimony>
    );
};

