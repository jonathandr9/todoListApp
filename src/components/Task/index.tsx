import { View, Image, TouchableOpacity, Text} from 'react-native'
import { useState } from 'react'
import Checkbox from 'expo-checkbox'
import { styles } from './styles'

type Props = {
    taskName: string,
    onDelete: () => void
    onCompletedTask: () => void
}

export function Task({taskName, onDelete}: Props) {
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.task}>
            <Checkbox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}                
            />
            <Text style={styles.taskText}>{taskName}</Text>

            <TouchableOpacity
                onPress={onDelete}
            >
                <Image
                    // style={styles.iconPlus}
                    source={require('../../../assets/trash.png')}>
                </Image>
            </TouchableOpacity>
        </View>
    );
}