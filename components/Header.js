import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>Todo Manager</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	header: {
		backgroundColor: 'coral',
		height: 80,
		paddingTop: 38,
	},
	title: {
		textAlign: 'center',
		fontSize: 20,
	},
});

export default Header;
