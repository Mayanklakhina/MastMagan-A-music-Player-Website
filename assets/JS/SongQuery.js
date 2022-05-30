
      var audio = document.getElementById("audio");
      var img = document.getElementById("theImage");

      document.addEventListener("click", function(e){
         if( e.target === img ){
           audio.src = "/Music/Chor Denge.mp3";
           audio.play();
         }
         else{
           audio.pause();
         }
      },false);


      var talja_audio = document.getElementById("talja-song");
      var talja_img = document.getElementById("talja-image");

      document.addEventListener("click", function(e){
         if( e.target === talja_img ){
           talja_audio.src = "/Music/Talja_1.mp3";
           talja_audio.play();
         }
         else{
           talja_audio.pause();
         }
      },false);

      var chitta_audio = document.getElementById("chitta-song");
      var chitta_img = document.getElementById("chitta-image");

      document.addEventListener("click", function(e){
         if( e.target === chitta_img ){
           chitta_audio.src = "/Music/chitta.mp3";
           chitta_audio.play();
         }
         else{
           chitta_audio.pause();
         }
      },false);


      var haiega_audio = document.getElementById("haige-song");
      var haiega_img = document.getElementById("haige-image");

      document.addEventListener("click", function(e){
         if( e.target === haiega_img ){
           haiega_audio.src = "/Music/haige.mp3";
           haiega_audio.play();
         }
         else{
           haiega_audio.pause();
         }
      },false);

      var love_audio = document.getElementById("love-song");
      var love_img = document.getElementById("love-image");

      document.addEventListener("click", function(e){
         if( e.target === love_img ){
           love_audio.src = "/Music/love.mp3";
           love_audio.play();
         }
         else{
           love_audio.pause();
         }
      },false);