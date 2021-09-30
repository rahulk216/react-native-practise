import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Addtodo = ({addTodoHandler}) => {
	const [item, setItem] = useState('');

	const changehandler = (val) => {
		setItem(val);
	};
	
	return (
		<View>
			<TextInput placeholder='add todo' onChangeText={changehandler} />
			<Button
				style={styles.button}
				onPress={() => addTodoHandler(text)}
				title='Add Todo'
				color='coral'
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	button: {
		marginTop: 80,
	},
});
export default Addtodo;
