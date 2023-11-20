import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet, TextInput, Button } from 'react-native';

function ToDoForm({ addTask }) {

    const [taskText, setTaskText] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // function to get data from tasks.json:src/data/tasks.json
        const getTasks = () => {
            try {
                const data = require('../data/tasks.json');
                setTasks(data.tasks);
            } catch (error) {
                console.error('No data get', error);
            }
        }
        getTasks();
    }, []);

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                onChangeText={(text) => setTaskText(text)}
                value={taskText}
            />
            <Button title="Add Task"
                style={styles.Button}
                onPress={() => { addTask(taskText); setTaskText(''); }}
            />
            <Button title="Generate Random Task"
                style={styles.Button}
                onPress={() => {
                    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
                    setTaskText(randomTask);
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 10,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 10,
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default ToDoForm;