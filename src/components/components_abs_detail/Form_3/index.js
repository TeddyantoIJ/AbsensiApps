import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WARNA_SEKUNDER } from '../../../utils/constants'
import HeaderFormAbsesni from '../../HeaderFormAbsesni'
import TemplateInfo from '../TemplateInfo'

const Form_3 = () => {
    return (
        <View>
            <HeaderFormAbsesni text={"3. Data OJT/Magang"}/>
            <View style={styles.container}>

                <View style={styles.infoDark}>
                    <TemplateInfo
                        question="Apakah saat ini Anda sedang OJT/Magang/Bekerja?"
                        answer="Tidak"
                    />

                    <TemplateInfo
                        question="Dimanakah posisi Anda saat OJT/Magang/Bekerja?"
                        answer="---"
                    />
                    
                    <TemplateInfo
                        question="Tuliskan nama perusahaan dan cabang/site nya!"
                        answer="---"
                    />

                    <TemplateInfo
                        question="Deskripsikan secara singkat tentang Magang/TA Anda! (proposal, monitoring, bimbingan, project/produk TA)"
                        answer="---"
                    />
                </View>                
            </View>
        </View>
    )
}

export default Form_3

const styles = StyleSheet.create({
    container:{
        marginHorizontal:7,
        marginBottom:10
    },    
    infoDark:{
        marginVertical:5,
        backgroundColor:WARNA_SEKUNDER,
        padding:10,
        borderRadius:3
    }
})
