function sendTelegramMessage(form) {
    alert('Дякуємо, очікуйте дзвінка.');
    // Получаем данные из формы
    var name = document.getElementById('form_name').value;

    var phone = document.getElementById('form_phone').value;

    // Формируем сообщение для отправки в Telegram
    const text = `Новый запрос обратного звонка:\n\nИмя: ${name}\nТелефон: ${phone}`;

    // Отправляем сообщение в Telegram бот
    const telegram_token = '5532820427:AAFx59GqAgqkHzyWURUJefzm0YgnNiuyUHI';
    const telegram_chat_id = '-1001928906266';
    const url = `https://api.telegram.org/bot${telegram_token}/sendMessage?chat_id=${telegram_chat_id}&text=${encodeURIComponent(
        text
    )}`;
    fetch(url);
}
