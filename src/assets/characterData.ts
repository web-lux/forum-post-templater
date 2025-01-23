const ennie = {
  color: "#93b2bd",
  get style() {
    return `<style>@import url(https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap);.asterisk,.ennie b, .ennie strong{color:${this.color}}.ennie{text-align:justify;font-family:Bitter,Merriweather,Georgia,serif;font-size:14px}.ennie-quote{display:block;text-align:right;letter-spacing:5px;text-shadow:1px 0 0 #ff7979,-1px 0 0 #83e2ff;font-family:"Open Sans";text-transform:uppercase;font-weight:700}.ennie-interlude{display:block;border-left:solid 20px var(--dark);padding-left:12px}.ennie-interlude+br,.ennie-quote+br{display:none}.asterisk{font-weight:700;transform:scale(1.8);display:inline-block}.asterisk,.ennie b,.ennie strong, .ennie i,.ennie-interlude{font-size:inherit;font-family:inherit}</style>`;
  },
  wrapper: '<div class="ennie">{{SLOT}}</div>',
  quote: '<div class="ennie-quote">{{SLOT}}</div>',
  dialog: "[b]{{SLOT}}[/b]",
  interlude: '<div class="ennie-interlude">{{SLOT}}</div>',
  asterisk: '<span class="asterisk">{{SLOT}}</span>',
};

export const characterData = [ennie];
