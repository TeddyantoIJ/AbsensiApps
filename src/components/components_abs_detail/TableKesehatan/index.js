import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WARNA_PUTIH, WARNA_SEKUNDER, WARNA_UTAMA } from '../../../utils/constants'
import TemplateRow from '../TemplateRow'

const TableKesehatan = () => {
    return (
        <View >
            <View style={styles.container}>
                <View style={styles.viewNo}>
                    <Text style={styles.textNo}>No</Text>
                </View>
                <View style={styles.viewPertanyaan}>
                    <Text style={styles.textPertanyaan}>Pertanyaan</Text>
                </View>
                <View style={styles.viewJawaban}>
                    <Text style={styles.textJawaban}>Jawaban</Text>
                </View>
            </View>
            
            
            <View>
                <TemplateRow
                    no={1}
                    question="Apakah pernah keluar rumah/tempat umum (pasar, fasyankes, kerumunan orang, dan lain-lain)?"
                    answer="Tidak"
                />
                <TemplateRow
                    no={2}
                    question="Apakah pernah menggunakan transportasi umum?"
                    answer="Tidak"
                />
                <TemplateRow
                    no={3}
                    question="Apakah pernah melakukan perjalanan ke luar kota/internasional? (wilayah yang terjangkit/zona merah)"
                    answer="Tidak"
                />
                <TemplateRow
                    no={4}
                    question="Apakah anda mengikuti kegiatan yang melibatkan orang banyak?"
                    answer="Tidak"
                />
                <TemplateRow
                    no={5}
                    question="Apakah memiliki riwayat kontak erat dengan orang yang dinyatakan ODP, PDP atau konfirm COVID-19 (berjabat tangan, berbicara, berada dalam satu ruangan/satu rumah)?"
                    answer="Tidak"
                />
                <TemplateRow
                    no={6}
                    question="Apakah pernah mengalami demam/batuk/pilek/sakit tenggorokan/sesak dalam 14 hari terakhir?"
                    answer="Tidak"
                />
                <TemplateRow
                    no={7}
                    question="Apakah terdapat riwayat berkunjung dan/atau dikunjungi tamu (kerabat/keluarga berbeda rumah) dalam jangka waktu 14 hari terakhir?"
                    answer="Tidak"
                />
            </View>

        </View>
    )
}

export default TableKesehatan

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:WARNA_UTAMA,
        padding:5
    },
    viewNo:{
        borderRightWidth:1,
        borderColor:WARNA_SEKUNDER,
        width:30,
        justifyContent:'center'
    },
    viewPertanyaan:{
        borderRightWidth:1,
        borderColor:WARNA_SEKUNDER,
        flex:1,
        alignItems:'stretch',
        alignSelf:'stretch'
    },
    viewJawaban:{        
        alignItems:'center',
        width:70,
    },
    textNo:{        
        textAlign:'center',
        color:WARNA_PUTIH,
        fontFamily:"Poppins-Light",
        fontSize:12
    },
    textPertanyaan:{
        justifyContent:'space-around',
        textAlign:'center',
        color:WARNA_PUTIH,
        fontFamily:"Poppins-Light",
        fontSize:12
    },
    textJawaban:{        
        textAlign:'center',
        color:WARNA_PUTIH,
        fontFamily:"Poppins-Light",
        fontSize:12
    },
})
