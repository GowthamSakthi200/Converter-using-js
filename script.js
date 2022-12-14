function convert()
{
    var usd=document.getElementById('inputusd').value;
    var inr=document.getElementById('inputinr').value;
    if(usd!=0)
    {
        var cinr=(usd * 82.70);
        document.getElementById('inputinr').value=cinr;
    }
    else
    {
        var cusd=(inr / 82.70).toFixed(2);
        document.getElementById('inputusd').value=cusd;
    }
}

function length()
{
    var mtr=document.getElementById('inputmeter').value;
    var km=document.getElementById('inputkilo').value;
    if(mtr!=0)
    {
        var cmtr=(mtr * 0.001);
        document.getElementById('inputkilo').value=cmtr;
    }
    else
    {
        var ckm=(km / 0.001);
        document.getElementById('inputmeter').value=ckm;
    }
}

function weight()
{
    var gram=document.getElementById('inputgram').value;
    var kg=document.getElementById('inputkg').value;
    if(gram!=0)
    {
        var cgram=(gram * 0.001 );
        document.getElementById('inputkg').value=cgram;
    }
    else
    {
        var ckg=( kg / 0.001);
        document.getElementById('inputgram').value=ckg;
    }
}