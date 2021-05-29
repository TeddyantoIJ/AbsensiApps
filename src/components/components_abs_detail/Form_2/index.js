import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CheckboxPenyakit, InformasiDataDiri } from '../..'
import { WARNA_SEKUNDER } from '../../../utils/constants'
import HeaderFormAbsesni from '../../HeaderFormAbsesni'
import TemplateInfo from '../TemplateInfo'

const Form_2 = () => {
    return (
        <View>
            <HeaderFormAbsesni text={"2. Riwayat Kesehatan"}/>
            <View style={styles.container}>
                <View style={styles.infoDark}>
                    <TemplateInfo
                        question="Bagaimana kondisi kesehatan Anda saat ini?"
                        answer="Sehat"
                    />
                    <TemplateInfo
                        question="Informasikan perihal penyakit atau gejala yang di alami!"
                        answer="---"
                    />
                </View>

                <View style={styles.infoDark}>
                    <TemplateInfo
                        question="Bagaimana kondisi kesehatan keluarga Anda/kerabat Anda saat ini? (Jika berada di rumah orang tua/kerabat)"
                        answer="Sehat Semua"
                    />
                    <TemplateInfo
                        question="Jelaskan data diri keluarga dan gejala yang di alami dan informasikan sejak kapan menderitanya!"
                        answer="---"
                    />
                </View>

                <View style={styles.infoDark}>
                    <TemplateInfo
                        question="Apakah di dalam keluarga Anda (termasuk Anda), ada anggota keluarga yang terpapar virus Corona/COVID-19? (ODP/PDP/Suspect/Positif)"
                        answer="Tidak Ada"
                    />
                    <TemplateInfo
                        question="Mohon jelaskan jika terdapat ODP/PDP/Suspect/Positif!"
                        answer="---"
                    />
                </View>

                <View style={styles.infoDark}>
                    <TemplateInfo
                        question="Apakah di lingkungan Anda (termasuk Anda), ada warga yang terpapar virus Corona/COVID-19? (ODP/PDP/Suspect/Positif, terbatas dalam RT/Blok dan ada data resmi dari pengurus RT/penanggung jawab setempat)"
                        answer="Tidak Ada"
                    />
                    <TemplateInfo
                        question="Mohon jelaskan jika terdapat ODP/PDP/Suspect/Positif!"
                        answer="---"
                    />
                </View>

                <View style={styles.infoDark}>
                    <CheckboxPenyakit
                        Hipertensi={false}
                        Diabetes={false}
                        Jantung={false}
                        Paru={false}
                        Ginjal={false}
                        Lever={false}
                        Nope={true}
                    />
                </View>
            </View>            
        </View>
    )
}

export default Form_2
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
