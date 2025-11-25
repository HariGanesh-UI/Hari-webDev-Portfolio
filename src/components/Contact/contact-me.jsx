import { Box, TextField, TextareaAutosize, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

export function Contact() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section id="contact">
        <Box sx={{ p:2, boxShadow:3, borderRadius: 2, maxWidth: 650,margin:'auto',justifyContent:'center',alignContent:'center'}} >
      <div className="text-center">
        <h2 className="title3">Get in Touch</h2>
        <p>
          I'm currently open to new opportunities and collaborations. 
          Feel free to send me a message!
        </p>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField fullWidth label="Name" variant="outlined" margin="normal" {...register('name', { required: 'Name is required' })} error={!!errors.name} helperText={errors.name?.message}/>

          <TextField fullWidth label="Email" variant="outlined" margin="normal" type="email" {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email format',},})}error={!!errors.email}helperText={errors.email?.message}/>

          <TextareaAutosize aria-label="Send Message" minRows={10} placeholder="Send Message" style={{ width: 580 }} {...register('message', { required: 'Message is required' })}/>
          {errors.message && (
            <p style={{ color: 'red' }}>{errors.message.message}</p>
          )}

          <Button className="btn btn-primary mt-3" type="submit" variant="contained" color="primary">
            Send Message
          </Button>
        </form>
      </div>
    </Box>
    </section>
  );
}