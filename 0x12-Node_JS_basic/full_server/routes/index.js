import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

function controllerRouting(app, DATABASE) {
  const router = express.Router();
  app.use('/', router);

  router.get('/', (req, res) => {
    AppController.getHomepage(req, res);
  });

  router.get('/students', (req, res) => {
    StudentsController.getAllStudents(req, res, DATABASE);
  });

  router.get('/students/:major', (req, res) => {
    StudentsController.getAllStudentsByMajor(req, res, DATABASE);
  });
}

export default controllerRouting;
