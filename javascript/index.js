$(document).ready(function(){
var valor;
var recebe;
$('input').click(function (){
$(this).css({backgroundColor: 'purple', color: 'white'})

})

$('input').keydown(function (val){
recebe = $(val.target).val()
valor = recebe
if (valor = recebe){
recebe = true
return valor && recebe
}
})

$('button').dblclick(function(){
if (recebe != true){
return alert('Você precisa preencher algum campo do formulário')
}
else{
alert('Formulário enviado, obrigado por participar!.')
$('input').val("")
$('button').attr('disabled', 'true').css({backgroundColor: 'gray'})
}})

$('input').blur(function() {
$(this).css({backgroundColor: 'rgb(224, 224, 224)', color: 'black'}) 
})

$('#produto1').hide()
$('#produto2').hide()
$('#conteudo').hide()
$('#catalogo1 p, #catalogo2 p').hide()



$(window).scroll(function() {
var scroll = $(this).scrollTop();
$('#menu, #menu ul, #menu li').css({
opacity: function(){
var altura = $(this).height(),
opacity = ((altura - scroll) / altura) + 1;
return opacity
}
});
});



$('#conteudo').slideDown(1000).html('<h2>Açai de diversos sabores</h2> <h2 id="saboresDaSemana">Sabores da semana, toda semana novas promoções!</h2> <p>Quem se emociona com "EU TE AMO" é porque nunca ouviu um "VAMOS NO PURO AÇAI?"</p>')
$('#conteudo p, #conteudo h2').hide()
setTimeout(function() {
$('#conteudo p, #conteudo h2').fadeIn(500)
},1000
)

$('#catalogo1 p, #catalogo2 p').show(1500)
$('#produto2').show(2500).html('<img src="imagens/acai2.png">')
$('#produto1').show(2500).html('<img src="imagens/acai1.png">')
$('#menu').show().html(' <ul><li>Produtos</li><a href="index.html"><img src="imagens/logo.png"></a><li>Sobre</li></ul>')


setTimeout(function() {
$('#catalogo1').animate({backgroundColor: 'rgb(126, 0, 158);'},600)
$('#catalogo2').animate({backgroundColor: 'rgb(103, 0, 129)'},600)
},600)
})

$( function() {
$( "input" ).checkboxradio();


})



