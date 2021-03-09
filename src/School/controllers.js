import { CRUD } from '../Utils';
import { School } from './models';

export class SchoolController extends CRUD {
  constructor() {
    super(School);
  }
}
