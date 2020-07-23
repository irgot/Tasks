import React,{Component} from 'react'
import {View,Text,Modal,StyleSheet,TouchableWithoutFeedback,TouchableOpacity,TextInput} from 'react-native'
import commonStyles from '../commonStyles'

const initialState = {desc: ''}
export default class AddTask extends Component {
    state = {
        ...initialState
    }
    render(){
        return(
            <Modal transparent={true} visible={this.props.isVisible} onRequestClose={this.props.onCancel} animationType='fade'>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa</Text>
                    <TextInput style={styles.input} placeholder="Informe a descrição..." value={this.state.desc} onChangeText={(desc)=>this.setState({desc})}></TextInput>
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}
const styles=StyleSheet.create({
    background:{
        flex: 2,
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    container: {
        // flex:6,
        backgroundColor:'#ffffff'
    },
    header:{
        fontFamily:commonStyles.fontFamily,
        backgroundColor:commonStyles.colors.today,
        color:commonStyles.colors.secundary,
        textAlign:'center',
        padding:15,
        fontSize:15,
        fontWeight:'bold'
    },
    buttons:{
        flexDirection: 'row',
        justifyContent:'flex-end'

    },
    button:{
        margin: 20,
        marginRight:30,
        color:commonStyles.colors.today,


        // padding:5,
        // backgroundColor:'#ccc',
        // borderRadius:3,
    },
    input:{
        fontFamily:commonStyles.fontFamily,
        height:40,
        margin:15,
        backgroundColor:'#ffffff',
        borderWidth:1,
        borderColor:'#e3e3e3',
        borderRadius:6,
    }

})
