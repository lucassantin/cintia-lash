import { motion } from "framer-motion";
import { GraduationCap, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

interface Course {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  popular?: boolean;
  description: string;
  features: string[];
}

const courses: Course[] = [
  {
    id: 1,
    title: "Especialista em Olhar",
    subtitle: "Sobrancelhas & Epilação",
    price: "R$ 800",
    description: "Ideal para iniciar no mercado da beleza com baixo investimento e retorno rápido.",
    features: [
      "Design de Sobrancelhas Personalizado",
      "Aplicação e Sombreamento com Henna",
      "Epilação Egípcia (Fio/Linha) Facial completa",
      "Biossegurança e Ética Profissional",
      "Certificado de Conclusão",
      "Apostila Completa",
    ],
  },
  {
    id: 2,
    title: "Formação Lash Designer",
    subtitle: "Do Clássico ao Volume",
    price: "R$ 1.500",
    popular: true,
    description: "Domine as técnicas de extensão de cílios mais pedidas e construa uma agenda lotada.",
    features: [
      "Fio a Fio Clássico e Volume Brasileiro",
      "Mapeamento e Visagismo do Olhar",
      "Técnicas de Retenção e Isolamento",
      "Remoção Segura e Manutenção",
      "Certificado de Conclusão",
      "Suporte pós-curso por 30 dias",
    ],
  },
  {
    id: 3,
    title: "Master VIP Completo",
    subtitle: "A Profissional de Elite",
    price: "R$ 2.300",
    description: "O pacote definitivo. Torne-se uma autoridade dominando Cílios, Sobrancelhas e Epilação.",
    features: [
      "Todo o conteúdo dos cursos anteriores",
      "Técnicas Avançadas: Mega Volume e Fox Eyes",
      "Mentoria de Posicionamento e Vendas",
      "Como precificar e atrair clientes",
      "Kit Básico de Materiais Incluso",
      "Acompanhamento VIP por 3 meses",
    ],
  },
];

const CoursesSection = () => {
  return (
    <section id="cursos" className="section-padding relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-primary mb-4">
            <GraduationCap className="w-5 h-5" />
            Cursos Profissionalizantes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold mb-6">
            Transforme sua Paixão em <span className="text-gradient">Profissão</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Aprenda técnicas validadas, ganhe segurança para atender e construa uma carreira lucrativa no mercado da beleza com nossos cursos práticos.
          </p>
        </motion.div>

        {/* Pricing/Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-2xl border bg-background/50 backdrop-blur-sm h-full ${
                course.popular 
                  ? "border-primary shadow-lg shadow-primary/10 md:-translate-y-4" 
                  : "border-border/50 hover:border-primary/50 transition-colors"
              }`}
            >
              {course.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Mais Procurado
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-serif font-semibold mb-1">{course.title}</h3>
                <p className="text-primary text-sm font-medium mb-4">{course.subtitle}</p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold tracking-tight">{course.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed min-h-[60px]">
                  {course.description}
                </p>
              </div>

              <div className="flex-grow">
                <p className="text-sm font-semibold mb-4 text-foreground/90">O que você vai aprender:</p>
                <ul className="space-y-3">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Single Call to Action at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center justify-center text-center max-w-xl mx-auto"
        >
          <p className="text-foreground/80 font-medium mb-6">
            Ficou com dúvida sobre qual é a melhor opção para o seu momento atual?
          </p>
          <a
            href="https://wa.me/554891308875?text=Olá! Gostaria de saber mais sobre os cursos de capacitação."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-lg"
          >
            Falar com Especialista
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;