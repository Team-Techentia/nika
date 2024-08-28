import Express from 'express';

const PORT = process.env.PORT

const app = Express();

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
