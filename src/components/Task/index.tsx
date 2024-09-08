import { View, Image, TouchableOpacity, Text } from 'react-native'
import { useState } from 'react'
import Checkbox from 'expo-checkbox'
import { styles } from './styles'

type Props = {
    taskName: string,
    onDelete: (checked: boolean) => void
    onCompletedTask: (checked: boolean) => void
}

export function Task({ taskName, onDelete, onCompletedTask }: Props) {
    const [isSelected, setSelection] = useState(false);

    function handleCheckTask(){
        var newValueCheck = isSelected ? false : true;

        setSelection(p => p ? false : true);
        onCompletedTask(newValueCheck);
    }

    function handleRemoveTask(){
        onDelete(isSelected);
    }

    return (
        <View style={styles.task}>
            <TouchableOpacity
                onPress={handleCheckTask}
                style={styles.regionCheckTask}
            >
                <Checkbox
                    value={isSelected}
                    onValueChange={handleCheckTask}
                    style={styles.checkbox}
                />
                <Text style={[styles.taskText, isSelected? styles.taskTextCompleted : {}]}>{taskName}</Text>

            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={handleRemoveTask}
            >
                <Image
                    // style={styles.iconPlus}
                    source={require('../../../assets/trash.png')}>
                </Image>
            </TouchableOpacity>
        </View>
    );
}