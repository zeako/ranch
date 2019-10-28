/*
export function someMutation (state) {
}
*/
export function setRestaurantsMutation (state) {
  state.restaurantList = [
    { id: 1, name: 'Chang Ba', image: 'https://img.mishlohim.co.il/menus/5779187/afaead3ae2d84d129c43e8a1a49002ea_1.jpg' },
    { id: 2, name: 'Libira', image: 'https://media-cdn.tripadvisor.com/media/photo-s/04/81/7a/47/libira-brewery-pub.jpg' },
    { id: 3, name: 'Katom', image: 'https://lh3.googleusercontent.com/p/AF1QipP1cR3KUqQhsppG6PAk56PgrG0KwcSnKbR00M9N=s1600-w1280-h1280' },
    { id: 4, name: 'Donatella', image: 'http://www.matkonli.co.il/wp-content/uploads/2015/09/shutterstock_190342751.jpg' },
    { id: 5, name: 'Ava', image: 'https://lh3.googleusercontent.com/p/AF1QipMCTwPXAUFH_1S5rIXuI_YKZpFyVT4u990QxScr=s1600-w1280-h1280' },
    { id: 6, name: 'Shani', image: 'https://d25t2285lxl5rf.cloudfront.net/images/dishes/2b325bdd-fa3f-4531-8e7a-357712296140.jpg' },
    { id: 7, name: 'Linga', image: 'https://media-cdn.tripadvisor.com/media/photo-s/16/5f/02/7b/pizza-linga.jpg' },
    { id: 8, name: 'Berdichev', image: 'src="https://media-cdn.tripadvisor.com/media/photo-s/15/01/54/4e/caption.jpg"' },
    { id: 9, name: 'Sangria', image: 'src="https://media-cdn.tripadvisor.com/media/photo-s/10/97/5c/dd/small-lunch-libira-sandwich.jpg""' }
  ]
}
