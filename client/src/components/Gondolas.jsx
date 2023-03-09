import React from 'react';
import { Formik, Form, Field } from 'formik';
import {Link} from 'react-router-dom'
import {optionsRubros, optionsClientes} from '../utils/gondolasUtils'


const initialValues = {
  rubros: '',
  clientes: '',
  imagen: null,
};

const onSubmit = (values) => {
  console.log(values);
};
const validate = (values) => {
  const errors = {};
  if (!values.rubros) {
    errors.rubros = 'Este campo es obligatorio';
  }
  if (!values.clientes) {
    errors.clientes = 'Este campo es obligatorio';
  }
  return errors;
};
const Gondolas = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-800">
       <Link to="/" className="absolute top-0 left-0 mt-4 ml-4 text-gray-200">
        &lt; Volver a Home
      </Link>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
        {({ setFieldValue }) => (
          <Form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label
                htmlFor="rubros"
                className="block mb-2 text-lg font-medium text-gray-600"
              >
                Rubros
              </label>
              <Field
                as="select"
                name="rubros"
                className="w-full border border-gray-400 p-2 rounded-lg shadow-lg focus:outline-none focus:border-indigo-500"
              >
                <option value="" disabled defaultValue>
                  Selecciona una opción
                </option>
                {optionsRubros.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </Field>
            </div>

            <div className="mb-6">
              <label
                htmlFor="clientes"
                className="block mb-2 text-lg font-medium text-gray-600"
              >
                Clientes
              </label>
              <Field
                as="select"
                name="clientes"
                className="w-full border border-gray-400 p-2 rounded-lg shadow-lg focus:outline-none focus:border-indigo-500"
              >
                <option value="" disabled defaultValue>
                  Selecciona una opción
                </option>
                {optionsClientes.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </Field>
            </div>

            <div className="mb-6">
              <label
                htmlFor="imagen"
                className="block mb-2 text-lg font-medium text-gray-600"
              >
                Imagen
              </label>
              <input
                id="imagen"
                name="imagen"
                type="file"
                className="w-full border border-gray-400 p-2 rounded-lg shadow-lg focus:outline-none focus:border-indigo-500"
                onChange={(event) => {
                  setFieldValue(
                    'imagen',
                    event.currentTarget.files[0]
                  );
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 text-white p-2 rounded-lg shadow-lg hover:bg-indigo-700"
            >
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Gondolas;
