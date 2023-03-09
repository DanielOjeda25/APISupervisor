import React from 'react';
import { Formik, Form, Field } from 'formik';

const optionsRubros = [
  'Electrónica',
  'Hogar',
  'Moda',
  'Deportes',
  'Juguetes',
  'Mascotas',
];

const optionsClientes = [
  'Cliente A',
  'Cliente B',
  'Cliente C',
  'Cliente D',
  'Cliente E',
];

const initialValues = {
  rubros: '',
  clientes: '',
};

const onSubmit = (values) => {
  console.log(values);
};

const Gondolas = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form className="w-full sm:w-full md:w-1/2 lg:w-1/3 mx-auto bg-white p-10 rounded-lg shadow-lg">
          <div className="mb-6 text-center sm:text-left">
            <label htmlFor="rubros" className="block mb-2 text-lg font-medium text-gray-600">
              Rubros
            </label>
            <Field
              as="select"
              name="rubros"
              className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 border border-gray-400 p-2 rounded-lg shadow-lg focus:outline-none focus:border-indigo-500"
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

          <div className="mb-6 text-center sm:text-left">
            <label htmlFor="clientes" className="block mb-2 text-lg font-medium text-gray-600">
              Clientes
            </label>
            <Field
              as="select"
              name="clientes"
              className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 border border-gray-400 p-2 rounded-lg shadow-lg focus:outline-none focus:border-indigo-500"
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

          <button type="submit" className="w-full bg-indigo-500 text-white p-2 rounded-lg shadow-lg hover:bg-indigo-700">
            Enviar
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Gondolas;
