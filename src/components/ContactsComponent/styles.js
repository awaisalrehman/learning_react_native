import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 20,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 100,
    },
    thumbnail: {
        width: 45,
        height: 45,
        backgroundColor: colors.grey,
        borderRadius: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    name: {
        fontSize: 17,
    },
    phoneNumber: {
        fontSize: 14,
        opacity: 0.5,
        paddingVertical: 4,
    },
});