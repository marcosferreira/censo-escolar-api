import { CRUD } from '../Utils/index.js';
import { Survey } from './models.js';

export class SurveyController extends CRUD {
  constructor() {
    super(Survey);
  }
}
