import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Rating } from '@mui/material';
import {
  Button,
  TextField,
  Typography,
} from '@mui/material';

export default function Form({ _id }) {
  const [formData, setFormData] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [rating, setRating] = useState(null);
  
  /*const updateRating = (newRating) => {
    setRating(newRating);
    console.log(rating);
}*/

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    setIsSubmitting(true)
    let response
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
      </>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="review-form-wrapper"
      disabled
      
    >
      <Typography component="h4" variant="h4">
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
     
      
      <TextField 
        name="rating"
        type="number"
        label="Note sur 5"
        max="5"
        placeholder='5'
        sx={{marginTop: '15px', }}
        
        {...register('rating', { required: true })} 
      />
        <textarea
          {...register('comment', { required: true })}
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