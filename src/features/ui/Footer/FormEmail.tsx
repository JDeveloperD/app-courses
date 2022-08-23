import { FormGroup, Input, InputMessage, Label, FiSend } from '@features/ui';

const FormEmail = ({ ...props }) => {
  return (
    <form>
      <FormGroup invalid={false}>
        <Input name="email" type="email" />
        <Label>Correo electronico</Label>
        <FiSend />
        {false && (
          <InputMessage
            color="danger">El correo es incorrecto</InputMessage>
        )}
      </FormGroup>
    </form>
  );
};

export default FormEmail;
