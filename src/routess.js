const express = require('express');
const routes = express.Router()
import multer from 'multer';
import uploadConfig from './config/upload';
import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';
import DashBoardController from './controllers/DashBoardController';
import ReserveController from './controllers/ReserveController';

const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store);
routes.post('/house', upload.single('thumbnail'), HouseController.store)
routes.get('/house', HouseController.index)
routes.put('/houses/:house_id',upload.single('thumbnail'), HouseController.update)
routes.delete('/houses', HouseController.destroy)

routes.get('/dashboard', DashBoardController.show)
routes.post('/houses/:house_id/reserve', ReserveController.store)
routes.get('/reserve', ReserveController.index)


 
export default routes;  