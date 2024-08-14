/* eslint-disable sort-keys */

/**
 * Export testCases
 */

export const testCases = [
  {
    rule: '@stylistic/brace-style',
    correct: [
      `
        if (true) { console.log('foo'); }
      `,
      `
        function foo() {
          if (true) { console.log('bar'); }
        }
      `
    ],
    incorrect: [
      `
        function foo()
        {
          if (true) {
            console.log('bar');
          }
        }
      `,
      `
        if (true)
        {
          console.log('foo');
        }
      `
    ]
  },
  {
    rule: '@stylistic/comma-dangle',
    correct: [
      `
        const arr = [
          'foo',
          'bar'
        ];
      `,
      `
        const obj = {
          foo: 'foo',
          bar: 'bar'
        };
      `
    ],
    incorrect: [
      `
        const arr = [
          'foo',
          'bar',
        ];
      `,
      `
        const obj = {
          foo: 'foo',
          bar: 'bar',
        };
      `
    ]
  },
  {
    rule: '@stylistic/comma-spacing',
    correct: [
      `
        const arr = ['foo', 'bar', 'baz'];
      `
    ],
    incorrect: [
      `
        const arr = ['foo' , 'bar' , 'baz'];
      `,
      `
        const arr = ['foo','bar','baz'];
      `
    ]
  },
  {
    rule: '@stylistic/comma-style',
    correct: [
      `
        const arr = ['foo',
          'bar',
          'baz'
        ];
      `
    ],
    incorrect: [
      `
        const arr = ['foo'
          ,'bar'
          ,'baz'
        ];
      `
    ]
  },
  {
    rule: '@stylistic/computed-property-spacing',
    correct: [
      `
        obj[foo]
      `
    ],
    incorrect: [
      `
        obj[foo ]
      `
    ]
  },
  {
    rule: '@stylistic/dot-location',
    correct: [
      `
        const foo = bar
          .baz;
      `
    ],
    incorrect: [
      `
        const foo = bar.
          baz;
      `
    ]
  },
  {
    rule: '@stylistic/eol-last',
    correct: [
      `const foo = 'bar';\n`
    ],
    incorrect: [
      `
        const foo = 'bar';`
    ]
  },
  {
    rule: '@stylistic/func-call-spacing',
    correct: [
      `
        foo();
      `
    ],
    incorrect: [
      `
        foo ();
      `
    ]
  },
  {
    rule: '@stylistic/generator-star-spacing',
    correct: [
      `
        function *foo() {
          console.log('foo');
        }
      `
    ],
    incorrect: [
      `
        function* foo() {
          console.log('foo');
        }
      `
    ]
  },
  {
    rule: '@stylistic/indent',
    correct: [
      `function foo() {\n  console.log('foo');\n}`
    ],
    incorrect: [
      `function foo() {\nconsole.log('foo');\n}`
    ]
  },
  {
    rule: '@stylistic/key-spacing',
    correct: [
      `
        const obj = {
          foo: 'bar',
          bar: 'baz'
        };
      `
    ],
    incorrect: [
      `
        const obj = {
          foo: 'bar',
          bar:  'baz'
        };
      `
    ]
  },
  {
    rule: '@stylistic/keyword-spacing',
    correct: [
      `
        if (true) {
          console.log('foo');
        }
      `
    ],
    incorrect: [
      `
        if(true) {
          console.log('foo');
        }
      `
    ]
  },
  {
    rule: '@stylistic/linebreak-style',
    correct: [
      `
        const foo = 'bar';
      `
    ],
    incorrect: [
      `
        const foo = 'bar';\r\n
      `
    ]
  },
  {
    rule: '@stylistic/lines-around-comment',
    correct: [
      `
        const foo = 'foo';

        /* Comment */

        const bar = 'bar';
      `
    ],
    incorrect: [
      `
        const foo = 'foo';
        /* Comment */
        const bar = 'bar';
      `
    ]
  },
  {
    rule: '@stylistic/new-parens',
    correct: [
      `
        const foo = new Bar();
      `
    ],
    incorrect: [
      `
        const foo = new Bar;
      `
    ]
  },
  {
    rule: '@stylistic/no-confusing-arrow',
    correct: [
      `
        const foo = bar => baz;
      `
    ],
    incorrect: [
      `
        const foo = bar => bar ? baz : qux;
      `
    ]
  },
  {
    rule: '@stylistic/no-extra-parens',
    correct: [
      `
        const foo = 1 * 2;
      `
    ],
    incorrect: [
      `
        const foo = (1 * 2);
      `
    ]
  },
  {
    rule: '@stylistic/no-floating-decimal',
    correct: [
      `
        const foo = 0.1;
      `
    ],
    incorrect: [
      `
        const foo = .1;
      `
    ]
  },
  {
    rule: '@stylistic/no-multi-spaces',
    correct: [
      `
        const foo = 'bar';
      `
    ],
    incorrect: [
      `
        const  foo = 'bar';
      `
    ]
  },
  {
    rule: '@stylistic/no-multiple-empty-lines',
    correct: [
      `
        const foo = '';
        
        const bar = '';
      `
    ],
    incorrect: [
      `
        const foo = '';
        

        const bar = '';
      `
    ]
  },
  {
    rule: '@stylistic/no-trailing-spaces',
    correct: [
      `const foo = 'bar';`
    ],
    incorrect: [
      `
        const foo = 'bar';  
      `
    ]
  },
  {
    rule: '@stylistic/object-curly-spacing',
    correct: [
      `
        const { foo, bar } = baz;
      `
    ],
    incorrect: [
      `
        const {foo, bar} = baz;
      `
    ]
  },
  {
    rule: '@stylistic/one-var-declaration-per-line',
    correct: [
      `
        const foo = 'bar';
        const bar = 'baz';
      `
    ],
    incorrect: [
      `
        const foo = 'bar', bar = 'baz';
      `
    ]
  },
  {
    rule: '@stylistic/operator-linebreak',
    correct: [
      `
        const foo = bar + baz;
      `
    ],
    incorrect: [
      `const foo = bar +\n  baz;`
    ]
  },
  {
    rule: '@stylistic/padded-blocks',
    correct: [
      `
        if (true) {
          console.log('foo');
        }
      `
    ],
    incorrect: [
      `
        if (true) {

          console.log('foo');
        }
      `
    ]
  },
  {
    rule: '@stylistic/padding-line-between-statements',
    correct: [
      `
        const foo = 'bar';
        const bar = 'baz';
      `
    ],
    incorrect: [
      `
        const foo = {
          foo: 'foo'
        };
        const bar = 'bar';
      `
    ]
  },
  {
    rule: '@stylistic/quote-props',
    correct: [
      `
        const obj = {
          foo: 'bar'
        };
      `
    ],
    incorrect: [
      `
        const obj = {
          'foo': 'bar'
        };
      `
    ]
  },
  {
    rule: '@stylistic/quotes',
    correct: [
      `
        const foo = 'bar';
      `
    ],
    incorrect: [
      `
        const foo = "bar";
      `
    ]
  },
  {
    rule: '@stylistic/semi',
    correct: [
      `
        const foo = 'bar';
      `
    ],
    incorrect: [
      `
        const foo = 'bar'
      `
    ]
  },
  {
    rule: '@stylistic/semi-spacing',
    correct: [
      `
        const foo = 'bar';
      `
    ],
    incorrect: [
      `
        const foo = 'bar' ;
      `
    ]
  },
  {
    rule: '@stylistic/space-before-blocks',
    correct: [
      `
        if (true) {
          console.log('foo');
        }
      `
    ],
    incorrect: [
      `
        if (true){
          console.log('foo');
        }
      `
    ]
  },
  {
    rule: '@stylistic/space-before-function-paren',
    correct: [
      `
        function foo() {
          console.log('foo');
        }
      `
    ],
    incorrect: [
      `
        function foo () {
          console.log('foo');
        }
      `
    ]
  },
  {
    rule: '@stylistic/space-in-parens',
    correct: [
      `
        foo('bar');
      `
    ],
    incorrect: [
      `
        foo( 'bar' );
      `
    ]
  },
  {
    rule: '@stylistic/space-infix-ops',
    correct: [
      `
        foo + bar;
      `
    ],
    incorrect: [
      `
        foo+bar;
      `
    ]
  },
  {
    rule: '@stylistic/space-unary-ops',
    correct: [
      `
        typeof !foo;
      `
    ],
    incorrect: [
      `
        typeof!foo;
      `
    ]
  },
  {
    rule: '@stylistic/spaced-comment',
    correct: [
      `
        // Foo
      `
    ],
    incorrect: [
      `
        //Foo
      `
    ]
  },
  {
    rule: '@stylistic/template-curly-spacing',
    correct: [
      `
        const foo = \`Hello, \${bar}!\`;
      `
    ],
    incorrect: [
      `
        const foo = \`Hello, \${ bar }!\`;
      `
    ]
  },
  {
    rule: '@stylistic/wrap-iife',
    correct: [
      `
        (function() {
          console.log('foo');
        })();
      `
    ],
    incorrect: [
      `
        (function() {
          console.log('foo');
        }());
      `
    ]
  },
  {
    rule: 'accessor-pairs',
    correct: [
      `
        const o = {
          set a(value) {
            this.val = value;
          },
          get a() {
            return this.val;
          }
        };
      `
    ],
    incorrect: [
      `
        const o = {
          set a(value) {
            this.val = value;
          }
        };
      `
    ]
  },
  {
    rule: 'array-bracket-spacing',
    correct: [
      `
        const arr = ['foo', 'bar', 'baz'];
      `
    ],
    incorrect: [
      `
        const arr = ['foo', 'bar' ];
      `,
      `
        const arr = [ 'foo',
          'bar'
        ];
      `
    ]
  },
  {
    rule: 'arrow-parens',
    correct: [
      `
        const foo = bar => {};
      `,
      `
        const foo = (bar, baz) => {};
      `
    ],
    incorrect: [
      `
        const foo = (bar) => {};
      `
    ]
  },
  {
    rule: 'arrow-spacing',
    correct: [
      `
        const foo = bar => {};
      `
    ],
    incorrect: [
      `
        const foo = bar=> {};
      `,
      `
        const foo = bar =>{};
      `
    ]
  },
  {
    rule: 'block-scoped-var',
    correct: [
      `
        function foo() {
          const bar = 'baz';
        }
      `
    ],
    incorrect: [
      `
        function foo() {
          if (true) {
            var bar = true;
          }
          
          console.log(bar);
        }
      `
    ]
  },
  {
    rule: 'capitalized-comments',
    correct: [
      `
        // Foo
      `,
      `
        // Foo
        // bar
      `
    ],
    incorrect: [
      `
        // foo
      `
    ]
  },
  {
    rule: 'consistent-this',
    correct: [
      `
        function foo() {
          const self = this;
        }
      `
    ],
    incorrect: [
      `
        function foo() {
          const that = this;
        }
      `
    ]
  },
  {
    rule: 'curly',
    correct: [
      `
        if (true) {
          console.log('foo');
        }
      `
    ],
    incorrect: [
      `
        if (true)
          console.log('foo');
      `
    ]
  },
  {
    rule: 'default-case',
    correct: [
      `
        switch (foo) {
          case 'foo':
            console.log('foo');
            break;
          default:
            console.log('bar');
        }
      `
    ],
    incorrect: [
      `
        switch (foo) {
          case 'foo':
            console.log('foo');
            break;
        }
      `
    ]
  },
  {
    rule: 'dot-notation',
    correct: [
      `
        const foo = bar.baz;
      `
    ],
    incorrect: [
      `
        const foo = bar['baz'];
      `
    ]
  },
  {
    rule: 'eqeqeq',
    correct: [
      `
        if (foo === 'bar') {
          console.log('foo');
        }
      `,
      `
        if (foo !== 'bar') {
          console.log('foo');
        }
      `
    ],
    incorrect: [
      `
        if (foo == 'bar') {
          console.log('foo');
        }
      `,
      `
        if (foo != 'bar') {
          console.log('foo');
        }
      `
    ]
  },
  {
    rule: 'func-style',
    correct: [
      `
        function foo() {
          console.log('foo');
        }
      `,
      `
        const foo = () => {
          console.log('foo');
        };
      `
    ],
    incorrect: [
      `
        const foo = function() {
          console.log('foo');
        };
      `
    ]
  },
  {
    rule: 'id-length',
    correct: [
      `
        const foo = 'bar';
      `,
      `
        const e = 'bar';
      `
    ],
    incorrect: [
      `
        const f = 'bar';
      `
    ]
  },
  {
    rule: 'id-match',
    correct: [
      `
        const _ = 'foo';
      `,
      `
        const fooBar = 'baz';
      `,
      `
        const FOO_BAR = 'baz';
      `,
      `
        class FooBar {};
      `
    ],
    incorrect: [
      `
        const foo_bar = 'baz';
      `
    ]
  },
  {
    rule: 'max-depth',
    correct: [
      `
        if (true) {
          if (true) {
            if (true) {
              if (true) {
                console.log('foo');
              }
            }
          }
        }
      `
    ],
    incorrect: [
      `
        if (true) {
          if (true) {
            if (true) {
              if (true) {
                if (true) {
                  console.log('foo');
                }
              }
            }
          }
        }
      `
    ]
  },
  {
    rule: 'max-params',
    correct: [
      `
        function foo(bar, baz, qux, quux) {
          console.log('foo');
        }
      `
    ],
    incorrect: [
      `
        function foo(bar, baz, qux, quux, quuux) {
          console.log('foo');
        }
      `
    ]
  },
  {
    rule: 'new-cap',
    correct: [
      `
        const foo = new Bar();
      `
    ],
    incorrect: [
      `
        const foo = new bar();
      `
    ]
  },
  {
    rule: 'no-alert',
    incorrect: [
      `
        alert('foo');
      `
    ]
  },
  {
    rule: 'no-array-constructor',
    correct: [
      `
        const arr = [];
      `
    ],
    incorrect: [
      `
        const arr = new Array();
      `
    ]
  },
  {
    rule: 'no-bitwise',
    correct: [
      `
        const foo = bar && baz;
      `
    ],
    incorrect: [
      `
        const foo = bar & baz;
      `
    ]
  },
  {
    rule: 'no-caller',
    incorrect: [
      `
        arguments.caller();
      `,
      `
        arguments.callee();
      `
    ]
  },
  {
    rule: 'no-class-assign',
    correct: [
      `
        class Foo {};
      `
    ],
    incorrect: [
      `
        class Foo {};
        Foo = 'bar';
      `
    ]
  },
  {
    rule: 'no-cond-assign',
    correct: [
      `
        if (foo === 'bar') {
          console.log('foo');
        }
      `
    ],
    incorrect: [
      `
        if (foo = 'bar') {
          console.log('foo');
        }
      `
    ]
  },
  {
    rule: 'no-console',
    incorrect: [
      `
        console.log('foo');
      `
    ]
  },
  {
    rule: 'no-const-assign',
    correct: [
      `
        const foo = 'bar';
      `
    ],
    incorrect: [
      `
        const foo = 'bar';
        foo = 'baz';
      `
    ]
  },
  {
    rule: 'no-constant-condition',
    correct: [
      `
        if (foo === 'bar') {
          console.log('foo');
        }
      `
    ],
    incorrect: [
      `
        if (true) {
          console.log('foo');
        }
      `
    ]
  },
  {
    rule: 'no-div-regex',
    correct: [
      `
        function bar() { return /[=]foo/; }
      `
    ],
    incorrect: [
      `
        function bar() { return /=foo/; }
      `
    ]
  },
  {
    rule: 'no-dupe-class-members',
    correct: [
      `
        class Foo {
          bar() {}
          baz() {}
        }
      `
    ],
    incorrect: [
      `
        class Foo {
          bar() {}
          bar() {}
        }
      `
    ]
  },
  {
    rule: 'no-duplicate-imports',
    correct: [
      `
        import foo from 'foo';
        import bar from 'bar';
      `
    ],
    incorrect: [
      `
        import foo from 'baz';
        import bar from 'baz';
      `
    ]
  },
  {
    rule: 'no-else-return',
    correct: [
      `
        function foo() {
          if (true) {
              return 'foo';
          }

          return 'bar';
        }
      `
    ],
    incorrect: [
      `
        function foo() {
          if (true) {
              return 'foo';
          } else {
              return 'bar';
          }
        }
      `
    ]
  },
  {
    rule: 'no-empty',
    correct: [
      `
        if (true) {
          console.log('foo');
        }
      `
    ],
    incorrect: [
      `
        if (true) {}
      `
    ]
  },
  {
    rule: 'no-eq-null',
    correct: [
      `
        if (foo === null) {
          console.log('foo');
        }
      `
    ],
    incorrect: [
      `
        if (foo == null) {
          console.log('foo');
        }
      `
    ]
  },
  {
    rule: 'no-eval',
    incorrect: [
      `
        eval('foo');
      `
    ]
  },
  {
    rule: 'no-extend-native',
    incorrect: [
      `
        String.prototype.foo = function() {};
      `
    ]
  },
  {
    rule: 'no-extra-bind',
    correct: [
      `
        var foo = function () {
          this.bar();
        }.bind(baz);
      `
    ],
    incorrect: [
      `
        var foo = function () {
          bar();
        }.bind(baz);
      `
    ]
  },
  {
    rule: 'no-global-assign',
    correct: [
      `
        foo = 1
      `
    ],
    incorrect: [
      `
        undefined = 1
      `
    ]
  },
  {
    rule: 'no-implied-eval',
    correct: [
      `
        setTimeout(() => {
          console.log('foo');  
        }, 1000);
      `
    ],
    incorrect: [
      `
        setTimeout('foo', 1000);
      `
    ]
  },
  {
    rule: 'no-inline-comments',
    correct: [
      `
        // Foo
        const foo = 'bar';
      `
    ],
    incorrect: [
      `
        const foo = 'bar'; // Foo
      `
    ]
  },
  {
    rule: 'no-iterator',
    correct: [
      `
        const __iterator__ = function () {};
      `
    ],
    incorrect: [
      `
        foo.__iterator__ = function () {};
      `
    ]
  },
  {
    rule: 'no-labels',
    correct: [
      `
        while (true) {
          break;
        }
      `
    ],
    incorrect: [
      `
        label:
          while(true) {
            break label;
          }
      `
    ]
  },
  {
    rule: 'no-lone-blocks',
    correct: [
      `
        if (true) {
          console.log('foo');
        }
      `
    ],
    incorrect: [
      `
        if (true) {
          {
            console.log('foo');
          }
        }
      `
    ]
  },
  {
    rule: 'no-lonely-if',
    correct: [
      `
        if (foo) {
          console.log('foo');
        } else if (bar) {
          console.log('bar');
        }
      `
    ],
    incorrect: [
      `
        if (foo) {
          console.log('foo');
        } else {
          if (bar) {
            console.log('bar');
          }
        }
      `
    ]
  },
  {
    rule: 'no-loop-func',
    correct: [
      `
        for (let i=0; i; i++) {
          foo();
        }
      `
    ],
    incorrect: [
      `
        var arr = [];
        
        for (var i = 0; i < 5; i++) {
          (function fun () {
            if (arr.includes(fun)) return i;
            else arr.push(fun);
          })();
        }
      `
    ]
  },
  {
    rule: 'no-multi-str',
    correct: [
      `
        const foo = 'foo bar';
      `
    ],
    incorrect: [
      `
        const foo = 'foo \\\n bar';
      `
    ]
  },
  {
    rule: 'no-nested-ternary',
    correct: [
      `
        const foo = foo ? bar : baz;
      `
    ],
    incorrect: [
      `
        const foo = foo ? bar : baz === quux ? quuux : quuuux;
      `
    ]
  },
  {
    rule: 'no-new',
    correct: [
      `
        const foo = new Foo();
      `
    ],
    incorrect: [
      `
        new Foo();
      `
    ]
  },
  {
    rule: 'no-new-func',
    correct: [
      `
        const foo = function () {};
      `
    ],
    incorrect: [
      `
        const foo = new Function();
      `
    ]
  },
  {
    rule: 'no-new-wrappers',
    correct: [
      `
        const string = String('foo');
      `
    ],
    incorrect: [
      `
        const foo = new String('foo');
      `
    ]
  },
  {
    rule: 'no-object-constructor',
    correct: [
      `
        Object("foo");
      `
    ],
    incorrect: [
      `
        Object();
      `
    ]
  },
  {
    rule: 'no-proto',
    correct: [
      `
        const foo = Object.getPrototypeOf(obj);
      `
    ],
    incorrect: [
      `
        var foo = obj.__proto__;
      `
    ]
  },
  {
    rule: 'no-restricted-imports',
    correct: [
      `
        import get from 'lodash/get';
      `
    ],
    incorrect: [
      `
        import { get } from 'lodash';
      `
    ]
  },
  {
    rule: 'no-return-assign',
    correct: [
      `
        function foo() {
          return bar === baz + 2;
        }
      `
    ],
    incorrect: [
      `
        function foo() {
          return bar = baz + 2;
        }
      `
    ]
  },
  {
    rule: 'no-script-url',
    incorrect: [
      `
        location.href = "javascript:void(0)";
      `
    ]
  },
  {
    rule: 'no-self-compare',
    incorrect: [
      `
        if (foo === foo) {
          console.log('foo');
        }
      `
    ]
  },
  {
    rule: 'no-sequences',
    correct: [
      `
        if ((foo(), !!bar));
      `
    ],
    incorrect: [
      `
        if (foo(), !!bar);
      `
    ]
  },
  {
    rule: 'no-shadow-restricted-names',
    incorrect: [
      `
        const undefined = true;
      `
    ]
  },
  {
    rule: 'no-this-before-super',
    correct: [
      `
        class Foo extends Bar {
          constructor() {
            super();
            this.foo = 'bar';
          }
        }
      `
    ],
    incorrect: [
      `
        class Foo extends Bar {
          constructor() {
            this.foo = 'bar';
            super();
          }
        }
      `
    ]
  },
  {
    rule: 'no-throw-literal',
    correct: [
      `
        throw new Error('foo');
      `
    ],
    incorrect: [
      `
        throw 'error';
      `
    ]
  },
  {
    rule: 'no-undef',
    correct: [
      `
        const foo = 'bar';
      `
    ],
    incorrect: [
      `
        foo = 'bar';
      `
    ]
  },
  {
    rule: 'no-undef-init',
    correct: [
      `
        let foo;
      `
    ],
    incorrect: [
      `
        let foo = undefined;
      `
    ]
  },
  {
    rule: 'no-underscore-dangle',
    correct: [
      `
        const foo_bar = 'baz';
      `
    ],
    incorrect: [
      `
        const _foo = 'bar';
      `
    ]
  },
  {
    rule: 'no-unexpected-multiline',
    correct: [
      `
        var foo = bar;
        (1 || 2).baz();
      `
    ],
    incorrect: [
      `
        var foo = bar
        (1 || 2).baz();
      `
    ]
  },
  {
    rule: 'no-unneeded-ternary',
    correct: [
      `
        const foo = bar !== false;
      `
    ],
    incorrect: [
      `
        const foo = bar ? true : false;
      `
    ]
  },
  {
    rule: 'no-unused-expressions',
    correct: [
      `
        const foo = bar();
      `
    ],
    incorrect: [
      `
        {bar};
      `
    ]
  },
  {
    rule: 'no-use-before-define',
    correct: [
      `
        const foo = 10;
        alert(foo);
      `
    ],
    incorrect: [
      `
        alert(foo);
        const foo = 10;
      `
    ]
  },
  {
    rule: 'no-useless-call',
    correct: [
      `
        foo.call(obj, 1, 2, 3);
      `
    ],
    incorrect: [
      `
        foo.call(undefined, 1, 2, 3);
      `
    ]
  },
  {
    rule: 'no-useless-concat',
    correct: [
      `
        const foo = 'foo' + 2;
      `
    ],
    incorrect: [
      `
        const foo = 'foo' + 'bar';
      `
    ]
  },
  {
    rule: 'no-var',
    correct: [
      `
        const foo = 'bar';
      `
    ],
    incorrect: [
      `
        var foo = 'bar';
      `
    ]
  },
  {
    rule: 'no-void',
    correct: [
      `
        const foo = 'bar';
      `
    ],
    incorrect: [
      `
        const foo = void 0;
      `
    ]
  },
  {
    rule: 'no-with',
    correct: [
      `
        const foo = { bar: 'bar' };
        console.log(foo.bar);
      `
    ]
    // Incorrect example is not possible in strict mode
  },
  {
    rule: 'nodePlugin/no-mixed-requires',
    correct: [
      `
        const foo = require('foo');
        const bar = require('bar');
      `
    ],
    incorrect: [
      `
        const foo = require('foo'),
          bar = 0;
      `
    ]
  },
  {
    rule: 'nodePlugin/no-new-require',
    correct: [
      `
        const foo = require('foo');
      `
    ],
    incorrect: [
      `
        const foo = new require('foo');
      `
    ]
  },
  {
    rule: 'nodePlugin/no-process-exit',
    correct: [
      `
        const exit = process.exit;
      `
    ],
    incorrect: [
      `
        process.exit(0);
      `
    ]
  },
  {
    rule: 'object-shorthand',
    correct: [
      `
        const foo = 'bar';
        const obj = { foo };
      `
    ],
    incorrect: [
      `
        const foo = 'bar';
        const obj = { foo: foo };
      `
    ]
  },
  {
    rule: 'one-var',
    correct: [
      `
        const foo = 'bar';
        const bar = 'baz';
      `
    ],
    incorrect: [
      `
        const foo = 'bar',
          bar = 'baz';
      `
    ]
  },
  {
    rule: 'operator-assignment',
    correct: [
      `
        foo += bar;
      `
    ],
    incorrect: [
      `
        foo = foo + bar;
      `
    ]
  },
  {
    rule: 'prefer-arrow-callback',
    correct: [
      `
        foo(a => a);
      `
    ],
    incorrect: [
      `
        foo(function(a) { return a; });
      `
    ]
  },
  {
    rule: 'prefer-const',
    correct: [
      `
        const foo = 'bar';
      `
    ],
    incorrect: [
      `
        let foo = 'bar';
      `
    ]
  },
  {
    rule: 'prefer-spread',
    correct: [
      `
        foo(...args);
      `
    ],
    incorrect: [
      `
        foo.apply(undefined, args);
      `
    ]
  },
  {
    rule: 'prefer-template',
    correct: [
      `
        const foo = \`Hello, \${bar}!\`
      `
    ],
    incorrect: [
      `
        const foo = "Hello, " + name + "!";
      `
    ]
  },
  {
    rule: 'radix',
    correct: [
      `
        const foo = parseInt("071", 10);
      `
    ],
    incorrect: [
      `
        const foo = parseInt("071");
      `
    ]
  },
  {
    rule: 'require-await',
    correct: [
      `
        async function foo() {
          await bar();
        }
      `
    ],
    incorrect: [
      `
        async function foo() {
          bar();
        }
      `
    ]
  },
  {
    rule: 'require-yield',
    correct: [
      `
        function* foo() {
          yield 5;
          return 10;
        }
      `
    ],
    incorrect: [
      `
        function* foo() {
          return 10;
        }
      `
    ]
  },
  {
    rule: 'sort-keys',
    correct: [
      `
        const obj = {
          bar: 'bar',
          foo: 'foo'
        };
      `
    ],
    incorrect: [
      `
        const obj = {
          foo: 'foo',
          bar: 'bar'
        };
      `
    ]
  },
  {
    rule: 'vars-on-top',
    correct: [
      `
        function foo() {
          var bar;
          var baz;

          bar = 1;
          baz = 2;
          console.log(bar, baz);
        }
      `
    ],
    incorrect: [
      `
        function foo() {
          bar = 1;
          var bar;
          baz = 2;
          var baz;

          console.log(bar, baz);
        }
      `
    ]
  },
  {
    rule: 'yoda',
    correct: [
      `
        if (foo === 'foo') {
          console.log('foo');
        }
      `
    ],
    incorrect: [
      `
        if ('foo' === foo) {
          console.log('foo');
        }
      `
    ]
  }
];
