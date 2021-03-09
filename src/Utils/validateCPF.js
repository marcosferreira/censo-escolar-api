/**
 *
 * Recebe como paramentro uma string numérica de 11 dígitos
 * referente ao CPF, após isso retorna true se o CPF for válico,
 * caso contrário retorna false.
 *
 * @param {String} strCPF
 * Paramento que recebe 11 digitos numérico do tipo string
 */
export function validateCPF(strCPF) {
  // REFERÊNCIA DO CÓDIGO: https://www.devmedia.com.br/validar-cpf-com-javascript/23916
  let sum;
  let remainder;

  sum = 0;
  if (strCPF == '00000000000') {
    return false;
  }
  for (let i = 1; i <= 9; i++) {
    sum = sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder == 10 || remainder == 11) {
    remainder = 0;
  }
  if (remainder != parseInt(strCPF.substring(9, 10))) {
    return false;
  }
  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = sum + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder == 10 || remainder == 11) {
    remainder = 0;
  }
  if (remainder != parseInt(strCPF.substring(10, 11))) {
    return false;
  }
  return true;
}

/**
 * Converte a data para o padrão americano EX: de dd/mm/aaaa para aaaa-mm-dd
 * Necssário porque o JavaScript só entend o padrão americano.
 *
 * @param {String} date
 * Recebe a data no tipo String
 *
 */
export function formatDateUSA(date) {
  return date.split('/').reverse().join('-');
}

/**
 *
 * Geralmente só será necessário se o CPF vir neste formato: 000.000.000-00,
 * esta função remove os caracteres "." e "-" retornando o CPF limpo
 * para só então ser possível usar a função
 *
 * @function validateCPF() - Deve ser utilizada com os dados retornado por esta função CleansCPF()
 *
 * @param {String} cpf
 * Recebe uma String no formato (000.000.000-00)
 */
export function cleansCPF(cpf) {
  let newCpf = cpf.split('.').join('');
  newCpf = newCpf.split('-').join('');

  return newCpf;
}
