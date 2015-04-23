 /**
 *  @description [description]
 *  @author [author]
 *  @version [version]
 *  @copyright [description]
 *  
 */


/**
 * [main description]
 * @type {Object}
 */
Main = (function() {
 
    //var url     = 'http://dev.phantasia.pe/movistar/';
    //var current = $('nav ul li');

    /**
     * [onReady Inicializando la experiencia del usuario ]
     * @return {[type]} [description]
     */
    onReady = function() {

      try{
            $("#form-login").validate({
                rules:{
                    dni:{
                        required:true,
                        number:true
                    }
                },
                messages:{
                    dni:{
                        required:'Ingrese DNI',
                        number:'Formato de DNI inválido'
                    }
                },
                submitHandler: function(form) {
                    //alert('passed validation');
                    window.location.href='index.html';
                    // form.submit();
                }
            }
            );
         }catch(e){
            //alert(e);
         }
      
        $("#cmb-marca").prop("selectedIndex", -1);
        $("#cmb-so").prop("selectedIndex", -1);
        $("#cmb-rango").prop("selectedIndex", -1);

        $(".cmb-filter").selectBoxIt({
            // Hides the first select box option from appearing when the drop down is opened
            showFirstOption: false,
            // Set a custom down arrow icon by adding new CSS class(s)
            downArrowIcon: "icon-arrows",
            showEffect:"fadeIn",
            native: true  
        });

        /*$("#cmb-marca").selectBoxIt({
            showFirstOption: false,
            downArrowIcon: "icon-arrows",
            showEffect:"fadeIn",
            native: true  
        });

        $("#cmb-so").selectBoxIt({
            showFirstOption: false,
            downArrowIcon: "icon-arrows",
            showEffect:"fadeIn",
            native: true  
        });

        $("#cmb-rango").selectBoxIt({
            showFirstOption: false,
            downArrowIcon: "icon-arrows",
            showEffect:"fadeIn",
            native: true  
        });*/

        var $holder = $('.ourHolder');
        var $data = $holder.clone();

        var $filterTypeSo = $('select#cmb-so option').attr('data-so');
        //console.log($filterTypeSo);


        $("#cmb-marca").change(function(){
            alert('chiii');
            var $filterTypeMarca = $(this).find('option:selected').attr('data-marca');
            var $filterTypeSo = $('#cmb-so').find(':selected').attr('class');
            
            //var $filteredData = $data.find('article[data-type-marca=' + $filterTypeMarca + ' data-type-so='+$filterTypeSo+']');
            var $filteredData = $data.find('.equipo[data-type-marca="' + $filterTypeMarca+'"]');
            //var $filteredData = $data.find('article').data('type-marca',$filterTypeMarca);
            //console.log($filteredData);
            $holder.quicksand($filteredData, {
                duration: 50,
                easing: 'easeInOutQuad',
                adjustHeight:'false'
            });
            return false;
        });
        $("#cmb-so").change(function(){
            $(this).find('option').removeClass('activo');
            $(this).find('option:selected').addClass('activo');
            //console.log($(this).find('option'));
            var $filterType = $(this).find('option:selected').attr('data-so');
            var $filteredData = $data.find('article[data-type-so=' + $filterType + ']');
            //console.log($filteredData);
            $holder.quicksand($filteredData, {
                duration: 50,
                easing: 'easeInOutQuad',
                adjustHeight:'false'
            });
            return false;
        });
        $('.show-all').click(function(){
            $("select").prop("selectedIndex", -1);
            var $filteredData = $data.find('article');
            $holder.quicksand($filteredData, {
                  duration: 50,
                  easing: 'easeInOutQuad'
                });
            return false;
        });


    },

    
    /**
     * [publicMethod description]
     * @return {[type]} [description]
     */
    publicMethod = function() {

    },

    /**
     * [privateMethod description]
     * @return {[type]} [description]
     */
    privateMethod = function () {

    },

    /**
     * [mobileAction description]
     * @return {[type]} [description]
     */
    mobileAction = function () {

      //console.log('foo');

    },

    /**
     * [actionParam description]
     * @param  {[type]} param1 [description]
     * @param  {[type]} param2 )             ( [description]
     * @return {[type]}        [description]
     */
    actionParam = function ( param1, param2 ){

    }


     /**
      * Public API
      */
    return {
        onReady : onReady
    }
 
})();
 

/**
 * Execute OnReady
 */
Main.onReady();

