import { CRUD } from '../Utils/index.js';
import { School } from './models.js';

export class SchoolController extends CRUD {
  constructor() {
    super(School);
  }
}
