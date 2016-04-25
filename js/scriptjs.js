var a,b,c,x,x1,x2;
alert ('Lets do the math like >> ax2 + bx + c = 0, OK?');

while ( !a  ) a =Number(prompt( "First, enter any numeric value for a >> ax2 + bx + c = 0, where a≠0" ));
if (a==0) {
    a=!a;
}
while ( ! b ) b =Number(prompt( 'Now enter value for "b" >> ax2 + bx + c = 0' ));
while ( ! c ) c =Number(prompt( 'And the last one "c" >> ax2 + bx + c = 0'));

alert('Cool! Now we have:'+ a +'x2+ '+ b+ 'x +'+ c +'= 0, where a≠0, right?');

var D=b*b-4*a*c;

if (D>0) {
    x1=(-b+Math.sqrt(D))/2*a;
    x2=(-b-Math.sqrt(D))/2*a;
    alert('x1='+x1+'; x2='+x2);
}
if (D==0) {
    x=(b/2*a)*-1;
    alert('x='+x);
}
if (D<0) {
    x1=(-b+(-1)*Math.sqrt(D))/2*a;
    x2=(-b-(-1)*Math.sqrt(D))/2*a;
    alert('x1='+x1+'; x2='+x2);
}
    