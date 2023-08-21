interface SettingsPageProps {
	params: {
		storeId: string;
	};
}

const SettingsPage: React.FC<SettingsPageProps> = ({ params }) => {
	return <div>Hello Settings</div>;
};

export default SettingsPage;
