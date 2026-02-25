import { motion } from "framer-motion";
import { Clock, Sparkles, X } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import serviceClassico from "@/assets/service-classico.jpg";
import serviceVolume from "@/assets/service-volume.jpg";
import serviceLifting from "@/assets/service-lifting.jpg";

interface Service {
  id: number;
  name: string;
  duration: string;
  price: string;
  image: string;
  description: string;
  cares: string[];
}

const services: Service[] = [
  {
    id: 1,
    name: "Fio a Fio Clássico",
    duration: "1h30",
    price: "R$ 150",
    image: serviceClassico,
    description:
      "A técnica clássica que valoriza a naturalidade. Cada cílio natural recebe uma extensão, criando um efeito de máscara de cílios permanente, perfeito para o dia a dia.",
    cares: [
      "Evite água nas primeiras 24h",
      "Não use produtos oleosos na região dos olhos",
      "Penteie os cílios diariamente com escovinha",
      "Manutenção recomendada a cada 3 semanas",
    ],
  },
  {
    id: 2,
    name: "Volume Russo",
    duration: "2h00",
    price: "R$ 200",
    image: serviceVolume,
    description:
      "Para quem deseja um olhar mais marcante e glamouroso. Múltiplas extensões ultrafinas são aplicadas em cada cílio natural, criando volume e densidade impressionantes.",
    cares: [
      "Evite água nas primeiras 48h",
      "Durma de barriga para cima se possível",
      "Evite esfregar os olhos",
      "Manutenção recomendada a cada 2-3 semanas",
    ],
  },
  {
    id: 3,
    name: "Lash Lifting",
    duration: "1h00",
    price: "R$ 120",
    image: serviceLifting,
    description:
      "Realça os cílios naturais através de uma curvatura permanente. Ideal para quem prefere um look natural sem a necessidade de extensões.",
    cares: [
      "Evite água nas primeiras 24h",
      "Não use curvador de cílios",
      "Pode usar máscara de cílios normalmente após 24h",
      "Duração média de 6-8 semanas",
    ],
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="servicos" className="section-padding bg-secondary/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-primary mb-4">
            <Sparkles className="w-4 h-4" />
            Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold">
            Escolha o Seu <span className="text-gradient">Olhar Perfeito</span>
          </h2>
        </motion.div>

        {/* Mobile Carousel / Desktop Grid */}
        <div className="relative">
          {/* Mobile: Horizontal scroll */}
          <div className="flex lg:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>

          {/* Desktop: Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Service Detail Dialog */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="sm:max-w-lg bg-background/95 backdrop-blur-xl border-border/50">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif">{selectedService?.name}</DialogTitle>
            <DialogDescription className="sr-only">
              Detalhes do serviço {selectedService?.name}
            </DialogDescription>
          </DialogHeader>
          
          {selectedService && (
            <div className="space-y-6">
              <img
                src={selectedService.image}
                alt={selectedService.name}
                className="w-full h-48 object-cover rounded-xl"
              />
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{selectedService.duration}</span>
                </div>
                <span className="text-xl font-serif font-semibold text-primary">
                  {selectedService.price}
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {selectedService.description}
              </p>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Cuidados Pós-Procedimento
                </h4>
                <ul className="space-y-2">
                  {selectedService.cares.map((care, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {care}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://wa.me/554892018071"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full flex items-center justify-center gap-2"
              >
                Agendar {selectedService.name}
              </a>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

interface ServiceCardProps {
  service: Service;
  index: number;
  onClick: () => void;
}

const ServiceCard = ({ service, index, onClick }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className="flex-shrink-0 w-72 lg:w-full snap-center cursor-pointer group"
    >
      <div className="card-elegant overflow-hidden h-full">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          
          {/* Price badge */}
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <span className="text-sm font-semibold text-primary">{service.price}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-primary transition-colors">
            {service.name}
          </h3>
          
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
            <Clock className="w-4 h-4" />
            <span>{service.duration}</span>
          </div>

          <button className="text-sm font-medium text-primary hover:underline underline-offset-4 transition-all">
            Ver Detalhes →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;
