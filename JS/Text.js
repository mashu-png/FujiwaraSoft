import {Elements, MarqueeText as Text} from "./TextModules/-TextConfig.js"
import {Element as PressReleaseElement ,Title as PressReleaseTitle, Text as PressReleaseText } from "./TextModules/-Pressrelease.js";
import {Title as PhilosophyTitle,Text as PhilosophyText} from "./TextModules/-Philosophy.js";
import {Title as AdvantageTitle,Text as AdvantageText} from "./TextModules/-Advantage.js";
import {Title as ProductTitle,Text as ProductText } from "./TextModules/-Product.js";
import {Title as MapTitle, map as AccessMap, PostCode, Address, TEL } from "./TextModules/-Access.js";

Display_PressRelease();
function Display_PressRelease(){
    let PLCounta = Number(PressReleaseElement.length);
    for(let i = 0;PressReleaseElement.length > i; i++){
        PressReleaseElement[i].innerHTML = PressReleaseText[PLCounta];
        PLCounta--
    }
}



DisplayText();

function DisplayText () {
    Elements.MarqueeElement.innerHTML = Text
    Elements.PressreleaseTitle.innerHTML = PressReleaseTitle
    Elements.PhilosophyTitle.innerHTML = PhilosophyTitle
    Elements.PhilosophyText.innerHTML = PhilosophyText
    Elements.AdvantageTitle.innerHTML = AdvantageTitle
    Elements.AdvantageText.innerHTML = AdvantageText
    Elements.ProductTitle.innerHTML = ProductTitle
    Elements.ProductText.innerHTML = ProductText
    Elements.MapTitle.innerHTML = MapTitle
    Elements.MapText.innerHTML = AccessMap
    Elements.PostCodeText.innerHTML = PostCode
    Elements.AddresText.innerHTML = Address
    Elements.TELText.innerHTML = TEL
}