import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WARNA_HITAM } from '../../utils/constants'

const InformasiDataDiri = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>
                    NIM - NAMA
                </Text>
                <Text style={styles.textBody}>
                    0320190030 - TEDDYANTO IDRUS JAMALLULAIL
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>
                    Program Studi - Tingkat
                </Text>
                <Text style={styles.textBody}>
                    MI (MI) - Tingkat 2
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>
                    Status Mahasiswa
                </Text>
                <Text style={styles.textBody}>
                    Aktif - Reguler
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>
                    Nomor Handphone
                </Text>
                <Text style={styles.textBody}>
                    0895606425999
                </Text>
            </View>
            <Text style={styles.textBody}>
                Jika ingin menghubungi nomor handphone, silahkan hubungi DAAK
            </Text>
        </View>
    )
}

export default InformasiDataDiri

const styles = StyleSheet.create({
    container:{

    },
    textContainer:{

    },
    textHeader:{
        color:WARNA_HITAM,
        fontSize:13,
        fontFamily:"Poppins-Bold",
        marginBottom:-5
    },
    textBody:{        
        color:WARNA_HITAM,
        fontSize:13,
        fontFamily:"Poppins-Light"
    }
})
