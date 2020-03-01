import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const extensions = [
    '.js', '.jsx', '.ts', '.tsx',
];

const name = 'RollupTypeScriptBabel';

export default {
    input: './src/index.ts',

    // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
    // https://rollupjs.org/guide/en#external-e-external
    external: [],

    plugins: [
        // Allows node_modules resolution
        resolve({ extensions }),

        // Allow bundling cjs modules. Rollup doesn't understand cjs
        commonjs({
            namedExports: {
                // left-hand side can be an absolute path, a path
                // relative to the current directory, or the name
                // of a module in node_modules
                'prop-types': ['elementType'],
                'react-is': ['ForwardRef'],
                'react': ['forwardRef', 'createElement', 'isValidElement', 'Children', 'cloneElement', 'useRef', 'useEffect', 'useImperativeHandle',
                    'useState', 'memo', 'useCallback', 'useLayoutEffect', 'Fragment', 'useMemo'],
                'react-dom' : ['findDOMNode']
            }
        }),

        // Compile TypeScript/JavaScript files
        babel({ extensions, include: ['src/**/*'] }),
    ],

    output: [{
        file: pkg.main,
        format: 'cjs',
    }, {
        file: pkg.module,
        format: 'es',
    }, {
        file: pkg.browser,
        format: 'iife',
        name,

        // https://rollupjs.org/guide/en#output-globals-g-globals
        globals: {},
    }],
};