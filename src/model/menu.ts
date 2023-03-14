export class Menu {
  // Top menu items
  public static readonly NIEUWS = new Menu("Nieuws", "nieuws", null);
  public static readonly BEHEER = new Menu("Beheer", "beheer", null);
  public static readonly ZORGVERLENING = new Menu("Zorgverlening", "zorgverlening", null);

  // Sub menu items
  //BEHEER
  public static readonly BEHEER_MEDEWERKERS = new Menu("Medewerkers", "medewerkers", Menu.BEHEER);
  public static readonly BEHEER_MEDEWERKERS_ZOEKEN = new Menu("Medewerker zoeken", "zoeken", Menu.BEHEER_MEDEWERKERS);
  public static readonly BEHEER_MEDEWERKERS_BEWERKEN = new Menu("Medewerker bewerken", "bewerken", Menu.BEHEER_MEDEWERKERS);

  public static readonly BEHEER_CLIENTEN = new Menu("Cliënten", "clienten", Menu.BEHEER);
  public static readonly BEHEER_CLIENTEN_ZOEKEN = new Menu("Client zoeken", "zoeken", Menu.BEHEER_CLIENTEN);
  public static readonly BEHEER_CLIENTEN_BEWERKEN = new Menu("Client bewerken", "bewerken", Menu.BEHEER_CLIENTEN);


  //NIEUWS
  public static readonly NIEUWS_PERIDOSNIEUWS = new Menu("Peridos Nieuws", "peridos-nieuws", Menu.NIEUWS);
  public static readonly NIEUWS_PERIDOSNIEUWS_NIEUWSBERICHTEN = new Menu("Nieuwsberichten", "nieuwsberichten", Menu.NIEUWS_PERIDOSNIEUWS);


  //ZORGVERLENING
  public static readonly ZORGVERLENING_ZWANGERSCHAPPEN = new Menu("Zwangerschappen", "zwangerschappen", Menu.ZORGVERLENING);
  public static readonly ZORGVERLENING_ZWANGERSCHAPPEN_ZOEKEN = new Menu("Zwangerschap zoeken", "zoeken", Menu.ZORGVERLENING_ZWANGERSCHAPPEN);
  public static readonly ZORGVERLENING_ZWANGERSCHAPPEN_WIJZIGEN = new Menu("Zwangerschap wijzigen", "wijzigen", Menu.ZORGVERLENING_ZWANGERSCHAPPEN);

  public static readonly ZORGVERLENING_AANVRAGEN = new Menu("Aanvragen", "aanvragen", Menu.ZORGVERLENING);
  public static readonly ZORGVERLENING_AANVRAGEN_EERSTETRIMESTER_SEO = new Menu("Eerste trimester SEO", "eerste-trimester-seo", Menu.ZORGVERLENING_AANVRAGEN);
  public static readonly ZORGVERLENING_AANVRAGEN_NIPT = new Menu("NIPT", "nipt", Menu.ZORGVERLENING_AANVRAGEN);


  private constructor(public readonly menuNaam: string, public readonly menuRoute: string | any, public readonly menuParent: Menu | any) {

  }

  public static getTopMenuItems(): Array<Menu> {
    let list: Array<Menu> = []
   Object.values(Menu).forEach((menu: Menu) => {
     if (menu.menuParent == null) {
      list.push(menu);
     }
   })
    return list;
  }
  public static getSideMenuItemsForTop(menu: Menu): Map<Menu, Array<Menu>> {
    let map = new Map<Menu, Array<Menu>>();
    Object.values(Menu).forEach((menuItem: Menu) => {
      if(menu == menuItem.menuParent) {
        map.set(menuItem, this.getMenuItemsForSide(menuItem))
      }
    })
    console.log(map);
    return map;
  }

  public static getMenuItemsForSide(menu: Menu): Array<Menu> {
    let list: Array<Menu> = []
    Object.values(Menu).forEach((menuItem: Menu) => {
      if (menuItem.menuParent == menu) {
        list.push(menuItem);
      }
    })
    return list;
  }

  public getRouteForMenu(): string {
    let strings = []
    strings.push(this.menuRoute)
    if (this.menuParent != null) {
      strings.push(this.menuParent.menuRoute);
      if(this.menuParent.menuParent != null) {
        strings.push(this.menuParent.menuParent.menuRoute)
      }
    }
    let finalRoute = "";
    strings.slice().reverse().forEach((string) => {
      finalRoute+=string+"/"
    })
    return finalRoute
  }
}
