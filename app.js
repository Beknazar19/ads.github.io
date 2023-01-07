

        var val_ask = document.getElementById("select_group_1");
        var val_bid = document.getElementById("select_group_4");
        
        function onChange() {
            var val_ask_num = val_ask.value;
            var val_ask_text = val_ask.options[val_ask.selectedIndex].text;

            var val_bid_num = val_bid.value;
            var val_bid_text = val_bid.options[val_bid.selectedIndex].text;
            


            let searchValue = Math.min(val_ask_num, val_bid_num);
            let selectElement = document.getElementById('select_group_1');
            let options = selectElement.options;

            for (let i = 0; i < options.length; i++) {
                if (options[i].value == searchValue) {
                console.log(options[i].text, document.getElementById('summary').innerHTML);

                document.getElementById('Label_Sum').innerHTML = 'Объем, в ' + options[i].text.substring(0, 3);
                // + options[i].text;

                break;
                } }

        }
        val_ask.onchange = onChange;
        val_bid.onchange = onChange;
        
        onChange();




        //задаем формат для поле объем, чтобы только цифры были
        document.getElementById('summary').addEventListener('input', function() {
            this.value = this.value.replace(/[^\d]/g, '').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
        });

        //задаем формат для поле курс, чтобы только цифры были
        document.getElementById('rate').addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9.]/g, '', '')
            // .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$0 ');
        });
