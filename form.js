document.getElementById('purchaseForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const form = e.target;
      const name = document.getElementById('buyerName');
      const email = document.getElementById('buyerEmail');
      const agreeOferta = document.getElementById('agreeOferta');
      const agreePrivacy = document.getElementById('agreePrivacy');

      // Валидация Bootstrap
      let isValid = true;

      [name, email, agreeOferta, agreePrivacy].forEach(function (el) {
        if (!el.checkValidity()) {
          el.classList.add('is-invalid');
          isValid = false;
        } else {
          el.classList.remove('is-invalid');
        }
      });

      if (!isValid) return;

      // Сохраняем данные (можно использовать для отладки)
      localStorage.setItem('buyerName', name.value.trim());
      localStorage.setItem('buyerEmail', email.value.trim());

      // Ссылка на платёжную систему.
      // Замените URL ниже на вашу ссылку Gumroad / Boosty / ЮKassa.
      const paymentUrl = 'https://gumroad.com/l/ВАШ-ПРОДУКТ';

      // Gumroad поддерживает ?email= и ?name= — если используете его,
      // раскомментируйте строку ниже и удалите простой paymentUrl.
      // const paymentUrl = 'https://gumroad.com/l/ВАШ-ПРОДУКТ?email=' +
      //   encodeURIComponent(email.value.trim()) + '&name=' +
      //   encodeURIComponent(name.value.trim());

      window.location.href = paymentUrl;
    });