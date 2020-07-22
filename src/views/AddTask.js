import React,{Component} from 'react'
import {View,Text,Modal,StyleSheet,TouchableWithoutFeedback} from 'react-native'
import commonStyles from '../commonStyles'

export default class AddTask extends Component {
    render(){
        return(
            <Modal transparent={true} visible={this.props.isVisible} onRequestClose={this.props.onCancel} animationType='fade'>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa</Text>
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
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    container: {
        flex:1,
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
    }
})
