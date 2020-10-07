import { combineReducers } from 'redux';
import auth from './auth_reducer';
import user from './user_reducer';
import faq from './faq_reducer';
import project from './projects_reducer';
import analytic from './analytic_reducer';
import cpanel from './cpanel_reducer';

export default combineReducers({
    auth,
    user,
    faq,
    project,
    analytic,
    cpanel,

});
