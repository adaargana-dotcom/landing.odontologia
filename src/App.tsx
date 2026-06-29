/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  MessageCircle, 
  Star,
  Users2,
  Stethoscope,
  Smile
} from "lucide-react";

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  const medicalCoverages = [
    "OSDE", "GALENO", "SWISS MEDICAL", "MEDICUS", "PAMI", "OSECAC"
  ];

  const specialties = [
    { title: "Implantes Dentales", icon: <ShieldCheck className="w-8 h-8" /> },
    { title: "Blanqueamiento dental", icon: <Smile className="w-8 h-8" /> },
    { title: "Estética Dental", icon: <Star className="w-8 h-8" /> },
    { title: "Odontopediatría", icon: <Users2 className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* WhatsApp Float */}
      <a 
        href="https://wa.me/5491155652610" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-transform drop-shadow-lg"
        aria-label="WhatsApp"
        id="whatsapp-float"
      >
        <img 
          src="https://cdn.pixabay.com/photo/2016/08/27/03/07/whatsapp-1623579_640.png" 
          alt="WhatsApp" 
          className="w-16 h-16 object-contain"
          referrerPolicy="no-referrer"
        />
      </a>

      {/* Navigation (Dead End) */}
      <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-40 border-b border-slate-100 h-20">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">G</div>
            <span className="text-xl font-bold font-display text-slate-900">Grispa <span className="text-brand-primary">Odontología</span></span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <a href="tel:+5491155652610" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">
              <Phone className="w-4 h-4" />
              11 5565-2610
            </a>
            <a href="#contact" className="bg-brand-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-md shadow-brand-primary/20 hover:bg-brand-secondary transition-all">
              SOLICITAR TURNO
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="z-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-brand-primary rounded-full text-sm font-bold mb-6">
                <CheckCircle2 className="w-4 h-4" />
                Atención odontológica integral en Buenos Aires
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.1]">
                Vuelve a sonreír con confianza
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                Desde controles infantiles hasta tratamientos para adultos, todo en un solo lugar. Recupera la confianza al sonreír con nuestro equipo especializado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="bg-brand-accent text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-brand-accent/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                  id="hero-cta-primary"
                >
                  QUIERO MI TURNO AHORA
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/5491155652610" 
                  className="bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
                  id="hero-cta-whatsapp"
                >
                  <img 
                    src="https://cdn.pixabay.com/photo/2016/08/27/03/07/whatsapp-1623579_640.png" 
                    alt="WhatsApp" 
                    className="w-8 h-8 object-contain"
                    referrerPolicy="no-referrer"
                  />
                  CONSULTAR POR WHATSAPP
                </a>
              </div>
              
              <div className="mt-10 flex items-center gap-4 text-slate-500">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Patient" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-sm">
                  <span className="font-bold text-slate-900">+500 pacientes</span> confían en nosotros cada mes
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square lg:aspect-auto h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
                alt="Clínica Odontológica Moderna" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-6 rounded-2xl border border-white flex gap-4 shadow-xl">
                <div className="flex flex-col gap-1 border-r border-slate-200 pr-4">
                  <span className="text-3xl font-bold text-brand-primary">15+</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Años de Exp.</span>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-xs font-semibold text-slate-900">"Atención cálida, profesional y para todas las edades."</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Background shapes */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-sky-50 rounded-full -z-10 blur-3xl opacity-50" />
        </section>

        {/* Value Propositions */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                ¿Por qué elegir Grispa Odontología?
              </h2>
              <p className="text-lg text-slate-600">
                Creamos experiencias positivas para niños y adultos con atención cercana, profesional y tecnológica.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Atención Humana", 
                  desc: "Un espacio pensado para que vivas una experiencia cómoda y sin miedo.",
                  icon: <Smile className="w-10 h-10 text-brand-primary" />
                },
                { 
                  title: "Tecnología Avanzada", 
                  desc: "Equipamiento de última generación para diagnósticos rápidos y precisos.",
                  icon: <Stethoscope className="w-10 h-10 text-brand-primary" />
                },
                { 
                  title: "Tratamientos a Medida", 
                  desc: "Planes personalizados adaptados a las necesidades y presupuesto de cada paciente.",
                  icon: <ShieldCheck className="w-10 h-10 text-brand-primary" />
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialties Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Nuestras Especialidades</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {specialties.map((spec, i) => (
                <motion.div 
                  key={i}
                  variants={stagger}
                  initial="initial"
                  whileInView="whileInView"
                  className="group relative h-48 rounded-2xl overflow-hidden bg-brand-primary flex flex-col items-center justify-center text-white p-6 transition-all hover:-translate-y-1"
                >
                  <div className="mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                    {spec.icon}
                  </div>
                  <span className="text-lg font-bold text-center leading-tight">{spec.title}</span>
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
            

          </div>
        </section>

        {/* Social Proof / Testimonials */}
        <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/3">
                <h2 className="text-4xl font-bold mb-6">Lo que dicen <br/> nuestros pacientes</h2>
                <div className="flex items-center gap-2 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                  <span className="ml-2 font-bold">4.9/5</span>
                </div>
                <p className="text-slate-400">Basado en más de 200 opiniones verificadas en Google.</p>
              </div>
              
              <div className="flex-1 grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Mariela Gonzalez",
                    text: "Excelente atención para mis hijos. Los consultorios son impecables y el trato de los doctores es muy profesional.",
                    role: "Mamá de 2 niños"
                  },
                  {
                    name: "Jorge Martinez",
                    text: "Me hice un tratamiento de implantes y quedó perfecto. No sentí nada de dolor y la recuperación fue rapidísima.",
                    role: "Paciente de Estética"
                  }
                ].map((testimonial, i) => (
                  <motion.div 
                    key={i}
                    {...fadeIn}
                    className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10"
                  >
                    <p className="text-lg italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-700" />
                      <div>
                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-slate-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Escribinos para solicitar tu turno</h2>
                <p className="text-slate-600">Completá el siguiente formulario y nos pondremos en contacto con vos a la brevedad.</p>
              </div>

              <form className="space-y-6" id="lead-form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-slate-700">Nombre y Apellido</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Ej: Juan Pérez"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="ejemplo@correo.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="whatsapp" className="text-sm font-bold text-slate-700">Teléfono de contacto</label>
                    <input 
                      type="tel" 
                      id="whatsapp" 
                      placeholder="Ej: 11 5565-2610"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="treatment" className="text-sm font-bold text-slate-700">Tratamiento que necesita</label>
                    <select 
                      id="treatment"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none transition-all bg-white"
                      required
                    >
                      <option value="">Seleccionar tratamiento...</option>
                      <option value="implantes">Implantes Dentales</option>
                      <option value="blanqueamiento">Blanqueamiento Dental</option>
                      <option value="estetica">Estética Dental</option>
                      <option value="odontopediatria">Odontopediatría</option>
                      <option value="limpieza">Limpieza Dental</option>
                      <option value="otros">Otros / Consulta General</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand-primary/20 hover:bg-brand-secondary transition-all flex items-center justify-center gap-2"
                >
                  ENVIAR SOLICITUD
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-12 pt-12 border-t border-slate-100 grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-2">
                    <Clock className="w-5 h-5 text-brand-primary" />
                  </div>
                  <p className="text-sm font-bold text-slate-900 leading-tight">Horarios</p>
                  <p className="text-xs text-slate-500">Lunes a Viernes<br/>9 a 19 hs.</p>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-2">
                    <Phone className="w-5 h-5 text-brand-primary" />
                  </div>
                  <p className="text-sm font-bold text-slate-900 leading-tight">Teléfono</p>
                  <p className="text-xs text-slate-500">11 5565-2610</p>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-2">
                    <MapPin className="w-5 h-5 text-brand-primary" />
                  </div>
                  <p className="text-sm font-bold text-slate-900 leading-tight">Dirección</p>
                  <p className="text-xs text-slate-500">Azcuénaga 62 2° piso,<br/>CABA, Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 bg-brand-primary rounded shadow-sm flex items-center justify-center text-white font-bold">G</div>
              <span className="text-lg font-bold font-display text-slate-900 tracking-tight">Grispa <span className="text-brand-primary">Odontología</span></span>
            </div>
            <a 
              href="https://wa.me/5491155652610" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-900 font-bold hover:text-brand-primary transition-colors"
            >
              <img 
                src="https://cdn.pixabay.com/photo/2016/08/27/03/07/whatsapp-1623579_640.png" 
                alt="WhatsApp" 
                className="w-8 h-8 object-contain"
                referrerPolicy="no-referrer"
              />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-8">
            <a href="#" className="hover:text-brand-primary transition-colors">Carillas Dentales</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Limpieza dental</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Blanqueamiento dental</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Radiología</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Escaneos intraorales</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Odontólogos</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Dentistas</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Centro Odontológico</a>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-4 text-[10px] uppercase tracking-widest text-slate-400 font-bold">
            <p>&copy; {new Date().getFullYear()} Grispa Odontología | Desarrollado para tu salud bucal</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="hover:text-slate-600 transition-colors">Política de Privacidad</a>
              <span>|</span>
              <a href="#" className="hover:text-slate-600 transition-colors">Aviso Legal</a>
            </div>
            <p className="mt-8 opacity-50 normal-case font-normal tracking-normal text-xs">
              Disclaimer: Este sitio no es parte del sitio web de Facebook o Facebook Inc. Además, este sitio NO está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

