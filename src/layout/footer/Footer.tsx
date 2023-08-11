import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './Footer_Styles'


const socialItemData = [

    {
        iconId:'instagram'
    },
    {
        iconId:'telegram'
    },
    {
        iconId:'vk'
    },
    {
        iconId:'linkedin'
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper align={'center'} direction={'column'}>
                <S.Name>Svetlana</S.Name>
                <S.SocialList>

                    {socialItemData.map((s,index)=>{
                       return (
                           <S.SocialItem key={index} >
                               <S.SocialLink>
                            <Icon iconId={s.iconId}  height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'}/>
                               </S.SocialLink>
                           </S.SocialItem>
                        )
                    })}
                </S.SocialList>
                <S.Copyright>© 2023 Svetlana Dyablo, All Rights Reserve.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};
