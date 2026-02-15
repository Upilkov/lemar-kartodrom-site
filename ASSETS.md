# Куда класть картинки и логотип

Проект на Next.js использует папку `public/`.
Все файлы из `public/` доступны на сайте по пути **без** слова `public`.

## Логотип (в шапке)
- Путь: `public/images/logo.svg`
- Можно заменить на `logo.png`, но тогда нужно изменить путь в `components/header.tsx`.

## Фон в главном блоке на главной странице (Hero)
- Путь: `public/images/hero/hero-bg.jpg`
- Используется на странице `app/page.tsx`.

## Картинка рядом с блоком «Прокат картов» (главная)
- Путь: `public/images/sections/rental.jpg`
- Используется в `app/page.tsx`.

## Страница «Прокат и аренда» — картинки над карточками
- Взрослые: `public/images/rental/adult-karts.jpg`
- Детские: `public/images/rental/kids-karts.jpg`
- Аренда трассы: `public/images/rental/track-rent.jpg`
- Используется в `app/rental/page.tsx`.

## Сертификаты — отдельная картинка для каждого варианта
- 1 заезд: `public/images/certificates/cert-1.jpg`
- 2 заезда: `public/images/certificates/cert-2.jpg`
- 3 заезда: `public/images/certificates/cert-3.jpg`
- 5 заездов: `public/images/certificates/cert-5.jpg`

Дополнительно:
- Постер с вариантами (общий): `public/images/certificates/cert_1.jpg`
- Постер с точками продаж: `public/images/certificates/sale-points.jpg`
