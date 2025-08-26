import {
  Grid,
  Cell,
  HTMLStuff,
  OtherStuff,
  Sidebar,
  weightedGroupSum,
  weightedSum,
  Balance,
} from "./library.js";

const balance = new Balance(Infinity);

class Park extends Cell {
  constructor() {
    super("img/park.png", "Park", 100);
    this.sidebar = new Sidebar();
    this.sidebar.add("button", {
      content: "Upgraden zu Spielplatz für 250",
      callback: () => {
        console.log("sdfbdsfbsdfbsdfbsdfbsdfbsdfbdsfbsdfb");
        if (!balance.buy(250)) return;
        this.image.src = "img/park2.png";
        this.sidebar = new Sidebar();
        this.sidebar.add("h3", { content: "Maximale Stufe erreicht" });
        this.sidebar.open();
      },
    });
  }
  onclick() {
    this.sidebar.open();
  }
}

class Krankenhaus extends Cell {
  constructor() {
    super("img/Krankenhaus1.png", "Krankenhaus", 100);
    this.color = "yellow";
    this.sidebar = new Sidebar();
    this.sidebar.add("h3", { content: "Maximale Stufe erreicht" });
  }
  onclick() {
    this.sidebar.open();
  }
}
class Einkaufsladen extends Cell {
  constructor() {
    super("img/Einkaufsladen.png", "Einkaufsladen", 100);
    this.color = "yellow";
    this.sidebar = new Sidebar();
    this.sidebar.add("h3", { content: "Maximale Stufe erreicht" });
  }
  onclick() {
    this.sidebar.open();
  }
}

class Fabrik extends Cell {
  constructor() {
    super("img/Fabrik.png", "Fabrik", 100);
    this.color = "yellow";
    this.sidebar = new Sidebar();
    this.sidebar.add("h3", { content: "Maximale Stufe erreicht" });
  }
  onclick() {
    this.sidebar.open();
  }
}
class Kreuzung extends Cell {
  constructor() {
    super("img/KreuzungTemplate1.png", "Kreuzung", 0);
    this.color = "yellow";
    this.sidebar = new Sidebar();
    this.sidebar.add("h3", { content: "Maximale Stufe erreicht" });
  }
  onclick() {
    this.sidebar.open();
  }
}
class Casino extends Cell {
  constructor() {
    super("img/Casino.png", "Casino", 100);
    this.color = "yellow";
    this.sidebar = new Sidebar();
    this.sidebar.add("h3", { content: "Maximale Stufe erreicht" });
  }
  onclick() {
    this.sidebar.open();
  }
}

class Kindergarten extends Cell {
  constructor() {
    super("img/Kindergarten1.png", "Kindergarten", 100);
    this.color = "yellow";
    this.sidebar = new Sidebar();
    this.sidebar.add("button", {
      content: "Upgraden zu Schule für 250",
      callback: () => {
        console.log("dfgsdfd");
        if (!balance.buy(250)) return;
        this.image.src = "img/Schule1.png";
        this.sidebar = new Sidebar();
        this.sidebar.add("button", {
          content: "Upgraden zu Uni für 250",
          callback: () => {
            console.log("sdfbdsfbsdfbsdfbsdfbsdfbsdfbdsfbsdfb");
            if (!balance.buy(250)) return;
            this.image.src = "img/Uni1.png";
            this.sidebar = new Sidebar();
            this.sidebar.add("h3", { content: "Maximale Stufe erreicht" });
            this.sidebar.open();
          },
        });
        this.sidebar.open();
      },
    });
  }
  onclick() {
    this.sidebar.open();
  }
}
class Häuser extends Cell {
  constructor() {
    super("img/Haueser1.png", "Häuser", 100);
    this.color = "yellow";
    this.sidebar = new Sidebar();
    this.sidebar.add("button", {
      content: "Upgraden zu Reihenhäuser für 250",
      callback: () => {
        if (!balance.buy(250)) return;
        this.image.src = "img/Reihenhäuser.png";
        this.sidebar = new Sidebar();
        this.sidebar.add("button", {
          content: "Upgraden zu Plattenbau für 250",
          callback: () => {
            console.log("sdfbdsfbsdfbsdfbsdfbsdfbsdfbdsfbsdfb");
            if (!balance.buy(250)) return;
            this.image.src = "img/Plattenbau.png";

            this.sidebar = new Sidebar();
            this.sidebar.add("button", {
              content: "Upgraden zu Plattenbau mit Solarplatten für 250",
              callback: () => {
                console.log("sdfbdsfbsdfbsdfbsdfbsdfbsdfbdsfbsdfb");
                if (!balance.buy(250)) return;
                this.image.src = "img/Plattenbau2.png";
                this.sidebar = new Sidebar();
                this.sidebar.add("button", {
                  content: "Upgraden zu Wolkenkratzer für 250",
                  callback: () => {
                    console.log("sdfbdsfbsdfbsdfbsdfbsdfbsdfbdsfbsdfb");
                    if (!balance.buy(250)) return;
                    this.image.src = "img/Plattenbau2.png";
                    this.sidebar = new Sidebar();
                    this.sidebar.add("h3", {
                      content: "Maximale Stufe erreicht",
                    });
                    this.sidebar.open();
                  },
                });
                this.sidebar.open();
              },
            });
            this.sidebar.open();
          },
        });
        this.sidebar.open();
      },
    });
  }
  onclick() {
    this.sidebar.open();
  }
}

class UBahn extends Cell {
  constructor() {
    super("img/UBahn.png", "U-Bahn", 100);
    this.color = "yellow";
    this.sidebar = new Sidebar();
    this.sidebar.add("h3", { content: "Maximale Stufe erreicht" });
  }
  onclick() {
    this.sidebar.open();
  }
}
class Einkaufsstraße extends Cell {
  constructor() {
    super("img/park.png", "Einkaufsstraße", 100);
    this.sidebar = new Sidebar();
    this.sidebar.add("button", {
      content: "Upgraden zu Spielplatz für 250",
      callback: () => {
        console.log("sdfbdsfbsdfbsdfbsdfbsdfbsdfbdsfbsdfb");
        if (!balance.buy(250)) return;
        this.image.src = "img/park2.png";
        this.sidebar = new Sidebar();
        this.sidebar.add("h3", { content: "Maximale Stufe erreicht" });
        this.sidebar.open();
      },
    });
  }
  onclick() {
    this.sidebar.open();
  }
}

const htmlstuff = new HTMLStuff();

htmlstuff.add("h1", "Name des Spieles");
htmlstuff.add("h2", "Deine Aufgabe:");

htmlstuff.add("h3", "Baue eine nachhaltige Stadt");

const grid = new Grid(
  [
    Park,
    Krankenhaus,
    Häuser,
    Kindergarten,
    Fabrik,
    Kreuzung,
    Einkaufsladen,
    Casino,
    UBahn,
  ],
  balance,
  10,
  10,
  600,
  600
);
