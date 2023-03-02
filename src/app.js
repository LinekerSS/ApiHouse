import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routess';
import path from 'path';

class App
{
    constructor() {
        this.server = express();
        mongoose.set("strictQuery", true)

        mongoose.connect('mongodb+srv://devhouse:devhouse@devhouse.ctzaqgs.mongodb.net/devhouse?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        this.middlewares();
        this.routes();    
    }

    middlewares() {
        this.server.use(cors());

        this.server.use('/files', express.static(path.resolve(__dirname, '..', 'uploads'))) // __dirname significa um caminho absoluto para o diretorio

        this.server.use(express.json())
    }

    routes() {
        this.server.use(routes)
    }
}

export default new App().server