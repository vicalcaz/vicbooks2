import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../service/firebase';
import '../css/Contacto.css';
import '../css/TextoBrillante.css';
import Swal from 'sweetalert2';

const Contacto = () => {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de email simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      Swal.fire({
        icon: 'warning',
        title: 'Email inválido',
        text: 'Por favor ingrese un email válido.',
        confirmButtonColor: '#3085d6'
      });
      return;
    }

    try {
      await addDoc(collection(db, "contactos"), {
        ...form,
        fecha: serverTimestamp()
      });
      setEnviado(true);
      setForm({ nombre: '', email: '', mensaje: '' });
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        text: 'Tu consulta fue enviada correctamente.',
        confirmButtonColor: '#3085d6'
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al enviar el mensaje. Intente nuevamente.',
        confirmButtonColor: '#d33'
      });
    }
  };

  return (
    <>
      <div className="texto-brillante">
        <h1>Contacto</h1>
      </div>
      <div className="contacto-container">
        {enviado ? (
          <div style={{color: "green", margin: "1rem 0"}}>¡Mensaje enviado correctamente!</div>
        ) : (
          <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              className="form-control"
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              value={form.email}
              onChange={handleChange}
              required
              className="form-control"
            />
            <textarea
              name="mensaje"
              placeholder="Escribe tu consulta..."
              value={form.mensaje}
              onChange={handleChange}
              required
              className="form-control"
              rows={5}
            />
            <button type="submit" className="btn btn-dark">Enviar</button>
          </form>
        )}
      </div>
    </>
  );
};

export default Contacto;