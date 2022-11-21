const listaKart = {
	1:'AceClubs.png',
	2:'AceDiamonds.png',
	3:'AceHearts.png',
	4:'AceSpades.png',
	5:'TwoClubs.png',
	6:'TwoDiamonds.png',
	7:'TwoHearts.png',
	8:'TwoSpades.png',
	9:'ThreeClubs.png',
	10:'ThreeDiamonds.png',
	11:'ThreeHearts.png',
	12:'ThreeSpades.png',
	13:'FourClubs.png',
	14:'FourDiamonds.png',
	15:'FourHearts.png',
	16:'FourSpades.png',
	17:'FiveClubs.png',
	18:'FiveDiamonds.png',
	19:'FiveHearts.png',
	20:'FiveSpades.png',
	21:'SixClubs.png',
	22:'SixDiamonds.png',
	23:'SixHearts.png',
	24:'SixSpades.png',
	25:'SevenClubs.png',
	26:'SevenDiamonds.png',
	27:'SevenHearts.png',
	28:'SevenSpades.png',
	29:'EightClubs.png',
	30:'EightDiamonds.png',
	31:'EightHearts.png',
	32:'EightSpades.png',
	33:'NineClubs.png',
	34:'NineDiamonds.png',
	35:'NineHearts.png',
	36:'NineSpades.png',
	37:'TenClubs.png',
	38:'TenDiamonds.png',
	39:'TenHearts.png',
	40:'TenSpades.png',
	41:'JopekClubs.png',
	42:'JopekDiamonds.png',
	43:'JopekHearts.png',
	44:'JopekSpades.png',
	45:'DamaClubs.png',
	46:'DamaDiamonds.png',
	47:'DamaHearts.png',
	48:'DamaSpades.png',
	49:'KingClubs.png',
	50:'KingDiamonds.png',
	51:'KingHearts.png',
	52:'KingSpades.png'
	};
	
function sprawdz(){
	console.log("sprawdz: Rozpoczynam działanie");
	const info = document.getElementById('info'),
	przeslij = document.getElementById('przeslij');
	
	let ileKart = document.getElementById('iloscKart').value;
	
	if(ileKart>8){
		info.innerHTML="Ilosc kart przekracza 8";przeslij
		przeslij.disabled = true;
	}
	else if(ileKart==0){
		info.innerHTML="Proszę podać ilość kart";
		przeslij.disabled = true;
	}
	else{
		przeslij.disabled = false;
	}
	console.log("sprawdz: Zakończyłem działanie");
}

var iloscKart=0;
let i=0;
function init(){
	console.log("init: Rozpoczynam działanie");
	iloscKart = document.getElementById('iloscKart').value;
	
	if(iloscKart<=8){
	let karty="<div class='child'><img src='Karty/CardBack.png' width='192' height='300' border='0' alt='Card Back' onclick='losujKarty(event)' class='child-img'/></div>";
	document.getElementById('form').innerHTML = "";
	document.getElementById('container').innerHTML=karty.repeat(iloscKart);
	}
	else{
	let karty="";
	document.getElementById('container').innerHTML=karty.repeat(iloscKart);
	}
	while(i<iloscKart){
		document.getElementsByClassName('child-img')[i].setAttribute('id', 'child-img-'+i);
		i++;
	}
	console.log("init: Zakończyłem działanie");
	}

	function losowaLiczba(){
		console.log("losowaLiczba: Losuję liczbę");
		liczba = Math.random()*(52-1)+1;
		return liczba;
	}

	let wybraneKarty=0;
	let uzyteKarty=[''];
	
	function sprawdzPowtorzenia(karta, wybraneKarty)
	{
		console.log("Sprawdzam powtorzenia");
		let powtorzenia=0;
		for(i=0; i<wybraneKarty; i++){
			if(karta==uzyteKarty[i])
			{
				powtorzenia++
				karta = parseInt(losowaLiczba());
				sprawdzPowtorzenia(karta, wybraneKarty);
			}
		}
		console.log("Zakonczyłem sprawdzanie powtorzeń dla karty: "+wybraneKarty);
		console.log("Ilosc powtórzeń: "+powtorzenia);
	}
	
	function losujKarty(event){
		console.log("losujKarty: Rozpoczynam działanie");
		console.log('iloscKart: '+iloscKart);
		let karta = parseInt(losowaLiczba());
		
		uzyteKarty[wybraneKarty]=karta;
		sprawdzPowtorzenia(karta, wybraneKarty);
		
		console.log('karta: '+karta);
		let nazwaKarty = listaKart[karta];
		console.log('nazwaKarty: '+nazwaKarty);
		
		event.currentTarget.setAttribute('src', 'Karty/'+nazwaKarty);
		event.currentTarget.setAttribute('alt', nazwaKarty);
		event.currentTarget.setAttribute('onclick', '');
		
		wybraneKarty++;
		
		a=0;
		if(wybraneKarty==iloscKart){
			while(a<wybraneKarty){
				document.getElementsByClassName('child-img')[a].setAttribute('onclick', '');
				a++;
			}
		}
		
		console.log("losujKarty: Zakończyłem działanie");
	}