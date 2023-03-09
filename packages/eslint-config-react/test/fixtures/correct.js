// Avoid extra `no-unused-vars` violations.
function noop() {
  // Do nothing
}

// Declare `React` and other react-related variables.
const React = null;

// `react-hooks/exhaustive-deps`.
const ExhaustiveDeps = ({ foo }) => {
  React.useEffect(() => foo());
  React.useEffect(() => foo(), [foo]);
  React.useMemo(() => foo(), [foo]);
  React.useCallback(() => foo(), [foo]);

  const [bar, setBar] = React.useState();

  React.useEffect(() => setBar(!bar), [bar]);

  return null;
};

noop(ExhaustiveDeps);

// `react-hooks/rules-of-hooks`.
const RulesOfHooks = () => {
  React.useState();

  return null;
};

function useHook() {
  React.useState();
}

noop(RulesOfHooks, useHook);

// `react/jsx-curly-brace-presence`.
const CurlyBracePresence = () => (
  <div id={'bar'} />
);

noop(CurlyBracePresence);

// `react/jsx-newline`.
const NewLineBetweenComponents = () => (
  <div>
    <div />

    <div />
  </div>
);

noop(NewLineBetweenComponents);

// `react/jsx-no-literals`.
const NoLiterals = () => (
  <div>
    {'qux'}
  </div>
);

noop(NoLiterals);

// `react/jsx-first-prop-new-line`.
// `react/jsx-closing-bracket-location`.
const FirstPropNewLineMultiprops = () => (
  <div
    id={'baz'}
    onClick={() => null}
  />
);

noop(FirstPropNewLineMultiprops);

// `react/jsx-tag-spacing`.
const TagSpacing = () => (
  <div />
);

noop(TagSpacing);

// `react/prefer-stateless-function`.
class PreferStatelessFunction extends React.Component {

  getFoo = () => {
    return 'foo';
  };

  render() {
    return this.getFoo();
  }

}

noop(PreferStatelessFunction);
