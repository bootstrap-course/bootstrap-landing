# Курс по Bootstrap 5.3 — Лендинг

Одностраничный сайт для продажи онлайн-курса по Bootstrap 5.3.8.

Лендинг знакомит с курсом, показывает программу, отвечает на частые вопросы
и ведёт покупателя к оплате.

---

## 🔗 Демо

> ⚠️ **Перед публикацией:** замените `username` на ваш GitHub-логин.

Открыть лендинг: [username.github.io/bootstrap-course-landing](https://username.github.io/bootstrap-course-landing/)

---

## 📄 Что внутри

- `index.html` — лендинг: hero, программа курса, преимущества,
  скриншоты, отзывы, FAQ и форма покупки.
- `assets/pages/oferta.html` — публичная оферта.
- `assets/pages/privacy.html` — политика конфиденциальности.
- `assets/css/style.css` — стили лендинга и юридических страниц.
- `assets/js/form.js` — обработка формы покупки:
  валидация полей, сохранение имени/email в `localStorage`
  и редирект на платёжную систему.
- `assets/img/favicon/B5.png` — favicon.
- `assets/img/screenshots/` — скриншоты для блока «Как выглядит курс».

### Структура проекта

```
bootstrap-landing/                       ← корень репозитория
├── index.html
├── README.md
└── assets/
    ├── pages/
    │   ├── oferta.html
    │   └── privacy.html
    ├── css/
    │   └── style.css
    ├── js/
    │   └── form.js
    └── img/
        ├── favicon/
        │   └── B5.png
        └── screenshots/
            ├── cards-buttons.jpg
            ├── code-example.jpg
            ├── forms.jpg
            ├── lesson-page.jpg
            ├── lesson-with-code.jpg
            ├── main-page.jpg
            └── modal-example.jpg
```

---

## 🛠 Как запустить локально

1. Склонируйте репозиторий (замените `username` на ваш логин):

   ```bash
   git clone https://github.com/username/bootstrap-course-landing.git
   ```

2. Откройте `index.html` в браузере.

Или используйте **Live Server** в VS Code: правый клик по `index.html` →
**Open with Live Server**.

> ℹ️ Bootstrap подключается через CDN, поэтому при первом открытии
> нужно подключение к интернету. Если нужна работа офлайн — скачайте
> Bootstrap локально и замените ссылки в HTML-файлах.

---

## ⚙️ Настройка перед публикацией

1. **Платёжная система.** Откройте `assets/js/form.js` и замените
   `https://gumroad.com/l/ВАШ-ПРОДУКТ` на реальную ссылку:
   - **Gumroad:** `https://gumroad.com/l/ваш-id`
   - **Boosty:** `https://boosty.to/ваш-профиль`
   - **ЮKassa:** ссылка из личного кабинета.

   Пока URL не заменён, форма показывает сообщение
   «оплата временно недоступна» и **не ведёт** на оплату.

   > 💡 Если используете Gumroad, можно передавать имя и email
   > покупателя через URL — это описано комментарием внутри `form.js`.

2. **Демо-ссылка.** В этом README замените `username` на ваш
   GitHub-логин.

3. **Обновить оферту.** В `assets/pages/oferta.html` замените
   «___» в дате и, при необходимости, ФИО/ИНН исполнителя.

---

## 📦 Что покупает студент

После оплаты студент получает ZIP-архив с курсом:

- 6 модулей, 16 уроков;
- теорию, примеры кода и практические задания;
- финальный проект — сайт-портфолио.

Курс работает офлайн: скачал архив, распаковал, открыл `index.html` —
и учишься без интернета.

---

## 🎨 Технологии

- **Bootstrap 5.3.8** (через CDN)
- **HTML5, CSS3**
- **Vanilla JavaScript** (без фреймворков)

---

## ✉️ Контакты

- Email: [course.webstart@gmail.com](mailto:course.webstart@gmail.com)
- Email (резерв): [course.webstart@mail.ru](mailto:course.webstart@mail.ru)
- Форма обратной связи: [forms.yandex.ru/u/...](https://forms.yandex.ru/u/6a59d6a51f1eb5581e1aad88/)

---

## 📝 Лицензия

Все материалы предназначены для личного использования.
Перепродажа и публичное распространение запрещены.

© 2026 Учебный курс «Основы веб-программирования».