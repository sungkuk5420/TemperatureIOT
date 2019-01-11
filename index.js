
     (function($) {

        var resizeTimer; // Set resizeTimer to empty so it resets on page load

        function resizeFunction() {
            // Stuff that should happen on resize
            var $window = $(window);
            var $bgDiv = $('.backgroundDiv');

            // console.log($window.height());
            // console.log($window.width());

            if(($window.height() / $window.width()) < 0.58){
                $bgDiv.removeClass('widthMode').addClass('heightMode');
            }else{
                $bgDiv.removeClass('heightMode').addClass('widthMode');
            }
        };

        // On resize, run the function and reset the timeout
        // 250 is the delay in milliseconds. Change as you see fit.
        $(window).resize(function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(resizeFunction, 250);
        });

        setTimeout(resizeFunction, 100);

    })(jQuery);
    var app = undefined;
    $(document).ready(function(){
        app = new Vue({
            el: '#main',
            data: {
                datas: [
                    {
                       'value' : '24.5',
                       'color' : 'red'
                    },
                    {
                        'value' : '',
                        'color' : ''
                    },
                    {
                        'value' : '',
                        'color' : ''
                    },
                    {
                        'value' : '',
                        'color' : ''
                    },
                    {
                        'value' : '',
                        'color' : ''
                    },
                    {
                        'value' : '',
                        'color' : ''
                    },
                    {
                        'value' : '',
                        'color' : ''
                    },
                    {
                        'value' : '',
                        'color' : ''
                    },
                    {
                        'value' : '',
                        'color' : ''
                    },
                    {
                        'value' : '',
                        'color' : ''
                    },
                    {
                        'value' : '',
                        'color' : ''
                    },
                    {
                        'value' : '',
                        'color' : ''
                    },
                    {
                        'value' : '',
                        'color' : ''
                    },
                    {
                        'value' : '',
                        'color' : ''
                    },{
                        'value' : '',
                        'color' : ''
                    },
                    {
                        'value' : '',
                        'color' : ''
                    },

                ]
            }
            ,
            computed: {
                getClass: function() {
                    console.log(this.color);
                    return this.color;
                }
            }
        });
        changeTemperature();
        setInterval(function() {
            changeTemperature();
        }, 3000);


    });
    function changeTemperature(){
        app._data.datas.forEach(function(item,index){
            if(index != 0){
                var randomTemperature = Math.floor(Math.random() * 7) + 20;
                var randomTemperature2 = Math.floor(Math.random() * 10) + 1;
                var color = randomTemperature < 22 ?  'blue' : (randomTemperature < 24 ? 'green' : 'red');
                app._data.datas[index].value = randomTemperature+'.'+(randomTemperature2>5?5:0);
                app._data.datas[index].color = color;
            }
        });
    }
