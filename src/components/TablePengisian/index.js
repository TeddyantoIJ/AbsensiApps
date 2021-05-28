
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { Table, Row,TableWrapper, Cell } from 'react-native-table-component';
import { CellAksiFormulir } from '..';
import { WARNA_HITAM, WARNA_PUTIH, WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants';

// const TablePengisian = () => {
//     state = {
//         tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
//         tableData: [
//           ['1', '2', '3', '4'],
//           ['a', 'b', 'c', 'd'],
//           ['1', '2', '3', '456\n789'],
//           ['a', 'b', 'c', 'd']
//         ]
//       }
//     return (
//         <View style={styles.container}>
//             <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
//                 <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
//                 <Rows data={state.tableData} textStyle={styles.text}/>
//             </Table>
//       </View>
//     )
//}

export default class TablePengisian extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tableHead: ['No', 'Tanggal dan Waktu Buat', 'Status', 'Aksi'],
        widthArr: [32, 175, 79, 51],
        tableData: [
          ['1', 'Minggu, 23 Mei 2021, 08:16', 'Selesai', ''],
          ['2', 'Sabtu, 22 Mei 2021, 06:23', 'Selesai', ''],
          ['3', 'Jumat, 21 Mei 2021, 08:48', 'Selesai', ''],
          ['4', 'Kamis, 20 Mei 2021, 07:37', 'Selesai', '']
        ]
      }      
    }
    
    render() {
      const state = this.state;
      const element = (data, index) => (
        <CellAksiFormulir/>
      );
      return (
        <View style={styles.container}>
          <Table style={styles.table}>
            <Row data={state.tableHead} /*widthArr={state.widthArr}*/ style={styles.head} textStyle={styles.textHead}/>
            {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row} >
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell 
                        key={cellIndex} 
                        data={cellIndex === 3 ? element(cellData, index) : cellData}                        
                        textStyle={styles.textData}
                        widthArr={state.widthArr}
                    />
                  ))
                }
              </TableWrapper>
            ))
          }
          </Table>
        </View>
      )
    }
  }

const styles = StyleSheet.create({    
    container: { 
        flex: 1,
        paddingTop:16,        
    },
    head: { 
        height: 40, 
        backgroundColor: WARNA_UTAMA,
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    textHead: { 
        margin: 6,        
        textAlign:'center',
        fontSize:10,
        fontFamily:"Poppins-Light",
        color:WARNA_PUTIH
    },
    textData:{
        textAlign:'center',
        fontSize:10,
        fontFamily:"Poppins-Light",
        color:WARNA_HITAM,               
    },
    row: {         
        flexDirection: 'row',        
        borderBottomWidth:1,
        borderBottomColor:WARNA_SEKUNDER, 
    },
})

