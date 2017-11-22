import * as angular from 'angular';
import * as ngAnimate from 'angular-animate';
import * as tmhDynamicLocale from 'angular-dynamic-locale/dist/tmhDynamicLocale';
import uiRouter from '@uirouter/angularjs';
import * as angularFixedTableHeader from 'angular-fixed-table-header';
import * as gettext from 'angular-gettext';
import * as gridster from 'angular-gridster/src/angular-gridster';
import * as angularHttpAuth from 'angular-http-auth/src/http-auth-interceptor';
import * as angularJwt from 'angular-jwt';
import * as ngMessages from 'angular-messages';
import * as angularMoment from 'angular-moment';
import multiStepForm from 'angular-multi-step-form';
import * as ngSanitize from 'angular-sanitize';
import * as uiBootstrapDatepicker from 'angular-ui-bootstrap/src/datepicker';
import * as uiBootstrapDatepickerPopup from 'angular-ui-bootstrap/src/datepickerPopup';
import * as uiBootstrapDropdown from 'angular-ui-bootstrap/src/dropdown';
import * as uiBootstrapModal from 'angular-ui-bootstrap/src/modal';
import * as uiBootstrapPopover from 'angular-ui-bootstrap/src/popover';
import * as uiBootstrapTabs from 'angular-ui-bootstrap/src/tabs';
import * as uiBootstrapTooltip from 'angular-ui-bootstrap/src/tooltip';
import * as uiBootstrapTypeahead from 'angular-ui-bootstrap/src/typeahead';
import * as uiMask from 'angular-ui-mask';
import * as toaster from 'angularjs-toaster';
import * as ngDeviceDetector from 'ng-device-detector';
import * as ngFileUpload from 'ng-file-upload';
import * as ngIdle from 'ng-idle';
import * as ngTable from 'ng-table';
import * as ngStorage from 'ngstorage/ngStorage';
import * as ocLazyLoad from 'oclazyload/dist/ocLazyLoad.require';

require('angular-ui-grid/ui-grid');
require('angular-ui-tree/dist/angular-ui-tree');
require('angular-ui-tree-filter/dist/angular-ui-tree-filter');
require('angular-minicolors/angular-minicolors');
require('angular-summernote/dist/angular-summernote');
require('angular-truncate-2/dist/angular-truncate-2');
require('angular-underscorejs/angular-underscore');
require('clockpicker/dist/bootstrap-clockpicker');
require('oclazyload');
require('re-tree/re-tree');

export const JenkinsApp = angular.module('xen3r0.jenkins', [
    angularJwt,                             // https://github.com/auth0/angular-jwt
    angularMoment,                        // https://github.com/urish/angular-moment
    angularFixedTableHeader,                // https://github.com/daniel-nagy/fixed-table-header
    gettext,                                // angular-gettext
    gridster.name,                          // angular-gridster
    angularHttpAuth,                        // Angular HTTP auth
    ngDeviceDetector,                       // https://github.com/srfrnk/ng-device-detector
    'ui.grid',                              // https://github.com/angular-ui/ui-grid
    'ui.grid.pinning',                      // Pinning for ui grid
    'ui.tree',                              // https://github.com/angular-ui-tree/angular-ui-tree
    'ui.tree-filter',                       // https://github.com/EE/angular-ui-tree-filter
    'minicolors',                           // https://github.com/kaihenzler/angular-minicolors
    multiStepForm.name,                     // https://github.com/troch/angular-multi-step-form
    ngAnimate,                              // ngAnimate
    ngFileUpload,                           // ng-file-upload
    ngIdle,                                 // Idle timer
    ngMessages,                             // ngMessages
    ngSanitize,                             // ngSanitize
    ngStorage.name,                         // ngStorage
    ngTable.name,                           // https://github.com/esvit/ng-table
    ocLazyLoad,                             // https://github.com/ocombe/ocLazyLoad
    'reTree',                               // https://github.com/srfrnk/re-tree
    'summernote',                           // Summernote TODO Voir aussi https://github.com/fraywing/textAngular
    'truncate',                             // Truncate https://github.com/sparkalow/angular-truncate
    tmhDynamicLocale,                       // https://github.com/lgalfaso/angular-dynamic-locale
    toaster,                                // https://github.com/jirikavi/AngularJS-Toaster
    // 'ui.bootstrap',                         // Ui Bootstrap TODO Voir http://mgcrea.github.io/angular-strap/,
    uiBootstrapDatepicker,                  // Ui Bootstrap TODO Voir http://mgcrea.github.io/angular-strap/,
    uiBootstrapDatepickerPopup,             // Ui Bootstrap TODO Voir http://mgcrea.github.io/angular-strap/,
    uiBootstrapDropdown,                    // Ui Bootstrap TODO Voir http://mgcrea.github.io/angular-strap/,
    uiBootstrapModal,                       // Ui Bootstrap TODO Voir http://mgcrea.github.io/angular-strap/,
    uiBootstrapPopover,                     // Ui Bootstrap TODO Voir http://mgcrea.github.io/angular-strap/,
    uiBootstrapTabs,                        // Ui Bootstrap TODO Voir http://mgcrea.github.io/angular-strap/,
    uiBootstrapTooltip,                     // Ui Bootstrap TODO Voir http://mgcrea.github.io/angular-strap/,
    uiBootstrapTypeahead,                   // Ui Bootstrap TODO Voir http://mgcrea.github.io/angular-strap/,
    uiMask,                                 // https://github.com/angular-ui/ui-mask/
    uiRouter,                               // https://github.com/angular-ui/ui-router
    'ui.router.upgrade',                               // https://github.com/angular-ui/ui-router
    'xen3r0.underscorejs',                  // https://github.com/Xen3r0/angular-underscorejs
]);