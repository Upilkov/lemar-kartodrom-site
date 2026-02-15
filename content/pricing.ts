export const rentalPricing = {
  duration: "10 минут",
  adult: {
    title: "Прокат — взрослые",
    kart: "Sodi SR5",
    power: "9.5 л.с.",
    items: [
      { label: "Пн–Пт 12:00–17:00", price: "1200 ₽" },
      { label: "Пн–Пт с 17:00", price: "1500 ₽" },
      { label: "Выходные/праздники", price: "1700 ₽" },
    ],
  },
  kids: {
    title: "Прокат — детские",
    kart: "Sodi LR6 (детский)",
    power: "6.5 л.с.",
    note: "Минимальный рост пилота: 130 см",
    items: [
      { label: "Пн–Пт 12:00–17:00", price: "1000 ₽" },
      { label: "Пн–Пт с 17:00", price: "1200 ₽" },
      { label: "Выходные/праздники", price: "1500 ₽" },
    ],
  },
} as const;

export const trackRental = {
  title: "Аренда трассы",
  items: [
    { label: "Будние дни до 17:00", price: "40 000 ₽ / 6 картов / час", sub: "Доп. карт: 6 000 ₽" },
    { label: "Будние дни после 17:00", price: "50 000 ₽ / 6 картов / час", sub: "Доп. карт: 6 000 ₽" },
    { label: "Выходные/праздники", price: "90 000 ₽ / 9 картов / час", sub: "Доп. карт: 7 000 ₽" },
    { label: "Проведение соревнований", price: "5 000 ₽ / час" },
  ],
} as const;
