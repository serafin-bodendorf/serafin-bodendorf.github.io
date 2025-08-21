//Buttons that copy or delete the contents of a text field.

const copyButton = document.getElementById("copy");
const copyButtonText = copyButton.innerHTML;
const deleteButton = document.getElementById("delete");
const textField = document.getElementById("user-input");

const copyMessages = [
    "✓ Kopiert",
    "😎 Kopiert",
    "🤪 Kopiert",
    "Copy that! 😘",
    "Kopieren geht über studieren! 🤓",
    "Also das sollte keine Anregung zum Schummeln sein 😅",
    "Zitieren geht über Kopieren!",
    "Das was du hier schreibst ist kein Plagiat, oder?",
    "Jetzt, wo ich drüber nachdenke, ist es schon seltsam, <br>\
    dass du in so kurzer Zeit so viel Text produziert hast...",
    "Kopieren bedeutet Riskieren... <br>\
    dass du das intellektuelle Eigentum anderer klaust!",
    "Das kann ich nicht zulassen! <br>\
    Das Textfeld ist ab jetzt abgeschaltet!"
]

copyMessageDuration = [1000, 1000, 1000, 1500, 3000, 5000, 5000, 5000, 10000, 20000, 20000];


const deleteMessages = [
    "",
    "Hey, das war doch gut!",
    "Hör auf, ständig deine Texte zu löschen!",
    ":(",
    "Alles Okay? Du hast jetzt schon zum fünften Mal deinen Text gelöscht!",
    "Perfektionismus kann einen dazu bringen, immer wieder neu zu starten, \
anstatt einfach mal was fertig zu machen. Glaub mir, ich kenne das. \
Aber am Ende darfst du nicht vergessen, dass wahre Perfektion unerreichbar ist. \n\n\
Ich schlage dir folgendes vor: Du drückst jetzt noch einmal auf den \
Löschen-Button, um diesen zugegebenermaßen recht langen Text zu löschen. \
Dann deaktiviere ich den Button und du schreibst deinen Text fertig, egal, was passiert. \n\n\
Okay?",
    ""
]

deleteCounter = 0;
copyCounter = 0;
copyTimer = null;

copyButton.addEventListener("click", copyText);
deleteButton.addEventListener("click", deleteText);

function copyText(){
    navigator.clipboard.writeText(textField.value);

    if (copyCounter < copyMessages.length){
        if (copyTimer) {clearTimeout (copyTimer);}

        if (deleteCounter < 5){
            copyButton.innerHTML = copyMessages[copyCounter];
            
            if (copyCounter < copyMessages.length-1){
                copyTimer = setTimeout(function() {
                    copyButton.innerHTML = copyButtonText;
                }, copyMessageDuration[copyCounter]);
            } else {
                deleteButton.innerHTML=":("
                deleteButton.ariaDisabled=true;
                deleteButton.disabled=true;
                copyButton.ariaDisabled=true;
                copyButton.disabled=true;
                textField.value="Abschreiben ist echt nicht okay!"
                textField.ariaDisabled=true;
                textField.disabled=true;
            }

            copyCounter ++;
        } else {
            if (deleteCounter >= deleteMessages.length){
                copyButton.innerHTML = "Ich bin stolz auf dich! ❤️";
            } else {
                copyButton.innerHTML = "✓ Kopiert";
            }
            copyTimer = setTimeout(function() {
                copyButton.innerHTML = copyButtonText;
            }, 2000);
        }
    }

}

function deleteText(){
    if (copyCounter < 5){
        textField.value=deleteMessages[deleteCounter];
        if (deleteCounter == deleteMessages.length - 2){
            deleteButton.innerHTML="Okay!"
        }
        if (deleteCounter >= deleteMessages.length - 1){
            deleteButton.ariaDisabled=true;
            deleteButton.disabled=true;
            deleteButton.innerHTML="Viel Erfolg!"
        }
        deleteCounter ++;
    } else if (copyCounter < 8){
        textField.value="";
    } else {
        textField.value="Ich habe von den Plagiatvorwürfen gehört! \
Du willst wohl deine Spuren verwischen, aber ich habe mir ALLES gemerkt!";
    }
}