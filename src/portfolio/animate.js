import gsap from "gsap";
import { TimelineMax } from "gsap/all";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const GREET = "Hi! 👋";
const NAME = "My name is Nishanth Gunupudi.";

const type = (element, text, duration) => {
  return gsap.to(element, {
    duration: duration,
    text: text,
    ease: "Linear.easeOut",
  });
};

function about_me() {
  var element = document.querySelector(".swipe-text");
  element.style.display = "block";
}

export function hello() {
  new TimelineMax({ repeat: 0, repeatDelay: 1 })
    .add(type(".greet", GREET, 0.3))
    .add(type(".name", NAME, 2), "greet+=0.5")
    .add(about_me, ".name+=1.5");
}

export function contents() {
    new TimelineMax({ repeat: 0, repeatDelay: 1 })
    .add(type(".about_me", 'About Me', 0.3))
    .add(type(".my_experiences", 'Experiences', 0.3))
    .add(type('.my_abilities', 'Abilities', 0.3))
    .add(type('.my_projects', 'Projects', 0.3))
    .add(type('.contact_me', 'Contact Me', 0.3));
}
