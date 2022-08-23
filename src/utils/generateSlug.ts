/**
 * Función para generar slug de url
 * @param {any} id - id
 * @param {string} text - texto a parsear
 *
 * @returns {string}
 */
export function generateSlug(id: any, text: string): string {
  let str = text.toLowerCase();
  str = str.replace(/[-[\]{}()´`*+?.,\\^$|#\s]/g, ' ').trim();

  const characters = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
  const replace = 'aaaaaeeeeiiiioooouuuunc------';

  for (let i = 0; i < characters.length; i++) {
    str = str.replace(new RegExp(characters.charAt(i), 'g'), replace.charAt(i));
  }

  str = str.replace(/[^a-zA-Z0-9]/g, '-');
  str = str.replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  return `${id}-${str}`;
}

export function getIdFromSlug(slug: string): number {
  const partials = slug.split('-');

  return Number(partials[0]);
}
