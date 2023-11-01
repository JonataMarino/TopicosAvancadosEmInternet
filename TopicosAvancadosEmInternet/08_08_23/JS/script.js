function revelar2()
{
    document.getElementById('pista2').style.display = 'block';
}
function revelar3()
{
    document.getElementById('pista3').style.display = 'block';

}
function MostrarResultado()
{
    if (document.getElementById('palpite').value == "Eu" ||document.getElementById('palpite').value == "EU" || document.getElementById('palpite').value == "eu")
        document.getElementById('resultado').style.display = 'block';
    else
        alert("você errou!")
    }