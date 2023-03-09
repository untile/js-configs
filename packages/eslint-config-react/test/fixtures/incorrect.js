// Avoid extra `no-unused-vars` violations.
function noop() {
  // Do nothing
}

// Declare `React` and other react-related variables.
const React = null;

// `react-hooks/exhaustive-deps`.
const ExhaustiveDeps = ({ foo }) => {
  React.useEffect(() => foo(), []);
  React.useMemo(() => foo);
  React.useMemo(() => foo(), []);
  React.useCallback(() => foo);
  React.useCallback(() => foo(), []);

  return null;
};

noop(ExhaustiveDeps);

// `react-hooks/rules-of-hooks`.
const RulesOfHooks = ({ foo }) => {
  if (foo) {
    React.useState();
  }

  for (let i = 0; i < 10; i++) {
    React.useState();
  }

  setTimeout(() => React.useState(), 10);

  return null;
};

function notHook() {
  React.useState();
}

noop(RulesOfHooks, notHook);

// `react/jsx-closing-bracket-location`.
const ClosingBracketLocation = () => (
  <div
    firstName={'foo'}
    lastName={'bar'} />
);

noop(ClosingBracketLocation);

// `react/jsx-curly-brace-presence`.
const CurlyBracePresence = () => (
  <div foo='bar' />
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
    qux
  </div>
);

noop(NoLiterals);

// `react/jsx-first-prop-new-line`.
const FirstPropNewLineMultiprops = () => (
  <div biz={'baz'}
    foo={'bar'}
  />
);

noop(FirstPropNewLineMultiprops);

// `react/jsx-tag-spacing`.
const TagSpacingAfterOpening = () => (
  < div />
);

noop(TagSpacingAfterOpening);

const TagSpacingBeforeClosing = () => (
  <div>
    {'foo'}
  </div >
);

noop(TagSpacingBeforeClosing);

const TagSpacingBeforeSelfClosing = () => (
  <div/>
);

noop(TagSpacingBeforeSelfClosing);

const TagSpacingClosingSlash = () => (
  <div/ >
);

noop(TagSpacingClosingSlash);

// `react/prefer-stateless-function`.
class PreferStatelessFunction extends React.Component {

  render() {
    return null;
  }

}

noop(PreferStatelessFunction);
