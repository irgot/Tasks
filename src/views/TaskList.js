import React,{Component} from 'react'
import {View,Text,ImageBackground,StyleSheet,FlatList,TouchableOpacity,Platform} from 'react-native'
import todayImage from '../../assets/imgs/today.jpg'
import moment from 'moment'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import commonStyles from '../commonStyles'
import 'moment/locale/pt-br'
import Task from '../components/Task'
import AddTask from './AddTask'

export default class TaskList extends Component{
    state ={
        showDoneTasks: true,
        visibleTasks: [],
        showAddTask: false,
        tasks:[
            {
                id: Math.random(),
                desc:'Comprar Livro de React Native',
                estimatedAt: new Date(),
                doneAt: new Date(),
            },
            {
                id: Math.random(),
                desc:'Ler Livro de React Native',
                estimatedAt: new Date(),
                doneAt: null,
            },

        ]
    }
    componentDidMount = () =>{
        this.filterTasks()
    }
    filterTasks =() =>{
        let visibleTasks = null
        if (this.state.showDoneTasks){
            visibleTasks = [...this.state.tasks]
        }
        else{
            const isPending = task => task.doneAt === null
            visibleTasks = this.state.tasks.filter(isPending)
        }
        this.setState({visibleTasks})
    }
    toggleFilter = () => {
        this.setState({showDoneTasks:!this.state.showDoneTasks},this.filterTasks)
        
    }
    toggleTask = (taskId) =>{
        const tasks = [...this.state.tasks];
        tasks.find(task=>task.id===taskId && (task.doneAt=task.doneAt?null:new Date()));
        // tasks.forEach(task =>{
        //     if(task.id===taskId){
        //         task.doneAt = task.doneAt ? null : new Date()
        //     }
        // })
        this.setState({tasks},this.filterTasks)
    }
    render(){
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        
        return(
            <View style={styles.container}>
                <AddTask isVisible={this.state.showAddTask} onCancel={()=> this.setState({showAddTask:false})}></AddTask>
                <ImageBackground source={todayImage} style={styles.background}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <FontAwesome name={this.state.showDoneTasks?'eye':'eye-slash'}
                            size={20} color={commonStyles.colors.secundary}></FontAwesome>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>
                            Hoje
                        </Text>
                        <Text style={styles.subtitle}>
                            {today}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList data={this.state.visibleTasks} 
                        keyExtractor={item => `${item.id}`} 
                        renderItem={
                                ({item})=>
                            (<Task {...item} toggleTask={this.toggleTask} />)
                        } 
                    />
                </View>
                <TouchableOpacity style={styles.addButton} onPress={()=>this.setState({showAddTask:true})} activeOpacity={0.7}>
                    <FontAwesome name='plus' size={30} color={commonStyles.colors.secundary}></FontAwesome>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    background:{
        flex:3
    },
    taskList:{
        flex:7
    },
    titleBar:{
        flex:1,
        justifyContent:'flex-end',
    },
    title:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secundary,
        fontSize:50,
        marginLeft:20,
        marginBottom:20
    },
    subtitle:{
        fontFamily:commonStyles.fontFamily,
        color:commonStyles.colors.secundary,
        fontSize:20,
        marginBottom:20,
        marginLeft:20
    },
    iconBar:{
        flexDirection:'row',
        marginHorizontal:20,
        marginTop:Platform.OS==='ios' ? 30:10,
        justifyContent:'flex-end',       
        
    },
    addButton:{
        position:"absolute",
        right:30,
        bottom:30,
        width:50,
        height:50,
        borderRadius:25,
        backgroundColor:commonStyles.colors.today,
        justifyContent:'center',
        alignItems:'center'
    }

})
