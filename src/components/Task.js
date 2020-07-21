import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default props => {
    return(
        <View style={styles.container}> 
            <Text>
                {props.desc}
            </Text>
            <Text>
                {props.estimateAt + ""}
            </Text>
            <Text>
                {props.doneAt + ""}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderColor:'#AAAAAA',
        borderBottomWidth:2,        
        alignItems:'center',
        paddingVertical:10
    }
})
