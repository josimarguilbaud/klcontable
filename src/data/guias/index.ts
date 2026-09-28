/** El desarrollo largo de cada guía, por slug. Ver el tipo `GuiaDesarrollo`. */
import type { GuiaDesarrollo } from '../guias';
import { DESARROLLO as EMPRENDEDORES } from './para-emprendedores';
import { DESARROLLO as PYMES } from './para-pymes';
import { DESARROLLO as EXTRANJEROS } from './para-extranjeros';

export const DESARROLLO_GUIAS: Record<string, GuiaDesarrollo> = {
  'para-emprendedores': EMPRENDEDORES,
  'para-pymes': PYMES,
  'para-extranjeros': EXTRANJEROS,
};
