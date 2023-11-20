import React from 'react';
import { SafeAreaView, Button } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';
import { useState } from 'react';

function HomeScreen({ navigation }) {
    const taskList = [
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]; 1

    const [tasks, setTasks] = useState(taskList);

    const addTask = (taskText) => {
        if (taskList.includes(taskText)) {
            return alert('Task already exists!');
        }
        if (taskText === '') {
            return alert('Task cannot be empty!');
        }
        setTasks([...tasks, taskText]);
    };


    return (
        <MainLayout>
            <SafeAreaView>
                <ToDoList tasks={tasks} />
                <ToDoForm addTask={addTask} />
                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
                />
            </SafeAreaView>
        </MainLayout>
    );
}

export default HomeScreen;