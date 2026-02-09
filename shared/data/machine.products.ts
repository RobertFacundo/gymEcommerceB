import { Product } from "../types/product.type";

export const machineProducts: Product[] = [
  {
    id: "treadmill-pro-3000",
    category: "machines",
    name: {
      en: "Treadmill Pro 3000",
      es: "Cinta de Correr Pro 3000"
    },
    description: {
      en: "High-performance treadmill with multiple speed levels and incline.",
      es: "Cinta de correr de alto rendimiento con múltiples velocidades e inclinación."
    },
    price: 1299.99,
    image: "/images/products/machines/treadmill-pro-3000.png",
    stock: 4,
    brand: "CardioMax",
    featured: true
  },
  {
    id: "exercise-bike-x100",
    category: "machines",
    name: {
      en: "Exercise Bike X100",
      es: "Bicicleta Fija X100"
    },
    description: {
      en: "Compact stationary bike ideal for cardio and endurance training.",
      es: "Bicicleta fija compacta ideal para entrenamiento cardiovascular y resistencia."
    },
    price: 699.99,
    image: "/images/products/machines/exercise-bike-x100.png",
    stock: 6,
    brand: "CardioMax"
  },
  {
    id: "elliptical-trainer-e500",
    category: "machines",
    name: {
      en: "Elliptical Trainer E500",
      es: "Elíptico E500"
    },
    description: {
      en: "Low-impact elliptical trainer for full body cardio workouts.",
      es: "Entrenador elíptico de bajo impacto para cardio de cuerpo completo."
    },
    price: 999.99,
    image: "/images/products/machines/elliptical-trainer-e500.png",
    stock: 3,
    brand: "FitMotion"
  },
  {
    id: "power-rack-rx1",
    category: "machines",
    name: {
      en: "Power Rack RX1",
      es: "Rack de Potencia RX1"
    },
    description: {
      en: "Heavy-duty power rack for squats, bench press and pull-ups.",
      es: "Rack de potencia reforzado para sentadillas, press de banca y dominadas."
    },
    price: 1199.99,
    image: "/images/products/machines/power-rack-rx1.png",
    stock: 0,
    brand: "IronCore"
  },
  {
    id: "smith-machine-s700",
    category: "machines",
    name: {
      en: "Smith Machine S700",
      es: "Máquina Smith S700"
    },
    description: {
      en: "Guided barbell system for safe and controlled strength training.",
      es: "Sistema de barra guiada para entrenamiento de fuerza seguro y controlado."
    },
    price: 1899.99,
    image: "/images/products/machines/smith-machine-s700.png",
    stock: 1,
    brand: "IronCore"
  },
  {
    id: "leg-press-lp400",
    category: "machines",
    name: {
      en: "Leg Press LP400",
      es: "Prensa de Piernas LP400"
    },
    description: {
      en: "Professional leg press machine for lower body strength.",
      es: "Prensa de piernas profesional para fuerza del tren inferior."
    },
    price: 1599.99,
    image: "/images/products/machines/leg-press-lp400.png",
    stock: 2,
    brand: "PowerLift"
  },
  {
    id: "lat-pulldown-l300",
    category: "machines",
    name: {
      en: "Lat Pulldown L300",
      es: "Polea Alta L300"
    },
    description: {
      en: "Lat pulldown machine for back and upper body workouts.",
      es: "Máquina de polea alta para espalda y tren superior."
    },
    price: 899.99,
    image: "/images/products/machines/lat-pulldown-l300.png",
    stock: 5,
    brand: "PowerLift"
  },
  {
    id: "adjustable-bench-b200",
    category: "machines",
    name: {
      en: "Adjustable Bench B200",
      es: "Banco Ajustable B200"
    },
    description: {
      en: "Adjustable workout bench with multiple incline positions.",
      es: "Banco de entrenamiento ajustable con múltiples posiciones."
    },
    price: 299.99,
    image: "/images/products/machines/adjustable-bench-b200.png",
    stock: 8,
    brand: "FlexGear"
  }
];
