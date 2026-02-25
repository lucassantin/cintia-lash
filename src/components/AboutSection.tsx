import { motion } from "framer-motion";
import { Star, Quote, Heart, Award, Gem } from "lucide-react";
import vanessaPortrait from "@/assets/vanessa-portrait.jpg";

const testimonials = [
  {
    name: "Carolina M.",
    text: "Vanessa transformou completamente meu olhar! Acordo me sentindo linda todos os dias.",
    rating: 5,
  },
  {
    name: "Juliana S.",
    text: "Profissional incrível! As extensões ficaram super naturais e duradouras.",
    rating: 5,
  },
  {
    name: "Amanda L.",
    text: "Melhor investimento que fiz em mim. Atendimento impecável e resultado perfeito!",
    rating: 5,
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-sand/50 rounded-full blur-3xl -translate-x-1/2" />
      
      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-gold/20 to-primary/20 rounded-3xl blur-xl" />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-gold/30 rounded-2xl" />
              
              <img
                src={vanessaPortrait}
                alt="Vanessa - Lash Designer"
                className="relative rounded-2xl w-full aspect-[4/5] object-cover shadow-elegant"
              />
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-background/90 backdrop-blur-md p-4 rounded-2xl shadow-elegant border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Especialista</p>
                    <p className="text-xs text-muted-foreground">em Visagismo</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-primary mb-4">
              <Gem className="w-4 h-4" />
              Conheça
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold mb-6">
              A Artista por Trás do{" "}
              <span className="text-gradient italic">Olhar</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Com anos de experiência e uma paixão inabalável pela estética, Vanessa não apenas aplica cílios; 
              ela <span className="text-foreground font-medium">desenha olhares</span>. Especialista em visagismo, 
              ela domina a arte de harmonizar a extensão com os traços únicos do seu rosto.
            </p>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">+500 clientes</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-gold fill-gold" />
                <span className="text-sm font-medium">5.0 avaliação</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-serif text-center mb-10">
            O que dizem as <span className="text-gradient">clientes</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elegant p-6"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">{testimonial.name}</span>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
