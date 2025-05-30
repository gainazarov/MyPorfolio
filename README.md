# Ardasher Gainazarov — Portfolio

![Preview](client/icon.png)

Добро пожаловать в портфолио Ардашера Гайназарова — Fullstack разработчика и продакт-менеджера.

## 🚀 О проекте

Современный одностраничный сайт-портфолио на React + Vite + TypeScript + TailwindCSS. Максимально быстрый, адаптивный, SEO-оптимизированный и готовый к публикации на Vercel.

- **Технологии:** React, Vite, TypeScript, TailwindCSS, Framer Motion, Wouter, EmailJS
- **SEO:** Полная поддержка мета-тегов, Open Graph, Twitter, robots.txt, sitemap.xml, manifest.json
- **Контакты:** Форма обратной связи с отправкой на Email через EmailJS
- **PWA:** manifest.json, favicon, поддержка мобильных устройств
- **Анимации:** Красивые плавные анимации и интерактив

## 📦 Быстрый старт

```bash
# Клонируйте репозиторий
https://github.com/gainazarov/MyPorfolio.git

# Установите зависимости
npm install

# Создайте файл client/.env.local и добавьте ключи:
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_public_key
VITE_GA_ID=your_ga4_id

# Запустите проект в режиме разработки
npm run dev

# Сборка для продакшена
npm run build
```

## 🌐 Деплой на Vercel

- Просто импортируйте репозиторий на [Vercel](https://vercel.com/)
- Укажите root: `./`
- Build Command: `npm run build`
- Output Directory: `dist`
- Добавьте переменные окружения из `.env.local` через UI Vercel
- После деплоя сайт будет доступен по вашему домену (например, https://gainazarov.com)

## 🛠️ Структура проекта

```
client/
  public/           # robots.txt, sitemap.xml, manifest.json, icon.png
  src/              # Исходный код React
    components/     # UI и секции
    hooks/          # Кастомные хуки
    lib/            # Утилиты, данные
    pages/          # Страницы
  index.html        # Главный HTML с SEO-тегами
```

## 📧 Обратная связь

- Email: ardashergainazarov@gmail.com
- Telegram: [@gainazarov_a](https://t.me/gainazarov_a)
- LinkedIn: [Ardasher Gainazarov](https://www.linkedin.com/in/ardasher-gainazarov)
- GitHub: [gainazarov](https://github.com/gainazarov)

---

**© 2025 Ardasher Gainazarov. Все права защищены.**
