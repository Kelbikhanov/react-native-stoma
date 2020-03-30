import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

export const AddToDo = ({onSubmit}) => {

    const [value, setValue] = useState('')

    const presshandler = () => {
        if(value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            //error
        }
    }

    return(
        <View style={styles.block}>
            <TextInput style={styles.input}
            onChangeText={setValue}
            value={value}
            placeholder='Введите название...'
            autoCorrect= {false} />
            <Button title='Добавить' onPress={presshandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
    },
    input: {
        width:'65%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomColor: '#333',
        borderBottomWidth: 1
    }
})

