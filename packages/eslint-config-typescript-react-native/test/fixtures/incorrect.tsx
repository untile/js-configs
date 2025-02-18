// Avoid extra `no-unused-vars` violations.
function noop() {
  // Do nothing
}

// `react/jsx-no-literals`.
export const Foo = () => <View>raw text</View>;

// `react-native/no-unused-styles`.
// `sort-keys`.
const foo = StyleSheet.create({
  biz: {},
  bar: {}
});

export const Bar = () => <View style={foo.bar} />;

// `react-native/split-platform-components`.
import { ActivityIndicatorIOS, ProgressBarAndroid } from 'react-native';

noop(ActivityIndicatorIOS, ProgressBarAndroid);
