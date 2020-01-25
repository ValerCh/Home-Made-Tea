import I18n from 'i18n-js';

import arm from './locales/arm';
import rus from './locales/rus';

I18n.locale = 'arm';

I18n.fallbacks = true;
I18n.translations = {
  arm,
  rus
};

export default I18n;
