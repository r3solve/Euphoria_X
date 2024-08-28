import { View, Text, StyleSheet, Pressable, ScrollView, Platform, Dimensions } from 'react-native';
import { Colors } from '../../constants/colors';
import React, { useState } from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Snackbar } from 'react-native-paper';

type PropTypes = {
    navigation: NavigationProp;
}

export default function SelectionScreen({ navigation }: PropTypes) {
    const [selections, modifySelection] = useState<string[]>([]);

    const [snackVisible, setSnackVisible] = useState<boolean>(false);


    const selectables = [
        ["Depression", "Social Anxiety Disorder"],
        ["Addiction", "Relationship Issues"],
        ["Lack Of Motivation", "Stress"],
        ["Eating Disorders", "Self-Harm & Self Hate"],
        ["Insecurity", "Substance Abuse"]
    ]

    const handleContinue = ()=> {
        selections.length === 0 ? setSnackVisible(true):navigation.replace('Home')
    }

    const handleSelection = (text: string) => {
        // Check if the text is already in the selections
        if (selections.includes(text)) {
            // If found, remove it from selections
            modifySelection(prev => prev.filter(ele => ele !== text));
        } else {
            // If not found, add it to selections
            modifySelection(prev => [...prev, text]);
        }

        console.log(selections); // Log the current selections
    };

    return (
        <View style={styles.main}>
            <View>
                <View style={styles.quetionContainer}>
                    <Text style={styles.questionTitle}>What burdens are you ready to let go of for good?</Text>
                </View>
                <View style={{height:Dimensions.get('window').height / 2}}>
                <ScrollView>
                    {selectables.map((line, index) => (
                        <View key={index} style={styles.optionLineContainer}>
                            {line.map(option => (
                                <Pressable 
                                    key={option} 
                                    onPress={() => handleSelection(option)} 
                                    style={({ pressed }) => [
                                        styles.option, 
                                        pressed && { opacity: 0.7 },
                                        selections.includes(option) && { borderColor: Colors.PURPLE_100 }
                                    ]}
                                >
                                    <Text style={styles.optionText}>{option}</Text>
                                </Pressable>
                            ))}
                        </View>
                    ))}
                </ScrollView>
                </View>
            </View>
            <View style={styles.inputButtonsContainer}>
                <PrimaryButton text={'Continue'} onPress={handleContinue} color={Colors.PURPLE_100} />
                <PrimaryButton text={'Skip for now'} onPress={() => navigation.replace('Home')} color={Colors.BLACK_200} />
            </View>
            <Snackbar onDismiss={()=>null} action={{label:'Okay', onPress : () => setSnackVisible(false), textColor:Colors.PURPLE_100}} visible={snackVisible} style={styles.snackBar}>Choose any of the above</Snackbar>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: Colors.BACKGROUND_COLOR,
    },
    option: {
        borderWidth: 2,
        padding: 8,
        borderColor: Colors.WHITE_100,
        margin: 8,
        justifyContent: 'center',
        backgroundColor: Colors.BLACK_50,
    },
    optionText: {
        fontWeight: 'regular',
        fontSize: 16,
        color: Colors.WHITE_100,
    },
    optionLineContainer: {
        flexDirection: 'row',
    },
    inputButtonsContainer: {
        width: '100%',
        marginTop: 12,
        alignItems: 'center'
    },
    questionTitle: {
        fontWeight: '300',
        fontStyle: 'italic',
        fontSize: 25,
        color: 'white'
    },
    quetionContainer: {
        margin: 12,
    },
    snackBar:{left:Dimensions.get('screen').height / 60,
         bottom:20,
        elevation:8,
        // backgroundColor:'#ffffff3f',
        
        }
});
