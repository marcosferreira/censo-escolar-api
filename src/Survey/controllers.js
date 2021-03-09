import { CRUD } from '../Utils';
import { Survey } from './models';

export class SurveyController extends CRUD {
  constructor() {
    super(Survey);
  }
}
