export const certificates = {
  title: "Подарочные сертификаты",
  subtitle: "Можно выбрать удобный вариант по количеству заездов.",
  note: "Срок действия сертификата указан на обороте карты.",
  items: [
    { rides: 1, price: "1700 ₽", caption: "1 заезд (10 минут)", image: "/images/certificates/cert-1.jpg" },
    { rides: 2, price: "3400 ₽", caption: "2 заезда (20 минут)", image: "/images/certificates/cert-2.jpg" },
    { rides: 3, price: "5100 ₽", caption: "3 заезда (30 минут)", image: "/images/certificates/cert-3.jpg" },
    { rides: 5, price: "8500 ₽", caption: "5 заездов (50 минут)", image: "/images/certificates/cert-5.jpg" },
  ],
  salePointsTitle: "Точки продаж сертификатов",
  salePoints: [
    {
      name: "Картодром ЛЕМАР",
      address: "п. Овощной, ул. Озерная, 1",
      hours: "График работы уточнять по телефону 8-863-270-66-33",
    },
    {
      name: "Магазин \"ОПТИК ЧУЕВ\"",
      address: "Ростов-на-Дону, ул. Большая Садовая, 61",
      hours: "10:00 – 20:00",
    },
    {
      name: "Магазин \"MARKSTONE\", ТРК \"ГОРИЗОНТ\"",
      address: "Ростов-на-Дону, Нагибина, 32/2",
      hours: "10:00 – 22:00",
    },
    {
      name: "Магазин \"ATRIBUTIKA & CLUB\", ТРК \"МЕГАМАГ\"",
      address: "Ростов-на-Дону, Пойменная, 1",
      hours: "10:00 – 22:00",
    },
  ],
  // исходный макет (может использоваться на странице, если нужно)
  image: "/images/certificates/cert_1.jpg",
} as const;
