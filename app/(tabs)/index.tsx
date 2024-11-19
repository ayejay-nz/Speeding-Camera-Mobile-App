import { router } from 'expo-router';
import { StyleSheet, View, Text, Button } from 'react-native';

const loggedIn = false;

export default function HomeScreen() {
	if (loggedIn) {
		return (
			<View style={styles.container}>
				<Text>Hello World</Text>
			</View>
		);
	} else {
		return (
			<View style={styles.container}>
				<Text>Hi</Text>
				<Button
					title='Login'
					onPress={() => {router.push('/login')}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
});
