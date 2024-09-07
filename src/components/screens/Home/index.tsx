import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import {useState} from 'react'
import { styles } from './styles'


export function Home() {

    const [tasks, setTasks] = useState<string[]>([]); 

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image style={styles.logo} source={require('../../../../assets/rocket.png')}></Image>
                <Text style={styles.titleText}>
                    <Text style={styles.textBlue}>to</Text><Text style={styles.textPurple}>do</Text>
                </Text>
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.inputForm}    
                />

                <TouchableOpacity
                    style={styles.button}
                >
                    <Text><Image style={styles.logo} source={require('../../../../assets/plus.png')}></Image></Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bodyContainer}>

                <View style={styles.rowInfo}>

                    <View style={styles.rowInfo}>
                        <Text style={styles.infoText}>
                            Criadas
                        </Text>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>0</Text>
                        </View>
                    </View>

                    <View style={styles.rowInfo}>
                        <Text style={styles.infoText}>
                            Concluídas
                        </Text>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>0</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.hr}></View>

                <FlatList
                   data={tasks}
                   keyExtractor={item => item}
                   showsVerticalScrollIndicator={false}
                   renderItem={({item}) =>(
                   <Text></Text>
          
                  )}
                   ListEmptyComponent={() => (
                    <View style={styles.emptyList}>
                      <Image source={require('../../../../assets/Clipboard.png')}></Image>
                      <Text style={[styles.textBody, styles.textBold]}>Você ainda não tem tarefas cadatradas</Text>
                      <Text style={styles.textBody}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                  )}
                />
      
       
            </View>
        </View>
    )
}