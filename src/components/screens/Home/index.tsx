import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import Checkbox from 'expo-checkbox';
import { useState } from 'react'
import { styles } from './styles'


export function Home() {

    const [tasks, setTasks] = useState<string[]>(['Desenvolver aplicativos de forma rápida e bem feita']);
    const [isSelected, setSelection] = useState(false);

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

                    <Image
                        style={styles.iconPlus}
                        source={require('../../../../assets/plus.png')}>
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
                    renderItem={({ item }) => (
                        <View style={styles.task}>
                            <Checkbox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={styles.checkbox}
                            />
                            <Text style={styles.taskText}>{item}</Text>

                            <TouchableOpacity>
                                <Image
                                    // style={styles.iconPlus}
                                    source={require('../../../../assets/trash.png')}>
                                </Image>
                            </TouchableOpacity>
                        </View>

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