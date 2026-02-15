export const site = {
  name: "Картодром Lemar",
  city: "Ростов-на-Дону",
  address: "Ростовская область, пос. Овощной, ул.Озёрная 1",
  phone: "8-863-270-66-11",
  email: "lemar-info@yandex.ru",
  hours: {
    weekdays: "Пн–Пт 12:00–22:00",
    weekends: "Выходные и праздничные 11:00–22:00",
    note: "*график работы рекомендуем уточнять по телефону",
  },
  links: {
    telegram: "https://t.me/lemar_karting",
    vk: "https://vk.com/lemarkart",
    timing: "https://lemar.kartchrono.com/",
  },
  documents: {
    privacy: "/docs/politika.pdf",
    cafeMenu: "/docs/cafe/lemar-cafe-menu.pdf",
  },
} as const;
