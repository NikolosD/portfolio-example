import React from 'react';

import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Contacts_Styles'

export const Contacts:  React.FC = () => {
    return (
        <S.Contacts id={'contact'}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <FlexWrapper justify={'center'}>
                    <S.Form>
                        <S.Field placeholder={'name'}/>
                        <S.Field placeholder={'subject'}/>
                        <S.Field placeholder={'leave a message'} as={'textarea'}/>
                        <Button>Send message</Button>
                    </S.Form>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};

