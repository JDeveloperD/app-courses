import {
  Button,
  FormGroup,
  Input,
  InputMessage,
  Label,
  Checkbox,
  Small,
  MdOutlineAlternateEmail,
  MdOutlineLock
} from '@features/ui';
import Link from 'next/link';

const SignIn = ({ csrfToken }) => {
  return (
    <form
    method="post" action="/api/auth/callback/credentials"
    autoComplete='off'
    className='mt-4'
  >
    <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
    <FormGroup invalid={false}>
      <Input name="email" type="email" />
      <Label>Correo electronico</Label>
      <MdOutlineAlternateEmail />
      {false && (
        <InputMessage
          color="danger">El password es requerido</InputMessage>
      )}
    </FormGroup>
    <FormGroup invalid={false}>
      <Input name="password" type="password" />
      <Label>Contraseña (minimo 8 caracteres)</Label>
      <MdOutlineLock />
      {false && (
        <InputMessage
          color="danger">El password es requerido</InputMessage>
      )}
    </FormGroup>
    <div className="d-flex justify-content-between mt-4">
      <Label>
        <Checkbox type="checkbox" className='me-2' />
        <Small color='gray'>Recordar contraseña</Small>
      </Label>
      <Link href="/auth/credentials-signin">
        <a>
          <Small color='primary'>¿Olvidaste la contraseña?</Small>
        </a>
      </Link>
    </div>
    <Button
      block
      className='mt-4'
      variant='filled'
      color='secondary'
      type="submit">Iniciar sesion</Button>
  </form>
  );
};

export default SignIn;
