export type ServicePlan = {
  id: string;
  category: "sesiones" | "eventos";
  name: string;
  price: string;
  description: string;
  duration: string;
  features: string[];
  ctaLabel: string;
  contactMessage: string;
  order: number;
  isVisible: boolean;
};

export type UntariffedService = {
  id: string;
  name: string;
  description: string;
  ctaLabel: string;
  contactMessage: string;
};

export const whatsappUrl = (message: string) =>
  `https://wa.me/593939666272?text=${encodeURIComponent(message)}`;

export const sessionPlans: ServicePlan[] = [
  {
    id: "mini",
    category: "sesiones",
    name: "Mini sesión",
    price: "$80",
    description:
      "Una opción breve y precisa para quienes necesitan renovar sus fotografías o crear una pequeña selección de imágenes con un objetivo definido.",
    duration: "Duración de 30 a 45 minutos.",
    features: ["8 fotografías editadas.", "1 locación."],
    ctaLabel: "Consultar mini sesión",
    contactMessage:
      "Hola, Alex. Me interesa la Mini sesión de $80 y quisiera consultar disponibilidad.",
    order: 1,
    isVisible: true,
  },
  {
    id: "estandar",
    category: "sesiones",
    name: "Sesión estándar",
    price: "$120",
    description:
      "Una experiencia más completa para desarrollar diferentes fotografías con mayor variedad de poses, encuadres y cambios de vestuario.",
    duration: "Duración de 1 a 2 horas.",
    features: [
      "20 fotografías editadas.",
      "1 o 2 cambios de ropa.",
      "1 locación.",
    ],
    ctaLabel: "Consultar sesión estándar",
    contactMessage:
      "Hola, Alex. Me interesa la Sesión estándar de $120 y quisiera consultar disponibilidad.",
    order: 2,
    isVisible: true,
  },
  {
    id: "premium",
    category: "sesiones",
    name: "Sesión premium",
    price: "$180",
    description:
      "Pensada para quienes buscan una producción más amplia, con mayor tiempo para explorar distintas locaciones, composiciones y posibilidades visuales.",
    duration: "Hasta 3 horas.",
    features: [
      "35 fotografías editadas.",
      "Varias locaciones cercanas.",
      "Asesoría básica de poses.",
    ],
    ctaLabel: "Consultar sesión premium",
    contactMessage:
      "Hola, Alex. Me interesa la Sesión premium de $180 y quisiera consultar disponibilidad.",
    order: 3,
    isVisible: true,
  },
];

export const eventCoveragePlans: ServicePlan[] = [
  {
    id: "2-horas",
    category: "eventos",
    name: "2 horas",
    price: "$150",
    description:
      "Una cobertura puntual para eventos de corta duración o momentos específicos.",
    duration: "2 horas",
    features: [],
    ctaLabel: "Consultar cobertura de 2 horas",
    contactMessage:
      "Hola, Alex. Me interesa la cobertura de eventos de 2 horas por $150 y quisiera consultar disponibilidad.",
    order: 1,
    isVisible: true,
  },
  {
    id: "4-horas",
    category: "eventos",
    name: "4 horas",
    price: "$250",
    description:
      "Una opción equilibrada para documentar las etapas principales de una celebración o evento.",
    duration: "4 horas",
    features: [],
    ctaLabel: "Consultar cobertura de 4 horas",
    contactMessage:
      "Hola, Alex. Me interesa la cobertura de eventos de 4 horas por $250 y quisiera consultar disponibilidad.",
    order: 2,
    isVisible: true,
  },
  {
    id: "6-horas",
    category: "eventos",
    name: "6 horas",
    price: "$350",
    description:
      "Una cobertura más extensa para acompañar el desarrollo completo de eventos con varias etapas o actividades.",
    duration: "6 horas",
    features: [],
    ctaLabel: "Consultar cobertura de 6 horas",
    contactMessage:
      "Hola, Alex. Me interesa la cobertura de eventos de 6 horas por $350 y quisiera consultar disponibilidad.",
    order: 3,
    isVisible: true,
  },
];

export const additionalHour = {
  name: "Hora adicional",
  price: "$50",
  description:
    "Disponible para ampliar el tiempo de cobertura contratado cuando el evento lo requiera.",
};

export const brandAndContentServices: UntariffedService[] = [
  {
    id: "marca",
    name: "Fotografía para marcas",
    description:
      "Producciones visuales para productos, espacios, equipos y negocios que buscan comunicar su identidad con mayor claridad.",
    ctaLabel: "Solicitar una cotización para marca",
    contactMessage:
      "Hola, Alex. Me interesa solicitar una cotización para fotografía de marca.",
  },
  {
    id: "contenido",
    name: "Contenido para redes",
    description:
      "Fotografías y piezas visuales pensadas para creadores, profesionales, emprendimientos y marcas personales.",
    ctaLabel: "Solicitar una cotización de contenido",
    contactMessage:
      "Hola, Alex. Me interesa solicitar una cotización para contenido visual para redes.",
  },
];

export const servicesGeneralMessage =
  "Hola, Alex. Encontré AYACX Photography y quisiera recibir información sobre sus servicios.";
