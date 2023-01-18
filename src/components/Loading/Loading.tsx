import { ActivityIndicator, View } from 'react-native';
import createStyles from './styles';

export function Loading() {
    const styles = createStyles();

    return (
        <View style={styles.container}>
            <ActivityIndicator color={styles.loading.color} animating />
        </View>
    );
}
