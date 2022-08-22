/*create box*/
let box=document.createElement('div');
box.setAttribute("id","box");
document.body.appendChild(box);
/*set box styleing*/ 
box.style.width='250px';
box.style.height='250px'
box.style.backgroundColor='blue';
box.style.border='1px solid black';
box.style.transition='1s';
/** create shapeBox */
let shapeBox=document.createElement('span');
shapeBox.setAttribute('id','shapeBox');
document.body.appendChild(shapeBox);
/** styleing shapeBox */
shapeBox.style.width='200px';
shapeBox.style.height='60px';
shapeBox.style.display='flex';
shapeBox.style.alignItems='center';
shapeBox.style.padding='10px';
shapeBox.style.marginTop='10px';
shapeBox.style.backgroundColor='#eeecec';
/*-create sq button*/
let sq=document.createElement('i');
sq.setAttribute('id','sq');
shapeBox.appendChild(sq);
/** style sq button */
sq.style.width ='50px';
sq.style.height ='50px';
sq.style.backgroundColor ='black';
/*-create cibutton*/
let ci=document.createElement('i');
ci.setAttribute('id','ci');
shapeBox.appendChild(ci);
/** style ci button */
ci.style.width ='50px';
ci.style.height ='50px';
ci.style.height ='50px';
ci.style.backgroundColor ='black';
ci.style.borderRadius ='50%';
/*create color box*/
let cB=document.createElement('span');
cB.setAttribute('id','colorBox')
document.body.appendChild(cB);
/** set color box style */
cB.style.width='200px';
cB.style.height='60px';
cB.style.backgroundColor='#ddd';
cB.style.marginTop='40px';
cB.style.display='flex';
cB.style.alignItems='center';
cB.style.padding='10px';
/** create _blue button */
let c1=document.createElement('i');
c1.setAttribute('id','_blue');
cB.appendChild(c1)
/** set _blue button style */
c1.style.width='50px';
c1.style.height='50px';
c1.style.backgroundColor='blue';
c1.style.borderRadius='50%';
/** create _red button */
let c2=document.createElement('i');
c2.setAttribute('id','_red');
cB.appendChild(c2)
/** set _red button style */
c2.style.width='50px';
c2.style.height='50px';
c2.style.backgroundColor='red';
c2.style.borderRadius='50%';
/** create _green button */
let c3=document.createElement('i');
c3.setAttribute('id','_green');
cB.appendChild(c3)
/** set _green button style */
c3.style.width='50px';
c3.style.height='50px';
c3.style.backgroundColor='#00ffb3';
c3.style.borderRadius='50%';
/* events */
c1.onclick = function(){ box.style.backgroundColor='blue';};
c2.onclick = function(){box.style.backgroundColor='red';};
c3.onclick = function(){box.style.backgroundColor='#00ffb3';};
sq.onclick = function (){box.style.borderRadius='0';};
ci.onclick = function (){box.style.borderRadius='50%';};


