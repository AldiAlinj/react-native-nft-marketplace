import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { ETHPrice, NFTTitle } from './SubInfo'
import { COLORS, FONTS, SIZES } from '../src/constants'



const DetailsDesc = ({data}) => {

    const [text, setText] = useState(data.description.slice(0,100))
    const [readMore, setReadMore] = useState(false)
  return (  
    <>
    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <NFTTitle title={data.name} subTitle={data.creator} titleSize={SIZES.extraLarge} subTitleSize={SIZES.font} />
        <ETHPrice price={data.price} />
    </View>
    <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text style={{ fontSize: SIZES.font, fontStyle: FONTS.semiBold, color: COLORS.primary}}>Description</Text>
        <Text style={{ fontSize: SIZES.small, fontStyle: FONTS.regular, color: COLORS.secondary, lineHeight: SIZES.large}}>{text}</Text>
        <Text>
        {!readMore && '...'}
        <Text style={{ fontSize: SIZES.small, fontStyle: FONTS.semiBold, color: COLORS.primary,  }} onPress={() => {
            if(!readMore) 
            { setText(data.description)
                setReadMore(true)
            }else{
                setText(data.description.slice(0,100))
                setReadMore(false)
            }
            
            }}>
                {readMore ? 'Show Less' : 'ReadMore'}
                </Text>
        </Text>
    </View>
    </>
  )
}

export default DetailsDesc