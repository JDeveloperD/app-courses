const routesPage = {
  home: '/',
  agroClub: {
    index: '/agro-club'
  },
  auth: {
    signIn: '/auth/iniciar-sesion',
    register: '/auth/registro',
    passwordRecovery: '/auth/recuperar-contrasena'
  },
  blog: {
    index: '/blog'
  },
  contact: {
    index: '/contacto'
  },
  courses: {
    index: '/cursos',
    free: '/cursos/gratis',
    new: '/cursos/nuevos',
    offer: '/cursos/ofertas',
    online: '/cursos/online',
    detail: (slug: string) => `/cursos/${slug}`
  },
  instructor: {
    index: '/especialistas'
  },
  memberships: {
    index: '/membresias'
  },
  user: {
    account: '/cuenta'
  }
};

export default routesPage;
