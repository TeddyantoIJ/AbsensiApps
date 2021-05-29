import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { ButtonTutupPengumuman } from '../../../components'
import { WARNA_HITAM } from '../../../utils/constants'

const Riwayat_pengumuman_detail = ({subyek, isi}) => {
    return (
        <View style={styles.container}>
            <View styles={styles.containerInfo}>
                <Text style={styles.textHeader}>
                    Subyek Pengumuman
                </Text>
                <Text style={styles.textBody}>
                    {subyek}
                </Text>
            </View>

            <View>
                <Text style={styles.textHeader}>
                Isi Pengumuman
                </Text>
                <View style={styles.containerImage}>
                    <Image
                        source={{
                            uri: isi,
                            cache: 'only-if-cached'
                        }}
                        style={styles.image}
                        resizeMode="contain"
                        />
                </View>                
            </View>

            <View style={styles.button}>
                <ButtonTutupPengumuman/>
            </View>
        </View>
    )
}

export default Riwayat_pengumuman_detail

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:16
    },
    containerInfo:{
        marginBottom:10,
    },
    containerImage:{        
        marginBottom:15,
    },
    textHeader:{
        fontFamily:"Poppins-SemiBold",
        fontSize:13,
        color:WARNA_HITAM,        
    },
    textBody:{
        fontFamily:"Poppins-Light",
        fontSize:13,
        color:WARNA_HITAM,        
    },
    image:{        
        width: '100%',
        height : Dimensions.get('window').height
    },
    button:{
        marginBottom:10,
        alignItems:'flex-end'
    }
})
