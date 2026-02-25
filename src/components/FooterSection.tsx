import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, MessageCircle, Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contato" className="bg-foreground text-background relative overflow-hidden">
      {/* Map Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground via-transparent to-foreground/90 z-10 pointer-events-none" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.7!2d-48.5!3d-27.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM2JzAwLjAiUyA0OMKwMzAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale opacity-50"
        />
      </div>

      {/* Footer Content */}
      <div className="section-padding pt-12 pb-8">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Vanessa <span className="text-primary">Lash Designer</span>
              </h3>
              <p className="text-background/70 leading-relaxed">
                Transformando olhares e elevando a autoestima de mulheres que merecem se sentir lindas todos os dias.
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://wa.me/554892018071"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    (48) 99201-8071
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    @vanessa.lashdesigner
                  </a>
                </li>
                <li className="flex items-center gap-3 text-background/70">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>Florianópolis, SC</span>
                </li>
              </ul>
            </motion.div>

            {/* Schedule CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-semibold mb-4">Agende Agora</h4>
              <p className="text-background/70 mb-4">
                Transforme seu olhar hoje mesmo. Horários limitados disponíveis.
              </p>
              <a
                href="https://wa.me/554892018071"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Bottom */}
          <div className="border-t border-background/10 pt-8">
            <p className="text-center text-background/50 text-sm flex items-center justify-center gap-1">
              Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> por Vanessa Lash Designer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
