

let tg2 = window.Telegram.WebApp;
tg2.expand(); //расширяем на все окно

tg2.MainButton.text = "Готово"; //изменяем текст кнопки
tg2.MainButton.setText("Разместить мое объявление"); //изменяем текст кнопки иначе
tg2.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg2.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg2.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры
tg2.MainButton.show();
tg2.MainButton.enable();

var dict = {
   type_web_msg : "from search"
};

tg2.onEvent('mainButtonClicked', function(){
   // tg2.sendData(dictstring);
   tg2.sendData("дать предложение");

   tg2.window.close();
   //при клике на основную кнопку отправляем данные в строковом виде
});
