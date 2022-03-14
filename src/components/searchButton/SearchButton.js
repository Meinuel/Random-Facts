import  React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './SearchButton.component.style';

export default function SearchButton(props){
    const {searchFact} = props; 

    return(
        <TouchableOpacity onPress={searchFact} style={styles.button}>
            <Text style={styles.text}>Search!</Text>
        </TouchableOpacity>
    )
}