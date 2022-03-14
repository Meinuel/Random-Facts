import React , {useState , useEffect} from 'react';
import {View,Text} from 'react-native';
import SearchButton from '../components/searchButton/SearchButton'
import styles from './SearchScreen.component.styles';

export default function SearchScreen(){
const [fact, setFact] = useState('');

const searchFact = () => {
    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
        .then(response => {
            response.json().then(json => setFact(json.text));
        })
            .catch(err => {
                console.error(`Se produjo el siguiente error neno : ${err}`);
            });
}

useEffect(() => {

},[fact])

    return (
        <View style={styles.container}>
            <SearchButton searchFact={searchFact}/>
            <Text>{fact}</Text>
        </View>
    )
}