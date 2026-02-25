import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Dói para aplicar?",
    answer:
      "Não! O procedimento é totalmente indolor e relaxante. Muitas clientes até adormecem durante a aplicação. Utilizamos técnicas suaves e materiais de alta qualidade para garantir seu conforto.",
  },
  {
    question: "Quanto tempo dura?",
    answer:
      "A durabilidade varia de acordo com o ciclo natural dos seus cílios, geralmente entre 3 a 4 semanas. Recomendamos manutenções regulares a cada 2-3 semanas para manter o visual sempre impecável.",
  },
  {
    question: "Posso molhar?",
    answer:
      "Após as primeiras 24-48 horas, você pode molhar normalmente! Pode tomar banho, nadar e praticar exercícios. Apenas evite produtos oleosos na região dos olhos e esfregar com força.",
  },
  {
    question: "Quais os cuidados?",
    answer:
      "Os cuidados são simples: evite água nas primeiras 24h, não use produtos à base de óleo nos olhos, penteie os cílios diariamente com a escovinha fornecida e evite dormir de bruços. Seguindo essas dicas, seus cílios ficarão lindos por mais tempo!",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background relative">
      <div className="container-narrow max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-primary mb-4">
            <HelpCircle className="w-4 h-4" />
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elegant px-6 border-none"
              >
                <AccordionTrigger className="text-left font-serif text-lg hover:no-underline hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
