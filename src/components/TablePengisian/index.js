
import React, { Component } from 'react';
import { StyleSheet,Button, Text, View, TouchableOpacity, Alert } from 'react-native'
import { DataTable } from 'react-native-paper';
import { Table, Row,TableWrapper, Cell, Rows } from 'react-native-table-component';
import { CellAksiFormulir } from '..';
import { WARNA_HITAM, WARNA_PUTIH, WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants';


export default class TablePengisian extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tableHead: ['No', 'Tanggal dan Waktu Buat', 'Status', 'Aksi'],
        widthArr: [32, 175, 79, 51],
        tableData: []
      }      
    }
    GetDataAbsensi = () => {
        fetch('http://10.0.2.2:8080/listTrformmahasiswaByMhsId?mhs_id=0320190020')
        .then(response => response.json())
        .then(json => {
            console.log(json.data)
            this.setState({
              tableData:json.data
            })
        })
    }
    componentDidMount(){
      this.GetDataAbsensi();
    }
    render() {
      const state = this.state;
      const props = this.props;
      let myRow = this.state.tableData.map((myValue,myIndex)=>{
        return(
          <DataTable.Row key={myIndex} style={styles.row}>
              <DataTable.Cell>
                <Text style={styles.textData}>{myIndex+1}</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.textData}>{myValue.fma_tanggal}</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.textData}>{myValue.fma_status}</Text>
              </DataTable.Cell>
              <CellAksiFormulir navigation = {props.navigation} fma_id = {myValue.fma_id}/>
          </DataTable.Row>
        )
    });      
      return (
        <View style={styles.container}>
          <Table style={styles.table}>
            <Row data={state.tableHead} /*widthArr={state.widthArr}*/ style={styles.head} textStyle={styles.textHead}/>
            {myRow}
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

