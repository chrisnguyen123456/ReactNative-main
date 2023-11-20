// YourComponent.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo, fetchTodos } from './actions';

const YourComponent = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://654b14b35b38a59f28ee80e7.mockapi.io/User');
      const result = await response.json();
      dispatch(fetchTodos(result));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddTodo = async () => {
    try {
      const todo = {
        id: Math.random().toString(),
        todojob: newTodo,
      };
      await fetch('https://654b14b35b38a59f28ee80e7.mockapi.io/User', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      });
      fetchData();
      setNewTodo('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleDeleteTodo = async (todoId) => {
    try {
      await fetch(`https://654b14b35b38a59f28ee80e7.mockapi.io/User/${todoId}`, {
        method: 'DELETE',
      });
      fetchData();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleEditTodo = async (todo) => {
    try {
      const updatedTodo = {
        ...todo,
        todojob: 'Updated Todo', // Update with the new todojob value
      };
      await fetch(`https://654b14b35b38a59f28ee80e7.mockapi.io/User/${todo.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTodo),
      });
      fetchData();
    } catch (error) {
      console.error('Error editing todo:', error);
    }
  };

  const renderTodoItem = ({ item }) => (
    <View>
      <Text>{item.id}</Text>
      <Text>{item.todojob}</Text>
      <Button title="Edit" onPress={() => handleEditTodo(item)} />
      <Button title="Delete" onPress={() => handleDeleteTodo(item.id)} />
    </View>
  );

  return (
    <View>
      <Text>Your Todo List:</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTodoItem}
      />
      <TextInput
        placeholder="Enter a new todo"
        value={newTodo}
        onChangeText={(text) => setNewTodo(text)}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  );
};

export default YourComponent;
