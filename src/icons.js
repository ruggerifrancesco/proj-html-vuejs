import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


// Single Icons Handling
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'


// Add icons to the library
library.add(faBars, faChevronLeft, faChevronRight, faCartShopping, faTwitter, faYoutube, faFacebookF, faInstagram);

export { FontAwesomeIcon }
