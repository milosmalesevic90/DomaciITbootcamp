import { Dashboard } from "./layout/dashboard";


const app=document.querySelector('#app');
let dashboard= new Dashboard();
app.appendChild(dashboard.getNode());




/* 
Sa backend-om bi ovo uradili tako sto bi poslali post
 zahtev i gde bi neka funkcija odradila pretragu i poslala 
 nam odgovor true/false na koji bi mi reagovali  sa nasim funkcijama!
*/
/*
zadatak 4 nisam uradio zato sto nisam znao kako da ubacim json fajl
u funkciju da ga pretrazi ili da mu pristupim sa nekom getFunkcijom()
pa cu malo da vas zadrzim posle predavanja cisto kako bi dobi savet
i resio domaci
*/
