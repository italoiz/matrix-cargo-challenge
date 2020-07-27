import '#/config/env';
import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('success'));
app.listen(3000, () => console.log('Listen on port %d', 3000)); // eslint-disable-line
