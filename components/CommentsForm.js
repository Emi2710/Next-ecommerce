import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
} from '@mui/material';

export default function Form({ _id }) {
  const [formData, setFormData] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setFormData(data)
    try {
      response = await fetch('/api/comments/createComment', {
        method: 'POST',
        body: JSON.stringify(data),
        type: 'application/json',
      })
      setIsSubmitting(false)
      setHasSubmitted(true)
    } catch (err) {
      setFormData(err)
    }
  }

  if (isSubmitting) {
    return <h3>En cours de chargement…</h3>
  }
  if (hasSubmitted) {
    return (
      <>
      <Typography component="h3" variant="h3">
        Merci pour votre commentaire
      </Typography>
      <ul>
          <li>
            Nom: {formData.name}
          </li>
          <li>
            Email: {formData.email}
          </li>
          <li>
            Commentaire: {formData.comment}
          </li>
        </ul>
      </>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="review-form-wrapper"
      disabled
      
    >
      <Typography component="h1" variant="h1">
        Laisser un avis
      </Typography>
      <input {...register('_id')} type="hidden" name="_id" value={_id} />
      
        <TextField
          name="name"
          label="Nom"
          {...register('name', { required: true })}
          placeholder="Nom prénom"
          sx={{marginTop: '15px', }}
        />

        <TextField
          name="email"
          type="email"
          label="Email"
          sx={{marginTop: '15px', }}
          {...register('email', { required: true })}
          placeholder="adresse@gmail.com"
        />

        <Select
          name="rating"
          label="Note sur 5"
          sx={{marginTop: '15px', }}
          placeholder='5'
          {...register('rating', { required: true })} 
          
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>

        
     
      
      
        <textarea
          {...register('comment')}
          name="comment"
          label="Votre message"
          placeholder="Qu'avez pensé du produit ?"
          className="review-textarea"
        ></textarea>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>Ce champs est obligatoire</span>}
      <Button variant="contained" type="submit" fullWidth color="secondary" sx={{marginTop: '15px', }}>
              Envoyer
      </Button>
    </form>
  )
}