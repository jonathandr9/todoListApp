import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    task:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
        height: 60,
        marginTop: 5,
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#262626'
    },
    taskText:{
        flex: 1,
        color: '#F2F2F2',
        marginLeft: 8,
        marginRight: 8,
        fontSize: 14,
        fontFamily: 'Inter_400Regular'
    },
    checkbox:{
        borderRadius: 999
    }
});