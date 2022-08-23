/**
 * Obtener el formato de moneda Local
 * @param {number} decimal
 * @returns
 */
export function formatCurrency(decimal: number, locale: string = 'es-PE') {
  const symbols = {
    en: 'USD',
    'es-PE': 'PEN',
    'es-ES': 'EUR'
  };

  return new Intl.NumberFormat(
    locale,
    { style: 'currency', currency: symbols[locale] }
  ).format(decimal);
}
