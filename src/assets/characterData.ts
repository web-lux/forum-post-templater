enum PropertyName {
  COLOR = "color",
  STYLE = "style",
  WRAPPER = "wrapper",
  QUOTE = "quote",
  DIALOG = "dialog",
  INTERLUDE = "interlude",
  ASTERISK = "asterisk",
  BR = "br",
}

interface CharacterDataI {
  name: string;
  [PropertyName.COLOR]: string;
  [PropertyName.STYLE]: string;
  [PropertyName.WRAPPER]: string;
  [PropertyName.QUOTE]: string;
  [PropertyName.DIALOG]: string;
  [PropertyName.INTERLUDE]?: string;
  [PropertyName.ASTERISK]?: string;
  [PropertyName.BR]?: string;
  formatButtons: PropertyName[];
}

const ennie: CharacterDataI = {
  name: "Bérénice",
  [PropertyName.COLOR]: "#93b2bd",
  get [PropertyName.STYLE]() {
    return `<style>@import url(https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap);.asterisk,.ennie b, .ennie strong{color:${this[PropertyName.COLOR]}}.ennie{text-align:justify;font-family:Bitter,Merriweather,Georgia,serif;font-size:14px}.ennie-quote{display:block;text-align:right;letter-spacing:5px;text-shadow:1px 0 0 #ff7979,-1px 0 0 #83e2ff;font-family:"Open Sans";text-transform:uppercase;font-weight:700}.ennie-interlude{display:block;border-left:solid 20px var(--dark);padding-left:12px}.ennie-interlude+br,.ennie-quote+br{display:none}.asterisk{font-weight:700;transform:scale(1.8);display:inline-block}.asterisk,.ennie b,.ennie strong, .ennie i,.ennie-interlude{font-size:inherit;font-family:inherit}</style>`;
  },
  [PropertyName.WRAPPER]: '<div class="ennie">{{SLOT}}</div>',
  [PropertyName.QUOTE]: '<div class="ennie-quote">{{SLOT}}</div>',
  [PropertyName.DIALOG]: "[b]{{SLOT}}[/b]",
  [PropertyName.INTERLUDE]: "<div class='ennie-interlude'>{{SLOT}}</div>",
  [PropertyName.ASTERISK]: "<span class='asterisk'>*</span>",
  get formatButtons() {
    return [PropertyName.DIALOG, PropertyName.INTERLUDE, PropertyName.ASTERISK];
  },
};

const solomon: CharacterDataI = {
  name: "Solomon",
  [PropertyName.COLOR]: "goldenrod",
  get [PropertyName.STYLE]() {
    return `<style>.solomon {padding: 10px 20px 10px 20px;} .solomon strong {color: ${this[PropertyName.COLOR]}; font-weight: normal;} .solomon-citation{text-transform: lowercase;text-align:right;font-size:small;color:var(--mid);font-style:italic;letter-spacing:1px}.solomon-citation:after{content:"";width:100%;height:1px;background:var(--mid);display:block;margin-top:10px; margin-bottom: 20px;}</style>`;
  },
  [PropertyName.WRAPPER]: '<div class="solomon nbr">{{SLOT}}</div>',
  [PropertyName.QUOTE]: '<div class="solomon-citation br">{{SLOT}}</div>',
  [PropertyName.DIALOG]: "[b]{{SLOT}}[/b]",
  [PropertyName.BR]: '<p class="solomon-rp br">{{SLOT}}</p>',
  get formatButtons() {
    return [PropertyName.DIALOG, PropertyName.BR];
  },
};

const characterData = [ennie, solomon];

export { characterData, PropertyName };
