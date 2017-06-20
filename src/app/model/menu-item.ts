export class MenuItem {
  public static MENU_ITEM = [{
    name: 'link1 à test',
    links: [
      {
        name: 'home',
        location: '/home',
      },
      {
        name: 'tarif',
        location: '/tarif',
      },
      {
        name: 'link1-3',
        location: '/link1',
      }]
  }, {
    name: 'link2',
    location: '/link1',
    links: [
      {
        name: 'link2-1',
        location: '/link1',
        fragment: '',
      },
      {
        name: 'link2-2',
        location: '/link1',
        fragment: '',
      },
      {
        name: 'link2-3',
        location: '/link1',
        fragment: '',
      }]
  }, {
    name: 'Home',
    location: '/home',
    links: []
  }, {
    name: 'Tarif',
    location: '/tarif',
    fragment: '',
    links: []
  }, {
    name: 'presentation',
    location: '/presentation',
    fragment: '',
    links: []
  }, {
    name: 'link2',
    location: '/link1',
    links: [
      {
        name: 'link2-1',
        location: '/link1',
        fragment: '',
      },
      {
        name: 'link2-2',
        location: '/link1',
        fragment: '',
      },
      {
        name: 'link2-3',
        location: '/link1',
        fragment: '',
      }]
  }, {
    name: 'presentation',
    location: '/presentation',
    links: [
      {
        name: 'link2-1',
        location: '/presentation',
        fragment: 'section1',
      },
      {
        name: 'link2-2',
        location: 'presentation',
        fragment: 'section2',
      },
      {
        name: 'link2-3',
        location: 'presentation',
        fragment: 'section3',
      }]
  }, {
    name: 'link3',
    location: '/link1',
    links: []
  }];
}
