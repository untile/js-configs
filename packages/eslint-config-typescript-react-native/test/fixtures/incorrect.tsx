// Avoid extra `no-unused-vars` violations.
function noop() {
  // Do nothing
}

// `no-restricted-imports`.
import styled from 'styled-components';

noop(styled);

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
// eslint-disable-next-line sort-imports-es6/sort-imports-es6
import { ActivityIndicatorIOS, ProgressBarAndroid } from 'react-native';

noop(ActivityIndicatorIOS, ProgressBarAndroid);
