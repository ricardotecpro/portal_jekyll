import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    FlatList,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    Platform
} from 'react-native';
import { getTasks, createTask, updateTask, deleteTask } from '../../api/apiService';

// Um componente simples de "Checkbox" (React Native não tem um nativo)
const Checkbox = ({ isChecked, onToggle }) => (
    <TouchableOpacity onPress={onToggle} style={styles.checkbox}>
        {isChecked && <Text style={styles.checkmark}>✓</Text>}
    </TouchableOpacity>
);

export default function HomeScreen() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');

    const fetchTasks = async () => {
        try {
            const response = await getTasks();
            setTasks(response.data);
        } catch (error) {
            console.error("Erro ao buscar tarefas (Mobile):", error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleAddTask = async () => {
        if (!title.trim()) return;
        try {
            await createTask({ title, description: '', completed: false });
            fetchTasks();
            setTitle('');
        } catch (error) {
            console.error("Erro ao adicionar:", error);
        }
    };

    const handleToggleTask = async (task) => {
        try {
            const updatedTask = { ...task, completed: !task.completed };
            await updateTask(task.id, updatedTask);
            fetchTasks();
        } catch (error) {
            console.error("Erro ao atualizar:", error);
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            await deleteTask(id);
            fetchTasks();
        } catch (error) {
            console.error("Erro ao deletar:", error);
        }
    };

    const renderTask = ({ item }) => (
        <View style={styles.taskItem}>
            <Checkbox isChecked={item.completed} onToggle={() => handleToggleTask(item)} />
            <Text
                style={[
                    styles.taskTitle,
                    item.completed && styles.taskCompleted
                ]}
            >
                {item.title}
            </Text>
            <Button title="X" color="red" onPress={() => handleDeleteTask(item.id)} />
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>ListOn Mobile</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nova Tarefa"
                    value={title}
                    onChangeText={setTitle}
                />
                <Button title="Adicionar" onPress={handleAddTask} />
            </View>

            <FlatList
                data={tasks}
                renderItem={renderTask}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    );
}

// Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        marginTop: StatusBar.currentHeight || 0,
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
    },
    form: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginRight: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 5,
        elevation: 2,
    },
    taskTitle: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
    },
    taskCompleted: {
        textDecorationLine: 'line-through',
        color: 'grey',
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkmark: {
        color: 'blue',
        fontSize: 14,
        fontWeight: 'bold',
    },
});