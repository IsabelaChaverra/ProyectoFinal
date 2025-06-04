import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa';
import './Contacto.css'; // Asegúrate de tener un archivo CSS para los estilos personalizados

const ContactPage = () => {
  return (
    <div className="bg-light">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="contact-wrapper">
              <div className="row g-0">
                {/* Columna de Información de Contacto */}
                <div className="col-md-5">
                  <div className="contact-info h-100">
                    <h3 className="mb-4">Contáctanos</h3>
                    <p className="mb-4">¡Nos encantaría saber de ti! Si tienes preguntas, comentarios o simplemente deseas conocer más sobre nuestra institución, no dudes en completar el formulario o comunicarte con nosotros a través de los medios que te compartimos a continuación. Estamos aquí para ayudarte.</p>

                    <div className="contact-item">
                      <div className="contact-icon">
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                        <h6 className="section-title">Dirección</h6>
                        <p className="contact-text">Carrera 42 #48-20 Edificio Cesde, Medellín, Antioquia<br />Colombia,medellin</p>
                      </div>
                    </div>

                    <div className="contact-item">
                      <div className="contact-icon">
                        <FaPhone />
                      </div>
                      <div>
                        <h6 className="section-title">Teléfono</h6>
                        <p className="contact-text">+57 6042291100</p>
                      </div>
                    </div>

                    <div className="contact-item">
                      <div className="contact-icon">
                        <FaEnvelope />
                      </div>
                      <div>
                        <h6 className="section-title">Email</h6>
                        <p className="contact-text">contacto@cesde.com</p>
                      </div>
                    </div>

                    <div className="social-links">
                      <h6 className="section-title">Síguenos</h6>
                      <a href="https://www.facebook.com/Cesde/?locale=es_LA" target='_blank' className="social-icon"><FaFacebookF /></a>
                      <a href="https://x.com/i/flow/login?redirect_after_login=%2Fccesde" target='_blank' className="social-icon"><FaTwitter /></a>
                      <a href="https://co.linkedin.com/company/cesde-formaci%C3%B3n-t%C3%A9cnica" target='_blank' className="social-icon"><FaLinkedinIn /></a>
                      <a href="https://www.instagram.com/somoscesde/" target='_blank' className="social-icon"><FaInstagram /></a>
                    </div>
                  </div>
                </div>

                {/* Columna del Formulario */}
                <div className="col-md-7">
                  <div className="contact-form">
                    <h3 className="mb-4 bac">Envíanos un mensaje</h3>
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-4"> {/* Aumenté mb-3 a mb-4 */}
                          <label className="form-label d-block mb-2">Nombre</label> {/* Added d-block and mb-2 */}
                          <input type="text" className="form-control" placeholder="Juan" />
                        </div>
                        <div className="col-md-6 mb-4"> {/* Aumenté mb-3 a mb-4 */}
                          <label className="form-label d-block mb-2">Apellido</label> {/* Added d-block and mb-2 */}
                          <input type="text" className="form-control" placeholder="Pérez" />
                        </div>
                      </div>

                      <div className="mb-4"> {/* Aumenté mb-3 a mb-4 */}
                        <label className="form-label d-block mb-2">Email</label> {/* Added d-block and mb-2 */}
                        <input type="email" className="form-control" placeholder="juan@ejemplo.com" />
                      </div>

                      <div className="mb-4"> {/* Aumenté mb-3 a mb-4 */}
                        <label className="form-label d-block mb-2">Asunto</label> {/* Added d-block and mb-2 */}
                        <input type="text" className="form-control" placeholder="¿Cómo podemos ayudarte?" />
                      </div>

                      <div className="mb-4">
                        <label className="form-label d-block mb-2">Mensaje</label> {/* Added d-block and mb-2 */}
                        <textarea className="form-control" rows="5" placeholder="Escribe tu mensaje aquí..."></textarea>
                      </div>

                      <button type="submit" className="btn btn-submit text-white">Enviar Mensaje</button>
                    </form>

                    <div className="map-container mt-4">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.147394714423!2d-75.572905924734!3d6.244217593709691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442859d833cfa3%3A0xa3fca5c91547777f!2sCesde%20-%20Centro%20de%20Estudios%20Especializados!5e0!3m2!1ses!2sco!4v1717289328477!5m2!1ses!2sco"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;