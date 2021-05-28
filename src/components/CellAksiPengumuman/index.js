import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { IconDetail, IconPrinter } from '../../assets/icons'
import { WARNA_SEKUNDER } from '../../utils/constants'

const CellAksiPengumuman = ({index}) => {
      
    return (
        <View style={styles.container}>                        
            <TouchableOpacity 
                onPress={() => Alert.alert('kalo ini detail')}
                onLongPress={() => Alert.alert('on long press')}                
            >
                <View style={styles.detail}>
                    <IconDetail/>                    
                </View>
            </TouchableOpacity>   
        </View>
    )
}

export default CellAksiPengumuman

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignSelf:'center',
        
    },
    row:{        
        alignSelf:'center',
        borderWidth:1
    },
    printer:{
        marginRight:2,        
    },
    detail:{
        marginLeft:2
    }
})
