function initial_btn_function_textonly(id){

    $('#tool-bar').html('\
    <button class="tool-btn simple-btn" id="bold"><strong>B</strong></button>\
    <button class="tool-btn simple-btn" id="italic"><i>I</i></button>\
    <button class="tool-btn simple-btn" id="underline"><u>U</u></button>\
    <button class="tool-btn simple-btn" id="strikethrough"><del>del</del></button>\
    \
    \
<button class="tool-btn simple-btn" id="justifyLeft"><img src="./align-left.PNG" style="width: 23px; height: 23px; margin: 3px;"></button>\
\
      <button class="tool-btn simple-btn" id="justifyCenter"><img src="./align-center.PNG" style="width: 23px; height: 23px; margin: 3px;">\
</button>\
      <button class="tool-btn simple-btn" id="justifyRight"><img src="./align-right.PNG" style="width: 23px; height: 23px; margin: 3px;"><\
/button>\
\
      <!-- font -->\
      <select class="value-btn" id="fontSize">\
        <option>1</option>\
        <option>2</option>\
        <option>3</option>\
        <option>4</option>\
        <option>5</option>\
        <option>6</option>\
        <option>7</option>\
      </select>\
      <p style="margin: auto 0px; margin-left: 5px; margin-right: 20px;">level</p>\
\
      <p style="margin: auto 0px; margin-right: 5px;"><strong>TEXT</strong></p>\
      <input class="value-btn" id="foreColor" type="color" style="margin-right: 20px;">\
\
      <p style="margin: auto 0px; margin-right: 5px;"><strong>HIGHLIGHT</strong></p>\
      <input class="value-btn" id="backColor" type="color">\
\
      <button id="delete" class="text" style="margin-left: 25px;">刪除</button>\
\
    ')

    document.querySelectorAll('.simple-btn').forEach(function(node){
        node.addEventListener('click', function(){
            document.execCommand(node.id, false, null);
        })
    })

    document.querySelectorAll('.value-btn').forEach(function(node){
        node.addEventListener('change', function(){
            document.execCommand(node.id, false, node.value)
        })
    })
    $('button.text').click(function(){
        $('#'+id).remove();
    })
}

function initial_btn_function_imgonly(id){
    
    $('#tool-bar').html('\
    <!-- align -->\
    <button class="tool-btn img-simple-btn" id="start"><img src="./align-left.PNG" style="width: 23px; height: 23px; margin: 3px;"></button>\
    <button class="tool-btn img-simple-btn" id="center"><img src="./align-center.PNG" style="width: 23px; height: 23px; margin: 3px;"></button>\
    <button class="tool-btn img-simple-btn" id="end"><img src="./align-right.PNG" style="width: 23px; height: 23px; margin: 3px;"></button>\
\
    <!-- font -->\
    <p style="margin: auto 0px; margin-right: 10px;"><strong>WIDTH</strong></p>\
    <input type="number" class="img-value-btn" id="width">\
    <p style="margin: auto 0px; margin-left: 5px; margin-right: 15px; ">px</p>\
\
    <p style="margin: auto 0px; margin-right: 10px;"><strong>HEIGHT</strong></p>\
    <input type="number" class="img-value-btn" id="height">\
    <p style="margin: auto 0px; margin-left: 5px; margin-right: 15px;">px</p>\
    <label class="btn btn-info"><input type="file" id="photo"><div class="photo">上傳圖片</div></label>\
    <button id="delete" class="img">刪除</button>\
    ')

    iid = id;
    if(!iid.includes('only'))
        iid += 'only';
    
    $($('#img_'+iid)).on('load', function(){
        $('#width').val($('#img_'+iid).width());
        $('#height').val($('#img_'+iid).height());
    })

    if($('#img_'+iid).width() && $('#img_'+iid).height()){
        $('#width').val($('#img_'+iid).width());
        $('#height').val($('#img_'+iid).height());
    }
  
    document.querySelectorAll('.img-simple-btn').forEach(function(node){
        node.addEventListener('click', function(){
            if(!$('#'+id).attr('class').includes('block_image'))
                $('#'+id).children().css('justify-content', node.id);
            else
                $('#'+id).css('justify-content', node.id);
            
        })
        
    })

    document.querySelectorAll('.img-value-btn').forEach(function(node){
        node.addEventListener('change', function(){
            if(!$('#'+id).attr('class').includes('block_image'))
                $('#'+id).children().children().children().attr(node.id, node.value);
            else
            $('#'+id).children().children().attr(node.id, node.value);
        })
    })

    $('button.img').click(function(){
        var temp = document.getElementById(id);
        if(temp.classList.contains("image-text") || temp.classList.contains("text-image"))
            temp.parent().remove();
        else 
            temp.remove();
        // $('#'+id).parent().remove();
    })

    var input = document.getElementById("photo");
    var num = id.split('_')[0];

    input.addEventListener("change", function(ev) {
          
      const reader = new FileReader()
    
      reader.addEventListener("load", () => {

        //document.querySelector("#image").src = reader.result
        let parent = document.getElementById(num.toString() + '_image');
        console.log(num.toString() + '_image')
        if(parent)
            parent.innerHTML = '';
        //parent.removeChild(input);
        let image = document.createElement("img");
        image.ondragstart = (ev) =>{
          ev.preventDefault();
        }
        let image_child_l = document.createElement("div");
        
        image_child_l.classList.add("image_block");
    
        image.width = "200";

        

        image.class = "input_img";
        image.id="img_" + num + '_imageonly';
        image.src = reader.result;
        image_child_l.appendChild(image);
        parent.appendChild(image_child_l);

        initial_btn_function_imgonly(id);

        //add_image_event(image_parent);
        })
    
      reader.readAsDataURL(this.files[0]);
      

    })

}




window.onload = function(){

    console.log('A');
    
    

    
}