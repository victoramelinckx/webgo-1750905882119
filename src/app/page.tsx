
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Tu Tienda Online en 24 Horas" subheadline="Transforma tus ventas con una web rápida y soporte 24/7. Fácil, sin complicaciones y adaptada a ti." cta1="Empieza Ahora" />
<How step1Title="Contáctanos hoy" step1Desc="Inicia digitalización en minutos, fácil y rápido." step2Title="Transformamos tu idea" step2Desc="Web lista en 24 horas, sin complicaciones." step3Title="Despega online" step3Desc="Vende sin parar, soporte 24/7 disponible." />
<Aboutus headline="WebGo: Digitaliza y Crece Rápido" subheadline="Transformamos recomendaciones en ventas online, sin complicaciones ni pérdida de tiempo." beneficiotitulo1="Eficiencia Garantizada" beneficio1="Rapidez que simplifica tu digitalización." beneficiotitulo2="Innovación Constante" beneficio2="Compromiso que supera expectativas." />
<Services heading="Impulsa Tus Ventas Digitales" description="Rapidez, compromiso, innovación para transformar tus recomendaciones en ventas online." services={[{"name":"Diseño Web Rápido","icon":"bolt","description":"Webs de ventas en menos de 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Atención constante para tu tranquilidad."},{"name":"Optimización SEO","icon":"search","description":"Aumenta tu visibilidad con WebGo."},{"name":"Gestión de Contenidos","icon":"file-alt","description":"Actualiza y gestiona sin esfuerzo."},{"name":"Integración de Pago","icon":"credit-card","description":"Facilita transacciones seguras online."},{"name":"Marketing Digital","icon":"chart-line","description":"Estrategias para atraer más clientes."}]} />
<BeforeAndAfter subheadline="Diseños web que transforman y elevan tu presencia digital." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mis ventas rápidamente?","respuesta":"WebGo se especializa en llevar tus ventas al mundo digital de forma rápida y efectiva. Nos encargamos de todo, desde la creación de tu sitio web hasta la gestión de tus ventas online, para que puedas concentrarte en lo que mejor haces: gestionar tu negocio."},{"pregunta":"¿Qué ventajas ofrece WebGo frente a otras empresas similares?","respuesta":"WebGo destaca por su compromiso, rapidez e innovación. Entendemos que no tienes tiempo para gestionar un sitio web, así que lo hacemos por ti. Además, te ofrecemos un servicio a un precio justo de 120, asegurando que obtienes el máximo valor."},{"pregunta":"¿Cómo asegura WebGo que mi negocio seguirá creciendo online?","respuesta":"Nos enfocamos en implementar estrategias de ventas online que funcionan, incluso si solo vendías por recomendación antes. Con WebGo, tendrás una presencia digital que atraerá nuevos clientes y aumentará tus ventas."},{"pregunta":"¿Qué debo hacer si no sé cómo generar ventas online?","respuesta":"No te preocupes, en WebGo entendemos que puedes no estar familiarizado con las ventas online. Nos encargamos de todo el proceso, desde la creación del sitio web hasta la optimización de ventas, para que puedas empezar a ver resultados sin complicaciones."},{"pregunta":"¿Cuánto tiempo tomará ver los resultados tras digitalizar mi negocio con WebGo?","respuesta":"En WebGo nos comprometemos a entregarte resultados rápidamente. Aunque el tiempo puede variar según tu negocio, la mayoría de nuestros clientes comienzan a ver un aumento en sus ventas online en pocas semanas."}]} />
<BookAppointment 
                      heading="Transforma Tu Negocio en Línea" 
                      description="Digitaliza tus ventas con rapidez y compromiso. Descubre la innovación de WebGo por solo 120."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
