function ClickUpdateButton() {
    ProcessCategori("vfi");
    ProcessCategori("vsi");
    ProcessCategori("rsi");
    ProcessCategori("ahi");
    ProcessCategori("fhi");
    ProcessCategori("hik");
    ProcessCategori("vki");
    ProcessCategori("gfi");
    ProcessCategori("kei");

    ShowContainer();
    ClearImgContainer();
    CreateImg();
    HideContainer();

    window.scrollTo(0, 0);
}

function ClickClearButton() {
    ClearInput("vfi");
    ClearInput("vsi");
    ClearInput("rsi");
    ClearInput("ahi");
    ClearInput("fhi");
    ClearInput("hik");
    ClearInput("vki");
    ClearInput("gfi");
    ClearInput("kei");
    
    ClearImgContainer();
    HideContainer();
}



function ClearImgContainer() {
    let imgContainer = document.getElementById("imgContainer");

    while (imgContainer.firstChild) {
        imgContainer.removeChild(imgContainer.firstChild);
    }
}



function CreateImg() {
    let profileContainer = document.getElementById("profileContainer");
    let imgContainer = document.getElementById("imgContainer");

    html2canvas(profileContainer).then(function(canvas) {
        imgContainer.appendChild(canvas);
    });
}

function ShowContainer()
{
    document.getElementById("hideContainer").style.display = "block";
}

function HideContainer()
{
    document.getElementById("hideContainer").style.display = "none";
}

function ClearInput(categori)
{
    document.getElementById(categori + "Text").value = "";

    let element = document.getElementById(categori + "Element");
    HideElement(element);
}

function ProcessCategori(categori) {
    let element = document.getElementById(categori + "Element");
    let textValue = document.getElementById(categori + "Text").value; 
    
    ProcessElement(categori, element, textValue)
}

function ProcessElement(categori, element, textValue) {
    HideElement(element);

    let value = GetValue(categori, textValue);

    if (value > 0)
    {
        MoveElement(element, value);
    }
}

function HideElement(element) {
    element.style.visibility = "hidden";
    element.style.width = "0%";
}

function ShowElement(element) {
    element.style.visibility = "visible";
    element.style.width = "1%";
}

function MoveElement(element, value)
{
    if (value === 40)
    {
        element.style.transform = "none";
        element.style.left = "0px";
    }
    else if (value === 160)
    {
        element.style.transform = "translateX(-100%)";
        element.style.left = "100%";
    }
    else
    {
        let left = GetLeft(value);
        element.style.transform = "translateX(-50%)";
        element.style.left = left + "%";
    }

    ShowElement(element);
}

function GetLeft(value)
{
    let div = (value - 40) * 2;
    return (div / 240) * 100;
}

function GetValue(categori, textValue) {
    if (textValue.trim() === "")
    {
        return 0;
    }

    let value = parseFloat(textValue);

    if (isNaN(value) || value < 40 || value > 160)
    {
        let uppercase = categori.toUpperCase();
        alert(uppercase + " er forkert udfyldt: \"" + textValue + "\"");
        return 0;
    }
    else
    {
        return value;
    }
}

