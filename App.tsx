import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import {v4} from 'uuid';

interface TodoType {
    id: string,
    title: string,
    isDone: boolean
}

export default function App() {
    const [inputValue, setInputValue] = useState('')

    const [todo, setTodo] = useState<TodoType[]>([
        {id: v4(), title: 'qew', isDone: false},
        {id: v4(), title: 'zxc', isDone: true},
    ])

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={inputValue} onChangeText={setInputValue}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 80,
        backgroundColor: '#ffffff',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: 300,
        height: 50,
        backgroundColor: '#e0e0e0',
        padding: 6
    }
});
