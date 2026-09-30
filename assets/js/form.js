/* ============================================================
   form.js — обработка формы покупки на лендинге
   Подключается в index.html перед </body>:

     <script src="assets/js/form.js"></script>

   ВАЖНО: не дублируйте этот код inline в HTML — правки в одном
   месте не применятся к другому.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ------------------------------------------
  // 1. Находим форму и поля
  // ------------------------------------------
  var form = document.getElementById('purchaseForm');
  if (!form) {
    console.warn('[form.js] Форма #purchaseForm не найдена — скрипт не запущен.');
    return;
  }

  var buyerName = document.getElementById('buyerName');
  var buyerEmail = document.getElementById('buyerEmail');
  var agreeOferta = document.getElementById('agreeOferta');
  var agreePrivacy = document.getElementById('agreePrivacy');

  if (!buyerName || !buyerEmail || !agreeOferta || !agreePrivacy) {
    console.warn('[form.js] Не все поля формы найдены — скрипт не запущен.');
    return;
  }

  // ------------------------------------------
  // 2. URL платёжной системы.
  //    Замените на реальный ID вашего продукта:
  //      Gumroad:  https://gumroad.com/l/ВАШ-ПРОДУКТ
  //      Boosty:   https://boosty.to/ВАШ-ПРОФИЛЬ
  //      ЮKassa:   ссылка из личного кабинета
  // ------------------------------------------
  var PAYMENT_URL = 'https://gumroad.com/l/ВАШ-ПРОДУКТ';

  // ------------------------------------------
  // 3. Обработчик submit
  // ------------------------------------------
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // 3.1. Валидация Bootstrap
    var isValid = true;
    var fields = [buyerName, buyerEmail, agreeOferta, agreePrivacy];

    fields.forEach(function (el) {
      if (!el.checkValidity()) {
        el.classList.add('is-invalid');
        isValid = false;
      } else {
        el.classList.remove('is-invalid');
      }
    });

    if (!isValid) return;

    // 3.2. Проверка, что URL платёжной системы настроен
    if (PAYMENT_URL.indexOf('ВАШ-ПРОДУКТ') !== -1) {
      console.error(
        '[form.js] PAYMENT_URL не настроен! Замените "ВАШ-ПРОДУКТ" на реальный ID.'
      );
      alert(
        'Извините, оплата временно недоступна.\n' +
        'Напишите, пожалуйста, на course.webstart@gmail.com'
      );
      return;
    }

    // 3.3. Проверка, что URL начинается с http(s)
    if (!/^https?:\/\//i.test(PAYMENT_URL)) {
      console.error('[form.js] PAYMENT_URL должен начинаться с http:// или https://');
      alert('Ошибка конфигурации. Напишите на course.webstart@gmail.com');
      return;
    }

    // 3.4. Сохраняем имя и email в localStorage.
    //      ВНИМАНИЕ: localStorage привязан к origin (домену). После
    //      редиректа на gumroad.com данные НЕ передаются автоматически —
    //      они доступны только на этом сайте. Сохранение полезно для
    //      отладки и повторного заполнения формы при возврате.
    //      Для реальной передачи данных используйте параметры URL —
    //      см. закомментированный вариант ниже.
    try {
      localStorage.setItem('buyerName', buyerName.value.trim());
      localStorage.setItem('buyerEmail', buyerEmail.value.trim());
    } catch (err) {
      // Приватный режим, квота — не критично, продолжаем редирект.
      console.warn('[form.js] Не удалось сохранить данные в localStorage:', err);
    }

    // 3.5. Формируем URL для редиректа.
    //      Простой вариант — только ссылка на продукт:
    var finalUrl = PAYMENT_URL;

    // Рабочий вариант — с передачей email и имени в Gumroad
    // (раскомментируйте, если используете Gumroad и хотите передавать данные):
    // var finalUrl = PAYMENT_URL
    //   + '?email=' + encodeURIComponent(buyerEmail.value.trim())
    //   + '&name='  + encodeURIComponent(buyerName.value.trim());

    // 3.6. Редирект через replace — чтобы кнопка «Назад» не возвращала
    //      пользователя на уже отправленную форму.
    window.location.replace(finalUrl);
  });

});