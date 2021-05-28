import React , { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Table, Row,TableWrapper, Cell } from 'react-native-table-component';
import { CellAksiPengumuman } from '..';
import { WARNA_HITAM, WARNA_PUTIH, WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants';

// const TablePengumuman = () => {
//     return (
//         <View>
//             <Text></Text>
//         </View>
//     )
// }

export default class TablePengumuman extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tableHead: ['No', 'Subyek', 'Tanggal Dibuat', 'Aksi'],
        widthArr: [32, 175, 79, 51],
        tableData: [
          ['1', 'Himbauan Setelah Vaksin', '27 April 2021', ''],
          ['2', '5M', '9 Januari 2021', ''],
          ['2', '5M', '9 Januari 2021', ''],
          ['3', '3M', '28 Desember 2020', ''],
          ['4', '3M', '28 Desember 2020', ''],
          ['5', '3M', '28 Desember 2020', ''],
          ['6', '3M', '28 Desember 2020', ''],
          ['7', '3M', '28 Desember 2020', '']
        ]
      }      
    }
    
    render() {
      const state = this.state;
      const element = (data, index) => (
        
        <CellAksiPengumuman/>
                 
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
