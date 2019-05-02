
let figure = $ ('.block');
let wind = $('.window');

let inpX = $('.position-x input');
inpX.on('change', function (){
	figure.css('left', this.value * 200 +'px');
})

let inpY = $('.position-y input');
inpY.on('change', function (){
	figure.css('top', this.value * 200 +'px');
})

let inpS = $('.size input');
inpS.on('change', function (){
	figure.css({'width': this.value * 200 +'px', 'height': this.value * 200 +'px'});
})

let inpO = $('.opacity input');
inpO.on('change', function (){
	figure.css('opacity', this.value / 10);
})

let inpSh = $('.shape select');
let btn = $('.btn');

btn.on('click', function (){
	if (inpSh.val() === 'Круг') {
		figure.removeClass().addClass('round');
	}
	else if (inpSh.val() === 'Прямоугольный ромб') {
		figure.removeClass().addClass('rhombus');
	}
	else  {
		figure.removeClass().addClass('block');
	}
})

let inpHx = $('.hex input');

inpHx.on('keyup', function(event){
	if (event.key === "Enter") {
		figure.css('backgroundColor', inpHx.val() );
	}
})

let inpR = $('[name=red]');
let inpG = $('[name=green]');
let inpB = $('[name=blue]');
let inpA = $('[name=alfa]');

function colorChange () {
	wind.css('backgroundColor', 'rgba('+inpR.val()+ ',' + inpG.val() + ','+ inpB.val()+ ',' + inpA.val()/100+')')
}

inpR.on('change', colorChange );

inpG.on('change', colorChange );

inpB.on('change', colorChange );

inpA.on('change', colorChange );

