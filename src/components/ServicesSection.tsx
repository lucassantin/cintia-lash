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
import russo from "@/assets/services/russo.png";
import brasileiro from "@/assets/services/brasileiro.png";
import sobrancelha from "@/assets/services/sobrancelha.png";

interface Service {
  id: number;
  name: string;
  duration: string;
  price: string;
  maintenancePrice?: string;
  image: string;
  description: string;
  cares: string[];
}

const services: Service[] = [
  {
    id: 1,
    name: "Volume Brasileiro",
    duration: "2h00",
    price: "R$ 140,00",
    maintenancePrice: "R$ 100,00",
    image: brasileiro,
    description:
      "Técnica que utiliza fios em formato de Y, proporcionando um volume elegante e marcante sem perder a leveza, com excelente retenção.",
    cares: [
      "Evite água e vapor nas primeiras 24h",
      "Não use produtos oleosos na região dos olhos",
      "Penteie os cílios diariamente com escovinha",
      "Lave diariamente com shampoo neutro (após 24h)",
    ],
  },
  {
    id: 2,
    name: "Volume Egípcio",
    duration: "2h00",
    price: "R$ 160,00",
    maintenancePrice: "R$ 110,00",
    image: russo,
    description:
      "Utiliza fios em formato de W, garantindo um olhar preenchido, mais escurinho e com bastante destaque.",
    cares: [
      "Evite água e vapor nas primeiras 24h",
      "Durma de barriga para cima se possível",
      "Evite esfregar os olhos",
      "Lave diariamente com shampoo neutro",
    ],
  },
  {
    id: 8,
    name: "Design Personalizado",
    duration: "30min",
    price: "R$ 35,00",
    image: sobrancelha,
    description:
      "Mapeamento facial estratégico para encontrar o formato ideal de sobrancelha para o seu tipo de rosto, valorizando seus traços.",
    cares: [
      "Evite exposição solar excessiva no dia",
      "Evite o uso de ácidos ou esfoliantes na região nos primeiros dias",
    ],
  },
  {
    id: 3,
    name: "Volume Fox Eyes",
    duration: "2h00",
    price: "R$ 160,00",
    maintenancePrice: "R$ 110,00",
    image: serviceVolume,
    description:
      "Técnica focada em alongar o olhar, concentrando fios maiores no canto externo para um efeito delineado gatinho super charmoso.",
    cares: [
      "Evite água nas primeiras 24h",
      "Não puxe ou esfregue as extensões",
      "Penteie os cílios diariamente",
      "Higienize adequadamente todos os dias",
    ],
  },
  {
    id: 4,
    name: "Mega Volume",
    duration: "2h30",
    price: "R$ 190,00",
    maintenancePrice: "R$ 140,00",
    image: serviceVolume,
    description:
      "Para quem ama cílios super preenchidos e dramáticos. Fios ultrafinos criando 'fans' densos para um resultado extremamente impactante.",
    cares: [
      "Evite água nas primeiras 24h",
      "Não use máscara de cílios (rímel)",
      "Mantenha a higienização em dia para evitar acúmulos",
      "Penteie delicadamente",
    ],
  },
  {
    id: 5,
    name: "Fio a Fio Clássico",
    duration: "1h30",
    price: "R$ 120,00",
    image: serviceClassico,
    description:
      "A técnica clássica que valoriza a naturalidade. Cada cílio natural recebe uma extensão, criando um efeito de máscara de cílios permanente, perfeito para o dia a dia.",
    cares: [
      "Evite água nas primeiras 24h",
      "Não use produtos oleosos na região dos olhos",
      "Penteie os cílios diariamente com escovinha",
    ],
  },
  {
    id: 6,
    name: "Lash Lifting",
    duration: "1h00",
    price: "R$ 120,00",
    image: serviceLifting,
    description:
      "Realça os cílios naturais através de uma curvatura permanente e tintura. Ideal para quem prefere um look natural sem a necessidade de extensões.",
    cares: [
      "Evite água nas primeiras 24h",
      "Não use curvador de cílios (curvex)",
      "Pode usar máscara de cílios normalmente após 24h",
      "Duração média de 6-8 semanas",
    ],
  },
  {
    id: 7,
    name: "Brow Lamination",
    duration: "1h00",
    price: "R$ 100,00",
    image: serviceLifting,
    description:
      "Técnica que alinha os fios das sobrancelhas, dando um efeito de mais volume, espessura e um preenchimento natural super moderno.",
    cares: [
      "Evite molhar nas primeiras 24h",
      "Penteie os fios diariamente na direção desejada",
      "Mantenha a região hidratada",
    ],
  },
  {
    id: 9,
    name: "Design com Henna",
    duration: "45min",
    price: "R$ 50,00",
    image: serviceClassico,
    description:
      "Design personalizado aliado à aplicação de henna para cobrir falhas, dar volume e realçar o olhar com um sombreamento perfeito.",
    cares: [
      "Evite lavar com sabonete agressivo no primeiro dia",
      "Evite esfregar ou usar demaquilante bifásico na região",
      "A durabilidade depende do tipo de pele (peles oleosas duram menos)",
    ],
  },
  {
    id: 10,
    name: "Epilação Egípcia Buço",
    duration: "15min",
    price: "R$ 20,00",
    image: serviceClassico,
    description:
      "Remoção dos pelos do buço utilizando linha. Uma técnica suave, que não agride a pele e arranca os fios pela raiz, retardando o crescimento.",
    cares: [
      "Use protetor solar diariamente",
      "Evite exposição direta ao sol logo após o procedimento",
      "Não utilize produtos com ácidos na região logo após",
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
        <DialogContent className="sm:max-w-lg bg-background/95 backdrop-blur-xl border-border/50 max-h-[90vh] overflow-y-auto">
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

              {selectedService.maintenancePrice && (
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">Valor da Manutenção:</span>
                  <span className="text-primary font-semibold">{selectedService.maintenancePrice}</span>
                </div>
              )}

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
                href="https://wa.me/554891308875"
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
      <div className="card-elegant overflow-hidden h-full flex flex-col">
        {/* Image */}
        <div className="relative h-56 overflow-hidden flex-shrink-0">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
          
          {/* Price badge */}
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <span className="text-sm font-semibold text-primary">{service.price}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-primary transition-colors">
            {service.name}
          </h3>
          
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
            <Clock className="w-4 h-4" />
            <span>{service.duration}</span>
          </div>

          <div className="mt-auto">
            <button className="text-sm font-medium text-primary hover:underline underline-offset-4 transition-all">
              Ver Detalhes →
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;