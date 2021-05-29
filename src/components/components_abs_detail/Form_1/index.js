import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CheckboxPenyakit, InformasiDataDiri } from '../..'
import { WARNA_SEKUNDER } from '../../../utils/constants'
import HeaderFormAbsesni from '../../HeaderFormAbsesni'
import TemplateInfo from '../TemplateInfo'

const Form_1 = () => {
    return (
        <View>
            <HeaderFormAbsesni text={"1. Data Diri dan Keluarga"}/>
            <View style={styles.container}>
                <InformasiDataDiri/>

                <View style={styles.info}>
                    <TemplateInfo
                        question="Tinggal bersama siapa dan dimana Anda saat ini?"
                        answer="[Keluarga]   RT03/01, Kauman, Comal, Kabupaten Pemalang, Jawa Tengah"
                    />
                </View>

                <View style={styles.info}>
                    <TemplateInfo
                        question="Dimana posisi Anda saat ini?"
                        answer="RT03/01, Kauman, Comal, Kabupaten Pemalang, Jawa Tengah"
                    />
                </View>

                <View style={styles.infoDark}>
                    <TemplateInfo
                        question="Apakah Anda tinggal di kos/kontrakan bersama rekan mahasiswa/karyawan Polman Astra lain?"
                        answer="Tidak"
                    />
                    <TemplateInfo
                        question="Informasikan nama dan program studi/departemennya!"
                        answer="---"
                    />
                </View>

                <View style={styles.infoDark}>
                    <TemplateInfo
                        question="Nomor Kontak Lain yang Bisa Dihubungi"
                        answer="Bapak, 087711643355"
                    />
                    <TemplateInfo
                        question="Apakah keluarga Anda ada yang berprofesi sebagai berikut?"
                        answer="---"
                    />
                </View>

                <View style={styles.infoDark}>
                    <TemplateInfo
                        question="Apakah Anda menggunakan kendaraan umum saat ke kampus?"
                        answer="Tidak"
                    />
                    <TemplateInfo
                        question="Sebutkan jenis kendaraan umum yang Anda gunakan!"
                        answer="---"
                    />
                </View>

                <View style={styles.infoDark}>
                    <TemplateInfo
                        question="Apakah dalam 7 hari terakhir Anda mengunjugi rumah sakit?"
                        answer="Tidak"
                    />
                    <TemplateInfo
                        question="Untuk keperluan apa anda ke rumah sakit/fasilitas kesehatan lainnya?"
                        answer="---"
                    />
                </View>                
            </View>            
        </View>
    )
}

export default Form_1
const styles = StyleSheet.create({
    container:{
        marginHorizontal:7,
        marginBottom:10
    },
    info:{
        marginVertical:5
    },
    infoDark:{
        marginVertical:5,
        backgroundColor:WARNA_SEKUNDER,
        padding:10,
        borderRadius:3
    }
})
