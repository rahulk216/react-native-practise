import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import Header from './components/Header';
import Displaytodo from './components/Displaytodo';
import Addtodo from './components/Addtodo';

export default function App() {
	const [data, setData] = useState([
		{ name: 'rahul', key: '1' },
		{ name: 'rahl', key: '2' },
		{ name: 'rul', key: '3' },
		{ name: 'rahl', key: '4' },
		{ name: 'rul', key: '5' },
		{ name: 'rahl', key: '6' },
		{ name: 'rul', key: '7' },
	]);

	const deleteTodoHandler = (id) => {
		console.log(id);
		setData((prev) => {
			return prev.filter((item) => item.key != id);
		});
	};
	const addTodoHandler = (text) => {
		console.log('called add');
		setData((prev) => {
			return [{ name: text, key: Math.random().toString() }, ...prev];
		});
	};
	return (
		<View>
			<Header />
			<View style={styles.content}>
				<Addtodo onPressHandler={addTodoHandler} />
				<View style={styles.list}>
					<FlatList
						data={data}
						renderItem={({ item }) => (
							<TouchableOpacity
								onPress={() => deleteTodoHandler(item.key)}
							>
								<Text style={styles.listitem}>{item.name}</Text>
							</TouchableOpacity>
						)}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	content: {
		padding: 40,
	},
	list: {
		marginTop: 20,
	},
	listitem: {
		borderWidth: 1,
		borderStyle: 'dotted',
		marginTop: 20,
		padding: 10,
		borderRadius: 2,
	},
});
