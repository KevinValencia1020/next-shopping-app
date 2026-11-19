'use client';
import React, { useState } from 'react';
import { CircleCheckBig } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}

const RegisterForm = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Reinicia el mensaje de error
    setIsLoading(true); // Indica que la solicitud esta en curso
    setSuccess(false);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/registro`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(formData),
          credentials: 'include',
        },
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Error al registrar el usuario');
      }

      setSuccess(true);
      setTimeout(() => {
        router.replace('/');
      }, 3000);

      console.log('Usuario registrado con éxito:', data);
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      setError(error instanceof Error ? error.message : 'Error desconocido');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className='w-[90%] flex flex-col gap-5 bg-white rounded-lg shadow-md p-6 max-w-112'>
      {success ? (
        <>
          <div className='flex flex-col items-center justify-center gap-4'>
            <CircleCheckBig className='text-green-500' size={48} />
          </div>
          <h1 className='flex items-center justify-center text-h2 text-primario'>
            ¡Registro exitoso!
          </h1>
        </>
      ) : (
        <>
          <h1 className='flex justify-center text-h1'>
            Crear cuenta de usuario
          </h1>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <label className='flex flex-col gap-1'>
              <span>Nombre</span>
              <input
                type='text'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                maxLength={30}
                required
                className='outline-none border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-primario'
              />
            </label>
            <label className='flex flex-col gap-1'>
              <span>Apellidos</span>
              <input
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                maxLength={30}
                required
                className='outline-none border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-primario'
              />
            </label>
            <label className='flex flex-col gap-1'>
              <span>Correo</span>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={50}
                className='outline-none border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-primario'
              />
            </label>
            <label className='flex flex-col gap-1'>
              <span>Contraseña</span>
              <input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                minLength={8}
                required
                className='outline-none border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-primario'
              />
            </label>
            <label className='flex flex-col gap-1'>
              <span>Teléfono</span>
              <input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                className='outline-none border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-primario'
              />
            </label>
            {error && (
              <p className='transition-colors duration-300 ease-in-out text-red-500'>
                {error}
              </p>
            )}
            <button
              type='submit'
              className='transition-colors duration-300 ease-in-out bg-primario hover:bg-primario-hover text-white font-semibold py-2 rounded-md'
              disabled={isLoading}
            >
              {isLoading ? 'Registrando...' : 'Registrarse'}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default RegisterForm;
