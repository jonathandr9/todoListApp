import { View, Text, Image, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'
import { Task } from '../../components/Task'

export function Home() {
    
    const [tasks, setTasks] = useState<string[]>([]);
    const [taskName, setTaskName] = useState('');
    const [createdTasks, setCreatedTasks] = useState(0);
    const [endTasks, setEndTasks] = useState(0);
    
    function handleTaskAdd(){

        if(tasks.includes(taskName)){
            return Alert.alert('Tarefa já existe!')
        }

        setTasks(prevState => [...prevState, taskName]);
        setCreatedTasks(prevState => prevState += 1);

        setTaskName('');
    }

    function handleTaskDelete(taskNameParam: string){
        Alert.alert(
            "Remover", 
            `Deseja remover a tarefa?`, [
            {
              text: 'Sim',
              onPress: () => {
                setTasks(prevState => prevState.filter(t => t !== taskNameParam) );
                setCreatedTasks(prevState => prevState -= 1);
              }
            },
            {
              text: 'Não',
              style: 'cancel'        
            }
          ]);   
    }

    function handleTaskCompleted(taskNameParam: string){
        setEndTasks(p => p += 1)
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image 
                    style={styles.logo} source={require('../../../assets/rocket.png')}>
                </Image>
                
                <Text style={styles.titleText}>
                    <Text style={styles.textBlue}>to</Text>
                    <Text style={styles.textPurple}>do</Text>
                </Text>
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.inputForm}
                    onChangeText={setTaskName}
                    value={taskName}
                    placeholderTextColor="#808080"
                    placeholder='Adicione uma nova tarefa'
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleTaskAdd}
                >
                    <Image
                        style={styles.iconPlus}
                        source={require('../../../assets/plus.png')}>
                    </Image>
                </TouchableOpacity>
            </View>
            <View style={styles.bodyContainer}>

                <View style={styles.rowInfo}>
                    <View style={styles.rowInfo}>
                        <Text style={styles.infoText}>
                            Criadas
                        </Text>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>{createdTasks}</Text>
                        </View>
                    </View>

                    <View style={styles.rowInfo}>
                        <Text style={styles.infoText}>
                            Concluídas
                        </Text>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>{endTasks}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.hr}></View>

                <FlatList
                    data={tasks}
                    keyExtractor={item => item}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                       <Task 
                            taskName={item} 
                            onDelete={() => handleTaskDelete(item)}
                            onCompletedTask={() => handleTaskCompleted(item)}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <View style={styles.emptyList}>
                            <Image 
                                source={require('../../../assets/Clipboard.png')}>                                
                            </Image>

                            <Text style={[styles.textBody, styles.textBold]}>
                                Você ainda não tem tarefas cadatradas
                            </Text>
                            
                            <Text style={styles.textBody}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    )}
                />


            </View>
        </View>
    )
}