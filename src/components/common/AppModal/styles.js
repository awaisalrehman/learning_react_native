import { StyleSheet } from "react-native";

export default StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
    },
    modalView: {
        backgroundColor: 'white',
        minHeight: 100,
        marginHorizontal: 20,
        borderRadius: 4,
    },
    modalHeader: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    modalTitle: {
        fontSize: 21,
    },
    modalBody: {
        padding: 10,
        minHeight: 20,
    },
    modalFooter: {
        width: '100%',
        padding: 10,
    },
    footerItems: {
        justifyContent: 'space-evenly',
        paddingVertical: 7,
        alignItems: 'center',
        flexDirection: 'row',
    },
    footerText: {
        fontSize: 12,
    },
});