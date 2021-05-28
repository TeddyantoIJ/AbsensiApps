import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { HeaderApps,HeaderInformation, TablePengisian, TablePengumuman } from '../../components'
import { WARNA_PUTIH } from '../../utils/constants'

const Riwayat_pengumuman = () => {
    return (
        <View style={ styles.page }>            
            <ScrollView style={styles.containerScroll}>
                <View styl={styles.container}>
                    <TablePengumuman/>                    
                </View>
            </ScrollView>
        </View>
    )
}

export default Riwayat_pengumuman

const styles = StyleSheet.create({
    page:{ 
        flex: 1, 
        backgroundColor:WARNA_PUTIH
    },
    containerScroll:{
        height:300,
        marginHorizontal:13
    },
    container:{        
    },
})
