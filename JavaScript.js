function bold()
{
    document.getElementById('bb').setAttribute('style', 'font-weight:bold');
}
function underline()
{
    document.getElementById('bb').setAttribute('style', 'text-decoration:underline');
}
function italic()
{
    document.getElementById('bb').setAttribute('style', 'font-style:italic');
}
function taille()
{
    document.getElementById('bb').style.fontSize=document.getElementById('tle').value
}
function font()
{
    document.getElementById('bb').style.fontFamily=document.getElementById('fmly').textContent
}
