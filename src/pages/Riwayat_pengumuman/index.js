import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { HeaderApps,HeaderInformation, TablePengisian, TablePengumuman } from '../../components'
import { WARNA_PUTIH } from '../../utils/constants'
import {Riwayat_pengumuman_list, Riwayat_pengumuman_detail } from './Riwayat_pengumuman_routing'


const Riwayat_pengumuman = () => {
    return (
        <View style={ styles.page }>            
            <ScrollView style={styles.containerScroll}>
                {/* <Riwayat_pengumuman_list/> */}
                <Riwayat_pengumuman_detail
                    subyek="Himbauan Setelah Vaksin"
                    isi="https://satgas-covid19.polman.astra.ac.id/Files/IMGTINYMCE/PENGUMUMAN_LLNb2zjkpIoFw31zZLNdWziHcIBJ7wBhYMTXmjV1FEBNzgvJZNbQSzGQMo1=01h=.jpg"
                />
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
