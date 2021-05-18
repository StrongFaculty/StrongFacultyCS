require('dotenv').config();
const express = require('express');
const chalk = require('chalk');
// const webpack = require('webpack');
// const webpackMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');
const historyApiFallback = require('connect-history-api-fallback');
const compression = require('compression');
const cors = require('cors');
const mongoose = require('mongoose');
// const passport = require('passport');
const helmet = require('helmet');
const path = require('path');

const keys = require('./config/keys');
// const webpackConfig = require('./webpack.config');
const routes = require('./routes');

const { database, port, production } = keys;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());
// app.use(passport.initialize());

// Connect to MongoDB
mongoose.set('useCreateIndex', true);

let dbUrl;
if (production) {
	dbUrl = database.urlProduction;
} else {
	dbUrl = database.urlLocal;
}

console.log('dbURL', dbUrl);
mongoose
	.connect(dbUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	})
	.then(() => console.log(`${chalk.green('✓')} ${chalk.blue('MongoDB Connected!')}`))
	.catch((err) => console.log('Martin, it is db connection error'))
	.catch((err) => console.log(err));

// require('./config/passport');
app.use(routes);
app.use(
	historyApiFallback({
		verbose: false
	})
);
app.use(compression());

// // if development
// if (process.env.NODE_ENV !== 'production') {
// 	const compiler = webpack(webpackConfig);

// 	app.use(
// 		historyApiFallback({
// 			verbose: false
// 		})
// 	);

// 	app.use(
// 		webpackMiddleware(compiler, {
// 			publicPath: webpackConfig.output.publicPath,
// 			contentBase: path.resolve(__dirname, '../client/public'),
// 			stats: {
// 				colors: true,
// 				hash: false,
// 				timings: true,
// 				chunks: false,
// 				chunkModules: false,
// 				modules: false
// 			}
// 		})
// 	);

// 	app.use(webpackHotMiddleware(compiler));
// 	app.use(express.static(path.resolve(__dirname, '../dist')));
// } else {
// 	app.use(compression());
// 	app.use(express.static(path.resolve(__dirname, '../dist')));
// 	app.get('*', (req, res) => {
// 		res.sendFile(path.resolve(__dirname, '../dist/index.html'));
// 	});
// }

app.listen(port, () => {
	console.log(
		`${chalk.green('✓')} ${chalk.blue(
			`Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
		)}`
	);
});
