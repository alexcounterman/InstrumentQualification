import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button } from '@mui/material';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  requirementId: Yup.string().required('Requirement ID is required'),
  description: Yup.string().required('Description is required'),
});

const QualificationForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ requirementId: '', description: '' }}
    validationSchema={schema}
    onSubmit={onSubmit}
  >
    {({ errors, touched }) => (
      <Form>
        <Field
          as={TextField}
          name="requirementId"
          label="Requirement ID"
          error={touched.requirementId && !!errors.requirementId}
          helperText={touched.requirementId && errors.requirementId}
        />
        <Field
          as={TextField}
          name="description"
          label="Description"
          multiline
          rows={4}
          error={touched.description && !!errors.description}
          helperText={touched.description && errors.description}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Form>
    )}
  </Formik>
);

export default QualificationForm;
