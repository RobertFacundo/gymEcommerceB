import { Product } from "../types/product.type";

export const supplementsProducts: Product[] = [
  {
    id: "whey-protein-2kg",
    category: "supplements",
    name: {
      en: "Whey Protein 2kg",
      es: "Proteína Whey 2kg"
    },
    description: {
      en: "High-quality whey protein to support muscle growth and recovery.",
      es: "Proteína whey de alta calidad para favorecer el crecimiento y la recuperación muscular."
    },
    price: 59.99,
    image: "/images/products/supplements/whey-protein-2kg.png",
    stock: 20,
    brand: "NutriCore",
    featured: true
  },
  {
    id: "creatine-monohydrate-300g",
    category: "supplements",
    name: {
      en: "Creatine Monohydrate 300g",
      es: "Creatina Monohidratada 300g"
    },
    description: {
      en: "Pure creatine monohydrate for strength and power performance.",
      es: "Creatina monohidratada pura para mejorar fuerza y potencia."
    },
    price: 24.99,
    image: "/images/products/supplements/creatine-monohydrate-300g.png",
    stock: 35,
    brand: "PowerLabs"
  },
  {
    id: "bcaa-2-1-1",
    category: "supplements",
    name: {
      en: "BCAA 2:1:1",
      es: "BCAA 2:1:1"
    },
    description: {
      en: "Branched-chain amino acids to reduce fatigue and improve recovery.",
      es: "Aminoácidos de cadena ramificada para reducir la fatiga y mejorar la recuperación."
    },
    price: 29.99,
    image: "/images/products/supplements/bcaa-2-1-1.png",
    stock: 18,
    brand: "NutriCore"
  },
  {
    id: "pre-workout-extreme",
    category: "supplements",
    name: {
      en: "Pre-Workout Extreme",
      es: "Pre Entreno Extreme"
    },
    description: {
      en: "High-energy pre-workout formula for intense training sessions.",
      es: "Fórmula pre entreno de alta energía para entrenamientos intensos."
    },
    price: 34.99,
    image: "/images/products/supplements/pre-workout-extreme.png",
    stock: 14,
    brand: "XForce"
  },
  {
    id: "mass-gainer-5kg",
    category: "supplements",
    name: {
      en: "Mass Gainer 5kg",
      es: "Ganador de Masa 5kg"
    },
    description: {
      en: "High-calorie mass gainer to support weight and muscle gain.",
      es: "Ganador de masa alto en calorías para aumentar peso y músculo."
    },
    price: 69.99,
    image: "/images/products/supplements/mass-gainer-5kg.png",
    stock: 10,
    brand: "BulkPro"
  },
  {
    id: "omega-3-capsules",
    category: "supplements",
    name: {
      en: "Omega 3 Capsules",
      es: "Cápsulas de Omega 3"
    },
    description: {
      en: "Essential omega 3 fatty acids for heart and joint health.",
      es: "Ácidos grasos omega 3 esenciales para la salud cardiovascular y articular."
    },
    price: 19.99,
    image: "/images/products/supplements/omega-3-capsules.png",
    stock: 0,
    brand: "HealthPlus"
  },
  {
    id: "multivitamin-sport",
    category: "supplements",
    name: {
      en: "Sport Multivitamin",
      es: "Multivitamínico Deportivo"
    },
    description: {
      en: "Complete multivitamin designed for active lifestyles.",
      es: "Multivitamínico completo diseñado para estilos de vida activos."
    },
    price: 17.99,
    image: "/images/products/supplements/multivitamin-sport.png",
    stock: 32,
    brand: "VitaCore"
  },
  {
    id: "collagen-peptides",
    category: "supplements",
    name: {
      en: "Collagen Peptides",
      es: "Péptidos de Colágeno"
    },
    description: {
      en: "Collagen peptides to support joints, skin and connective tissue.",
      es: "Péptidos de colágeno para apoyar articulaciones, piel y tejidos conectivos."
    },
    price: 26.99,
    image: "/images/products/supplements/collagen-peptides.png",
    stock: 16,
    brand: "HealthPlus"
  }
];
