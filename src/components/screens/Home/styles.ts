import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
        // fontFamily: 'inter'
    },
    titleContainer: {
        flex: 0.1,
        backgroundColor: '#0D0D0D',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 80
    },
    logo: {
        marginTop: 15,
        marginRight: 10
    },
    bodyContainer: {
        flex: 1,
        backgroundColor: '#333333',
        paddingTop: 50,
        marginRight: 20,
        marginLeft: 20
    },
    titleText: {
        fontSize: 40,
        color: '#4EA8DE',
    },
    form: {
        position: 'absolute',
        zIndex: 1,
        marginTop: 191,
        marginRight: 20,
        marginLeft: 20,
        flexDirection: 'row'
    },
    inputForm: {
        borderRadius: 6,
        flex: 1,
        backgroundColor: '#262626',
        borderWidth: 1,
        borderColor: '#0D0D0D'
    },
    button: {
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 52,
        height: 52,
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
        // padding: 18
    },
    rowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',        
    },
    infoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4EA8DE'
    },
    badge: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#808080',
        width: 20,
        height: 16,
        borderRadius: 999,
        marginTop: 4,
        marginLeft: 10,
    },
    badgeText: {
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold'
    },
    textBlue: {
        color: '#4EA8DE',
        fontWeight: 'bold'
    },
    textPurple: {
        color: '#5E60CE',
        fontWeight: 'bold'
    },
    hr:{
        paddingBottom: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: '#808080'
    },
    textBody:{
        color: '#808080',
        fontSize: 14
    },
    textBold:{
        fontWeight: 'bold'
    },
    emptyList:{
        justifyContent:"center",
        alignItems: 'center',
        marginTop: 48
    }
});