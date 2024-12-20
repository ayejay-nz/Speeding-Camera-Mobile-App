import EntryScreen from './(entry)/entry';

const HomeScreen = () => {
	const loggedIn = false;

	return (
		loggedIn ? (
			{/* Screen when logged in */}
		) : (
			<EntryScreen />
		)
	);
};

export default HomeScreen;
