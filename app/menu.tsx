import { Appearance, ColorSchemeName, StyleSheet, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image } from "react-native";

import { Colors } from "@/constants/Colors";
import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";


export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme();

    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme);

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    const separatorComponent = () => <View style={styles.separator}/>

    // const headerComponent = () => <Text>Top of List</Text>
    const footerComponent = () => <Text style={ { color: theme.text }}>End of Menu</Text>

    return (
        <Container>

            <FlatList
                data={ MENU_ITEMS }
                keyExtractor={ (item) => item.id.toString() }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={separatorComponent}
                // ListHeaderComponent={headerComponent}
                ListFooterComponent={footerComponent}
                ListFooterComponentStyle={styles.footerComponent}
                ListEmptyComponent={<Text style={styles.menuItemText}>No Items!</Text>}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                           <Text style={[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text>
                           <Text style={styles.menuItemText}>{item.description}</Text>
                           <Text style={styles.originalPrice}>HKD {item.originalPrice}</Text>
                           <Text style={styles.discountedPrice}>Discounted - HKD {item.discountedPrice}</Text>
                        </View>
                        <Image
                            source={ MENU_IMAGES[item.id - 1]}
                            style={styles.menuImage}
                        />
                    </View>
                )}
            />

        </Container>
    )

}

function createStyles(theme: any, colorScheme: ColorSchemeName) {
    return StyleSheet.create({
        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.background,
        },
        separator: {
            height: 1,
            backgroundColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
            width: '50%',
            maxWidth: 300,
            marginHorizontal: 'auto',
            marginBottom: 10,
        },
        footerComponent: {
            marginHorizontal: 'auto',
        },
        row:{
            flexDirection: 'row',
            width: '100%',
            maxWidth: 600,
            height: 100,
            marginBottom: 10,
            borderStyle: 'solid',
            borderColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
            borderWidth: 1,
            borderRadius: 20,
            overflow: 'hidden',
            marginHorizontal: 'auto',
        },
        menuTextRow:{
            width: '65%',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow: 1,
        },
        menuItemTitle:{
            fontSize: 18,
            textDecorationLine: 'underline'
        },
        menuItemText:{
            color: theme.text
        },
        originalPrice: {
            color: 'gray', // Dimmed color for the original price
            textDecorationLine: 'line-through', // Strikethrough effect
            fontSize: 14, // Slightly smaller font size
            marginRight: 8, // Adds spacing between prices
        },
        discountedPrice: {
            color: 'red', // Highlight discount price in red
            fontWeight: 'bold', // Make it stand out
            fontSize: 16, // Slightly larger font
        },
        menuImage:{
            width: 100,
            height: 100,
        }
    });
}