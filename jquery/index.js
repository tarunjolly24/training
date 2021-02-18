$(document).ready(function(){
    console.log('Hello world');
    $("#btn1").on('click',function(){
        $("#test").addClass('load');

    })

    $("#btn2").on('click',function(){
        $("[class$=-new]").css('color','blue');

    })

    $("#btn3").on('click',function(){
        $("#btn3").attr('disabled','true');

    })


    $("#main > .target").css('font-size','40px');


    $(".replace").replaceWith('<p>Here is some content is replaced.</p>');

    $("#btn4").on('click',function(){
        let addbtn=$("<button id='btn5'>new button</button>");
        $('#divadd').append(addbtn);
    })

    $(document).on('click','#btn5',function(){
        alert("done")
    })

    $("#selection").on('change',function(){
        $("#output").html(this.value);
    })

    $("a").click(function(e){
         e.preventDefault();
    })

    $("#parent").on('click',function(e){
        e.stopPropagation();

        alert("parent");
    })

    $("#child").on('click',function(e){
        e.stopPropagation();
        alert("child");
    })
    let hei=0;
    $("#btn6").on('click',function(){
        $('div').each(function(){
            if(hei<$(this).height()) hei=$(this).height();
        })

        console.log(hei);
    })

    $("#btn7").on('click',function(){
        $("table td").each(function(){
            console.log($(this).html())

            if($(this).html()>10)
            $(this).css('background-color','gray');
        })
    })

    $("#btn8").click(function() {
        // data path
            $.ajax({url: "https://jsonplaceholder.typicode.com/posts", async: false, 
            success: function(result) {
         // get Result
                console.log(result);
            }});
        });
        // $("button").click(function()
        // {
       
        //      $.ajax({url:"hello.html",async:'true',dataType:'text',type:'DELETE',success:functi
    
    // $(".btn").click(function(){
    //     console.log($($(this)[0].parentElement)[0].parentElement);
    //     let tobedeleted=$($(this)[0].parentElement)[0].parentElement;
    //         $.ajax({url: "https://jsonplaceholder.typicode.com/posts/", async: false, 
    //         success: function(result) {
    //      // get Result
    //     //  console.log(result);
    //      tobedeleted.remove();
         
    //             // console.log(($($(this)[0].parentElement)[0].parentElement));
    //         }});  
        
    // })

    // $(".btn").click(function(){
    //     console.log($($(this)[0].parentElement)[0].parentElement);
    //     let tobedeleted=$($(this)[0].parentElement)[0].parentElement;
    //         $.ajax({url: "https://reqres.in/api/users/2",type:'DELETE', async: false, 
    //         success: function(result) {
    //      // get Result
    //     //  console.log(result);
    //      tobedeleted.remove();
         
    //             // console.log(($($(this)[0].parentElement)[0].parentElement));
    //         }});  
        
    // })





    
    // setInterval(function(){
    //     slideshow();
    // },500);


    // $('#btn9').hover(function(){
    //     $(".dropdown").show();
    // })
    $('.dropdown').slideUp();
    $("#btn9").hover(function(){
             $('.dropdown').slideDown(400);

    })
    
        // function(){
        //     $('.dropdown').slideToggle(400);
        // }
    
})

var images=['one.jpeg','two.jpeg','three.jpeg','four.jpeg'];
    var imagetag=$('#main-image');
    let i=0;
    function slideshow(){
        // console.log(1)
        
        imagetag.attr('src',images[i]);
        i++;
        i=i%images.length;

    }