/* Palautelomakkeen skriptejä */
// Luodaan modal ponnahdusikkuna, jota voidaan kutsua vastauksissa
const ponnahdusIkkuna = new bootstrap.Modal(document.getElementById("popwindow"), { backdrop: "static" });

/* Lomakkeen tyhjennyksen varmistus. Disabloidaan tyhjennyksen jälkeen email-kenttä */
function tyhjennaPalaute() {
    if (!confirm("Haluatko varmasti tyhjentää kaikki kentät?")) {
        return false
        }    
        document.getElementById('email').disabled = true;
        document.getElementById('email').style.backgroundColor = "#ECE9D8";
        }
    /* Teksti-kentän jäljellä olevien merkkien näyttäminen */
    function tarkistaMerkit() {
        let maxPituus = 5000;
        let merkkejaYhteensa = document.getElementById("viesti").value.length;
        document.getElementById("merkkejaJaljella").value = maxPituus - merkkejaYhteensa;
        }

/* Email-kentän näyttäminen/piilottaminen riippuen halutaanko vastausta palautteeseen */     
    function paivitaEmail() {
        if (document.getElementById('vastaus').checked == true) {
            document.getElementById('email').disabled = false;
            document.getElementById('email').style.backgroundColor = "#FFFFFF";
            } else {
                document.getElementById('email').disabled = true;
                document.getElementById('email').style.backgroundColor = "#ECE9D8";
                document.getElementById('email').value = "";
                }
            }
/* Palautteen lähettämisen tarkastus: vaaditut kentät pitää olla oikein täytetty */        
    function lahetaPalaute() {
        /* Nimi-kentän tarkastus */
        let nimi = document.getElementById("nimi").value;
        if(nimi.length<2) {
            alert("Et antanut nimeäsi!");
            document.getElementById("nimi").focus();
            return false;
            }
            if(nimi.length>50) {
                alert("Nimen pituus on rajoitettu 50 merkkiin!");
                document.getElementById("nimi").focus();
                return false;
                }
                /* Teksti-kentän tarkastus */
                let viesti = document.getElementById("viesti").value;
                if(viesti.length<10) {
                    alert("Et kirjoittanut palautteeseesi mitään tekstiä! (min. 10 merkkiä)");
                    document.getElementById("viesti").focus();
                    return false;
                    }
                if(viesti.length>5000)
                {
                    alert("Palaute-tekstin pituus on rajattu 5000 merkkiin!");
                    document.getElementById("viesti").focus();
                    return false;
                }
                /*Tarkastetaan, onko valittuna, että halutaan palautteeseen vastattavan*/        
                if(document.getElementById("vastaus").checked == true) {
                /* Email-kenttä pitää olla oikein täytetty, jos halutaan palautteeseen vastaus */
                let email=document.getElementById("email").value;
                if (email.length<5 || email.indexOf('@', 0) == -1 || email.indexOf('.', 0) == -1) {
                    alert("Valitsit, että haluat palautteeseesi vastattavan, mutta et antanut sähköpostiosoitettasi tai se on virheellinen!");
                    document.getElementById("email").focus();
                    return false;
                    }
                    if (email.length>50) {
                        alert("Sähköpostiosoitteen pituus on rajoitettu 50 merkkiin!");
                        document.getElementById("email").focus();
                        ponnahdusIkkuna.show();
                        return false;
                    }
                }                      
                /* Spämmieston tarkistus */
                let spamEsto = document.getElementById("spam_esto").value;
                if(spamEsto!="14") {
                    alert("Vastasit väärin kysymykseen: 9+5 = ?");
                    document.getElementById("spam_esto").focus();
                    return false;
                }
            }
            
/*let ponnahdusIkkuna = document.getElementById('popupwindow')

ponnahdusIkkuna.addEventListener('show.bs.modal', function (event) {
  if (!data) {
    return event.preventDefault() // stops modal from being shown
  }
})*/
